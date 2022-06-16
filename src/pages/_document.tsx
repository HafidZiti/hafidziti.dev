import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Hafid Ziti - Front-end Developer</title>
          <meta
            name="description"
            content="I'm Hafid Ziti, a self-taught front-end develop, interested in the web, JS lover"
          />
          <link
            rel="icon"
            sizes="any"
            type="image/svg+xml"
            href="/favicon.svg"
          />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
