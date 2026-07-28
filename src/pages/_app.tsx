import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { AppProps } from "next/app";
import "./../components/Logo/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hafid Ziti - Senior Front-end Developer</title>
        <meta
          name="description"
          content="I'm Hafid Ziti, a self-taught senior front-end developer, interested in the web, JS lover"
        />
        <meta name="language" content="English" />
        <meta name="author" content="Hafid Ziti" />

        {/* Open Graph / Linkedin / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hafidziti.dev/" />
        <meta
          property="og:title"
          content="Hafid Ziti | Senior Front-end Developer"
        />
        <meta
          property="og:description"
          content="Hello world! I'm Hafid Ziti, a self-taught front-end developer, JS lover."
        />
        <meta property="og:image" content="https://hafidziti.dev/banner.svg" />
        <meta property="og:image:alt" content="Hafid Ziti" />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hafidziti.dev/" />
        <meta property="twitter:site" content="@ztr_hafid" />
        <meta
          property="twitter:title"
          content="Hafid Ziti | Senior Front-end Developer"
        />
        <meta
          property="twitter:description"
          content="Hello world! I'm Hafid Ziti, a self-taught senior front-end developer, JS lover."
        />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
