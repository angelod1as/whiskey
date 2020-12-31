import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'
import GlobalStyle from '@styles/GlobalStyle'

// TODO: Head & SEO
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <meta name="author" content="Angelo Dias <oiangelodias@gmail.com>" />
        {/* Primary Meta Tags */}
        <title>Whiskey selection</title>
        <meta name="title" content="Whiskey selection" />
        <meta
          name="description"
          content="Choose your favorite flavour and enjoy your drink"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whisky-kappa.vercel.app/" />
        <meta property="og:title" content="Whiskey selection" />
        <meta
          property="og:description"
          content="Choose your favorite flavour and enjoy your drink"
        />
        <meta property="og:image" content="https://i.imgur.com/svBR21I.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://whisky-kappa.vercel.app/"
        />
        <meta property="twitter:title" content="Whiskey selection" />
        <meta
          property="twitter:description"
          content="Choose your favorite flavour and enjoy your drink"
        />
        <meta
          property="twitter:image"
          content="https://i.imgur.com/svBR21I.png"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
