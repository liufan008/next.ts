import * as React from "react";
import Router from "next/router";
import Link from "next/link";
import Layout from "~/components/Layout";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <ReadMore />
    </Layout>
  );
};
export default IndexPage;

function ReadMore(): JSX.Element {
  return (
    <div>
      Click{" "}
      <span onClick={(): Promise<boolean> => Router.push("/stars")}>
        👉🏻here 👈🏻
      </span>{" "}
      to see some ⭐⭐⭐
    </div>
  );
}
