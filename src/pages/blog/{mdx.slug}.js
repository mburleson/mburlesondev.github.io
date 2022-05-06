import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitch, faTwitter, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import BlogLayout from '../../components/bloglayout'
import SubscriptionForm from '../../components/subscriptionform'
import * as blogStyles from  '../../components/blogstyles.module.css'

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  const sidebarImage = getImage(data.mdx.frontmatter.sidebar_image)

  return (
    <BlogLayout pageTitle={data.mdx.frontmatter.title}>
    <section className={blogStyles.breadcrumbContainer}><p className={blogStyles.postBreadcrumb}><Link to={`/blog`}>Blog</Link> / <Link to={`/blog/${data.mdx.slug}`}>{data.mdx.frontmatter.title}</Link></p></section>
    <section className={blogStyles.postContainer}>
      <section className={blogStyles.post}>
      <GatsbyImage
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
          className={blogStyles.hero_image}
        />
            
      <h2>{data.mdx.frontmatter.title}</h2>
        <section className={blogStyles.postContent}>
          <MDXRenderer>
            {data.mdx.body}
          </MDXRenderer>
        </section>  
        </section>
        <section className={blogStyles.sidebar}>
        <GatsbyImage
          image={sidebarImage}
          alt="Megan Burleson"
          className={blogStyles.sidebarImage}
        />
        <ul>
        <li><Link to="https://www.facebook.com/CreativityandCode" rel="noreferrer" target="_blank" alt="CreativityandCode on Facebook"> <FontAwesomeIcon icon={faFacebook} size='2x' /></Link></li>
        <li><Link to="https://twitter.com/CreativitynCode" target="_blank" rel="noreferrer" alt="CreativitynCode on Twitter"><FontAwesomeIcon icon={faTwitter} size='2x' /></Link></li>
        <li><Link to="https://www.instagram.com/creativityandcode/" target="_blank" alt="CreativityandCode on Instagram" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size='2x' /></Link></li>
        <li><Link to="https://www.pinterest.com/creativityandcode" target="_blank" alt="CreativityandCode on Pinterest" rel="noreferrer"><FontAwesomeIcon icon={faPinterest} size='2x' /></Link></li>
        <li><Link to="https://www.twitch.tv/creativityandcode" target="_blank" alt="CreativityandCode on Twitch" rel="noreferrer"><FontAwesomeIcon icon={faTwitch} size='2x' /></Link></li>
        <li><Link to="https://www.linkedin.com/in/meganburleson/" target="_blank" alt="Megan Burleson on LinkedIn" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size='2x' /></Link></li>
        
        </ul>
        <hr/>
        <h2>about me</h2>
        <p>Hello! My name is Megan Burleson, and I am a Designer and Developer residing in Michigan.
          I spread happiness by combining code and creativity to design graphics and build websites, apps and digital products that are fun, usable and accessible to everyone. Basically, I like to create art and code fun things!</p>
        <Link to="/about"><button>read more</button></Link>
        <hr/>
        <SubscriptionForm></SubscriptionForm>
        </section>
        </section>
    </BlogLayout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
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

export default BlogPost