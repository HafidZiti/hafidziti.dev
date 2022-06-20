import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { AppProps } from "next/app";
import "./../components/Logo/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hafid Ziti - Front-end Developer</title>
        <meta
          name="description"
          content="I'm Hafid Ziti, a self-taught front-end develop, interested in the web, JS lover"
        />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
