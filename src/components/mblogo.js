import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export function MbLogo() {
  return <StaticImage src="../images/mblogo.png" 
    alt="meganburlesonlogo" 
    placeholder="blurred"
    layout="fixed"
    width={60}
    height={60}
/>
}

export default MbLogo