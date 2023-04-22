module.exports = {
    siteMetadata: {
      title: "Megan Burleson",
      siteUrl: "https://MeganBurleson.com",
      description: "Graphic Designer & Web Developer",
      location: "Michigan",
      keywords: "Web Designer, Graphic Designer, Michigan",
      icon: "/src/images/favicon.png",
      image: "/src/images/ogimage.png",
      twitterUsername: "@CreativitynCode",
    },
    plugins: [
      `gatsby-plugin-recaptcha`,
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          icon: 'src/images/favicon.png',
        },
      },
      "gatsby-plugin-mdx",
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                // It's important to specify the maxWidth (in pixels) of
                // the content container as this plugin uses this as the
                // base for generating different widths of each image.
                maxWidth: 590,
              },
            },
          ],
        },
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `blog`,
          path: `${__dirname}/blog`,
        }
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `portfolio`,
          path: `${__dirname}/portfolio`,
        }
      },
      "gatsby-plugin-fontawesome-css",
      {
        resolve: "gatsby-plugin-anchor-links",
        options: {
          offset: -150
        }
      },
      "gatsby-plugin-gatsby-cloud",
      "gatsby-plugin-scroll-reveal",
      {
  resolve: `gatsby-plugin-google-gtag`,
  options: {
    trackingIds: [
    "G-XFFM3FTTYS", // Google Analytics / GA
    ],
    pluginConfig: {
      // Puts tracking script in the head instead of the body
      head: true
    },
  },
},

    ],
  };

