import Head from 'next/head'
import Nav from '../components/ui/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Awesome Frontend Dev Here!</title>

      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
    </Head>
    <Nav />

    <Component {...pageProps} />
  </>
}

export default MyApp
