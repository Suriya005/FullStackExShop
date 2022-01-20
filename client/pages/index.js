import Navbar from "../components/Navbar";
import Shop from "../components/shop";



export default function IndexPage() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Navbar />
          <Shop />
        </div>
      </div>
    </>
  )
}
