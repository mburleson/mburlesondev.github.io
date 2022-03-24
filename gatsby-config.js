require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {

    siteMetadata: {
      title: "Megan Burleson",
      siteUrl: "https://MeganBurleson.com",
      description: "Graphic Designer & Frontend Developer",
      icon: "../images/favicon.ico",
      image: "../images/favicon.ico",
    },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      "gatsby-plugin-fontawesome-css",
      "gatsby-plugin-anchor-links",
      "gatsby-plugin-gatsby-cloud",
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
        },
        resolve: "gatsby-plugin-google-analytics",
        options: {
          // The property ID; the tracking code won't be generated without it
          trackingId: "UA-64901912-1",
          // Defines where to place the tracking script - `true` in the head and `false` in the body
          head: false,
        },
      },
    ],
    
  };