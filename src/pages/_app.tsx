import React from "react";
import NProgress from "nprogress";
import Router from "next/router";
import Head from "next/head";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import withData from "~/utils/withApollo";
import App from "next/app";

Router.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

interface Props {
  apollo: ApolloClient<{}>;
}

class MyApp extends App<Props> {
  render(): JSX.Element {
    const { Component, pageProps, apollo } = this.props;
    return (
      <>
        <ApolloProvider client={apollo}>
          <Head>
            <link rel="stylesheet" type="text/css" href="/nprogress.css" />
          </Head>
          <Component {...pageProps} />
        </ApolloProvider>
      </>
    );
  }
}

export default withData(MyApp);
