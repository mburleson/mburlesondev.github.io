import * as React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Intro from '../components/intro'
import ProjectsIntro from '../components/projects-intro'
import Slider from '../components/slider'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Hero></Hero>
      <Intro></Intro>
      <ProjectsIntro></ProjectsIntro>
      <Slider></Slider>
    </Layout>
  )
}

export default IndexPage