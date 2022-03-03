import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export function MbLogoType() {
  return <StaticImage src="../images/mblogotype.png" 
    alt="megan burleson designer developer" 
    placeholder="blurred"
    layout="fixed"
    width={300}
/>
}

export default MbLogoType