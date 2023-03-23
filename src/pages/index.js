import * as React from 'react'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Intro from '../components/intro'
import Testimonials from '../components/testimonials'
import WhatIDo from '../components/whatIdo'


const IndexPage = () => {

  return (
<>
    <Layout>
      <Hero></Hero>
      <Intro></Intro>
      <WhatIDo></WhatIDo>
      <Testimonials></Testimonials>
    </Layout>
  </>  
  )
}

export const Head = () => {
  return <Seo title="Megan Burleson"/>;
  };

export default IndexPage

