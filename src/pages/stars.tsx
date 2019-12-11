import fetch from 'isomorphic-unfetch'
import Layout from '~/views/layouts/Layout'

function Page({ stars }: { stars: string }): JSX.Element {
  return (
    <Layout title="Stars | Next.js + TypeScript Example">
      <h1>stars: {stars}</h1>
    </Layout>
  )
}

Page.getInitialProps = async (): Promise<any> => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Page
