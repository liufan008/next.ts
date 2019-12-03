import React from "react";
import { AppContext, AppInitialProps } from "next/app";
import Link from "next/link";
import NProgress from "nprogress";
import Router from "next/router";
import Head from "next/head";

Router.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({
  Component,
  pageProps
}: AppContext & AppInitialProps): JSX.Element => (
  <>
    <Head>
      <link rel="stylesheet" type="text/css" href="/nprogress.css" />
    </Head>
    <nav>
      <style jsx>{`
        a {
          margin: 0 10px 0 0;
        }
      `}</style>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/stars" as="github-stars">
        <a>Stars</a>
      </Link>
    </nav>
    <Component {...pageProps} />
  </>
);

export default App;
