import * as React from "react";
import Head from "next/head";

type Props = {
  title?: string;
};

const Layout: React.FC<Props> = ({ children, title = "Layout Title" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
    <footer>
      <hr />
      <span>Im here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;