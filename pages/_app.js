import Nav from '../components/ui/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Nav />

    <Component {...pageProps} />
  </>
}

export default MyApp
