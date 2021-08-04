
import Header from "../components/header"
import Footer from "../components/footer"

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
  <>
  <Header />
  <Component {...pageProps} />
  <Footer />
  </>
  )
}

export default MyApp
