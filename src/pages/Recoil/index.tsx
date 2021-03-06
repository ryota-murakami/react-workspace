import React from 'react'
import { RecoilRoot } from 'recoil'
import { Layout, Container } from './index.style'
import Counter from './Counter'

const RecoilPage = () => {
  return (
    <RecoilRoot>
      <Layout>
        <Container>
          <Counter />
        </Container>
      </Layout>
    </RecoilRoot>
  )
}

export default RecoilPage
