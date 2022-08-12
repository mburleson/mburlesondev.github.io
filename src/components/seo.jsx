import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const Seo = ({ title, description, location, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, icon, image, siteUrl, twitterUsername, } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    location: location,
    image: `${siteUrl}${image}`,
    icon:`${siteUrl}${icon}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title} | {seo.description} | {seo.location}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:type" content={seo.image} />
      <meta property="og:url" content={seo.siteUrl} />
      <meta property="og:image" content={seo.image} />
      <link rel="icon" content={seo.image} />
      {children}
    </>
  )
}

export default Seo