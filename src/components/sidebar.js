import * as React from 'react'
import * as blogStyles from  './blogstyles.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitch, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'gatsby'

const Sidebar = ({data}) => {
  return (
    <section className={blogStyles.sidebar}>
     <GatsbyImage
         image={node.frontmatter.sidebar_image.childImageSharp.gatsbyImageData}
        />
      <ul>
      <li><Link to="https://www.facebook.com/CreativityandCode" rel="noreferrer" target="_blank" alt="CreativityandCode on Facebook"> <FontAwesomeIcon icon={faFacebook} size='2x' /></Link></li>
      <li><Link to="https://twitter.com/CreativitynCode" target="_blank" rel="noreferrer" alt="CreativitynCode on Twitter"><FontAwesomeIcon icon={faTwitter} size='2x' /></Link></li>
      <li><Link to="https://www.instagram.com/creativityandcode/" target="_blank" alt="CreativityandCode on Instagram" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size='2x' /></Link></li>
      <li><Link to="https://www.pinterest.com/creativityandcode" target="_blank" alt="CreativityandCode on Pinterest" rel="noreferrer"><FontAwesomeIcon icon={faPinterest} size='2x' /></Link></li>
      <li><Link to="https://www.twitch.tv/creativityandcode" target="_blank" alt="CreativityandCode on Twitch" rel="noreferrer"><FontAwesomeIcon icon={faTwitch} size='2x' /></Link></li>
      </ul>
    </section>
  )
 }

 export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        sidebar_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

 export default Sidebar
