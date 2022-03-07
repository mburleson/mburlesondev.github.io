module.exports = {
    siteMetadata: {
      title: "Megan Burleson",
      description: "Designer & Developer",
    },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      "gatsby-plugin-fontawesome-css",
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `blog`,
          path: `${__dirname}/blog/`,
        },
      },
      "gatsby-plugin-mdx",
    ],
  };