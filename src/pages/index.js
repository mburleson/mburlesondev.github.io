import * as React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Intro from '../components/intro'
import ProjectsIntro from '../components/projects-intro'
import Testimonials from '../components/testimonials'
import WhatIDo from '../components/whatIdo'


const IndexPage = () => {

  return (
<>
    <Layout>
      <Hero></Hero>
      <Intro></Intro>
      <ProjectsIntro></ProjectsIntro>
      <WhatIDo></WhatIDo>
      <Testimonials></Testimonials>
    </Layout>
  </>  
  )
}

export default IndexPage

