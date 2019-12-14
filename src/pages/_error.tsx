import * as React from 'react'
import Layout from '~/views/layouts/Layout'

const ErrorPage: React.FC = () => {
  return (
    <Layout title="Error | Next.js + TypeScript Example">
      <p>This does not exist.</p>
    </Layout>
  )
}

export default ErrorPage
