import * as React from 'react'
import Layout from '~/views/layouts/Layout'
import { NextPage } from 'next'
import styled from 'styled-components'

const IndexPage: NextPage = () => {
  return (
    <>
      <Layout title="Home | Next.js + TypeScript Example">
        <StyledHeader>Hello Next.js 👋</StyledHeader>
      </Layout>
    </>
  )
}
export default IndexPage

const StyledHeader = styled.h1`
  color: var(--color-primary-light);
`
