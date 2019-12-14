import React from 'react'
import NProgress from 'nprogress'
import Router from 'next/router'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import withData from '~/utils/withApollo'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '~/styles/theme'
import GlobalStyle from '~/styles/globals'

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

interface Props {
  apollo: ApolloClient<{}>
}

class MyApp extends App<Props> {
  render(): JSX.Element {
    const { Component, pageProps, apollo } = this.props
    return (
      <ThemeProvider theme={theme}>
        <ApolloProvider client={apollo}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    )
  }
}

export default withData(MyApp)
