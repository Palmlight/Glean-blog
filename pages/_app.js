import App from "next/app"
import Head from "next/head"
import { createContext, useEffect } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "tailwindcss/tailwind.css"
import "../assets/css/style.css"
import { getStrapiMedia } from "../lib/media"
import { fetchAPI } from "../lib/api"

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps

  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag("js", new Date())

    gtag("config", "G-K74D9ZTBZT")
  }, [])

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={global.favicon} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={true}
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&family=Work+Sans&display=swap"
          rel="stylesheet"
        />
        <meta
          name="google-site-verification"
          content="xGS71wiR7nGEYmaUPew1ZFTpWRG7sDtcsiEU-_qjK8M"
        />
        <script
          data-ad-client="ca-pub-2759040475568970"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />

        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-K74D9ZTBZT"
        ></script>
        {/* <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-K74D9ZTBZT');
</script> */}
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async ctx => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const global = await fetchAPI("/global")
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } }
}

export default MyApp
