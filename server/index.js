const Fastify = require("fastify");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Pool } = require("pg");

const connectDB = new Pool(
  {
    user: process.env.POSTGRES_USER || "postgres",
    host: process.env.POSTGRES_HOST || "localhost",
    database: process.env.POSTGRES_DB || "next_shop",
    password: process.env.POSTGRES_PASSWORD || "1234",
    port: process.env.POSTGRES_PORT || 5432,
  },
  () => {
    console.log("data is connection");
  }
);

const optLogin = {
  schema: {
    body: {
      type: "object",
      required: ["email", "password"],
      properties: {
        email: { type: "string" },
        password: { type: "string" },
        test: { type: "number" },
      },
    },
    response: {
      200: {
        type: "object",
        properties: {
          token: { type: "string" },
          msg: { type: "string" },
        },
      }
    }
  }
}

const optGetAllUsers = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            email: { type: "string" },
            password: { type: "string" },
            fname: { type: "string" },
          }
        }
      }
    }
  },
  preHandler: this.validateToken
}

const app = Fastify({ logger: true });

app.register(require("fastify-cors"));

const validateToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      res.status(401).send({ message: "No token provided" });
    }
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, "123456");
    if (!decoded) {
      res.status(401).send({ message: "Invalid token" });
    } else {
      console.log(decoded);
      next();
    }
  } catch (error) {
    res.status(401).send({ message: "Invalid token" });
  }
};

app.get("/users", optGetAllUsers, async (req, res) => {
  try {
    const sql = "SELECT * FROM users";
    const result = await connectDB.query(sql);
    const rows = result.rows;
    console.log(rows);
    res.status(200).send(result.rows);

  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.post("/login", optLogin, async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await connectDB.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      await bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            {
              id: user.id,
              email: user.email,
              fname: user.fname,
              lname: user.lname,
            },
            "123456",
            { expiresIn: "1h" }
          );
          res.status(200).send({ token, msg: "Login success" });
        } else {
          res.status(401).send({ message: "Invalid password", err: err.message });
        }
      });
    } else {
      res.status(401).send({ message: "Invalid email" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }


});

app.post("/register", async (req, res) => {
  const { email, password, fname, lname } = req.body;
  const checkEmail = await connectDB.query(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );
  if (checkEmail.rows.length > 0) {
    res.status(401).send({ message: "Email already exists" });
  } else {
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    await connectDB.query(
      "INSERT INTO users (id, email, password, fname, lname) VALUES (default, $1, $2, $3, $4)",
      [email, hash, fname, lname]
    );
    res.status(200).send({ msg: "success" });
  }
});

app.listen(3300, () => {
  console.log(`Server is running on port ${3300}`);
});
