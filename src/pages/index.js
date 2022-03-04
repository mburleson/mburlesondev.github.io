import * as React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Intro from '../components/intro'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Hero></Hero>
      <Intro></Intro>
    </Layout>
  )
}

export default IndexPage