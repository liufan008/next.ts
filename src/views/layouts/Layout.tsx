import * as React from 'react'
import Head from 'next/head'
import Header from '~/views/components/Header'
import Footer from '~/views/components/Footer'

type IProps = {
  title?: string
}

const Layout: React.FC<IProps> = ({ children, title = 'Layout Title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
