
import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as projectsIntrostyles from './projects-intro.module.css'

const ProjectsIndex = () => {
  return (
    <div className={projectsIntrostyles.projectsIntro}>
      <h2 id="projects">
        <StaticImage src="../images/projectseye.png"
        alt="megan burleson designer developer" 
        placeholder="blurred"
        layout="fixed"
        width={100}/>projects
      </h2>
      <p>I've worked on a variety of projects</p>
    </div>
  )
}

export default ProjectsIndex