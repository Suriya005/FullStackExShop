import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

 useEffect(() => {
   typeof document !== undefined ? require("bootstrap/dist/js/bootstrap") : null;
 }, []);

  return <Component {...pageProps} />
}

export default MyApp
