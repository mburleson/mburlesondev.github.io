module.exports = {

    siteMetadata: {
      title: "Megan Burleson",
      titleTemplate:"%s Designer and Developer",
      siteUrl: "https://MeganBurleson.com",
      description: "Hello! My name is Megan Burleson, and I am a Designer and Developer residing in Michigan. I spread happiness by combining code and creativity to design graphics and build websites, apps and digital products that are attractive, usable and accessible to everyone.",
      icon: "../images/favicon.ico",
      image: "../images/favicon.ico",
    },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      "gatsby-plugin-fontawesome-css",
      "gatsby-plugin-anchor-links",
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-gatsby-cloud",
      {
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