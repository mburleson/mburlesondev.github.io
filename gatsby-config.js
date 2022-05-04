module.exports = {

    siteMetadata: {
      title: "Megan Burleson",
      siteUrl: "https://MeganBurleson.com",
      description: "Graphic Designer & Frontend Developer",
      icon: "../images/favicon.png",
      image: "../images/favicon.png",
    },
    plugins: [
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
      "gatsby-plugin-fontawesome-css",
      "gatsby-plugin-anchor-links",
      "gatsby-plugin-gatsby-cloud",
      "gatsby-plugin-scroll-reveal",
      {
        resolve: "gatsby-plugin-google-analytics",
        options: {
          // The property ID; the tracking code won't be generated without it
          trackingId: "UA-64901912-1",
          // Defines where to place the tracking script - `true` in the head and `false` in the body
          head: false,
        },
      },
      {
        resolve: `gatsby-plugin-feed`,
        options: {
          feeds: [
            {
              serialize: ({ query: { site, allMdx } }) => {
                return (
                  allMdx.nodes.map(node => {
                    return Object.assign({}, node.frontmatter, {
                      description: node.excerpt,
                      pubDate: node.date,
                      guid: site.siteMetadata.siteUrl + '/blog/' + node.id,
                      url: encodeURI(site.siteMetadata.siteUrl + '/blog/' + node.slug),
                    })
                  })
                )
              },
              query: `
              {
                site {
                  siteMetadata {
                    title
                    description
                    siteUrl
                    site_url: siteUrl
                  }
                }
                allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                  nodes {
                    frontmatter {
                      title
                      date
                      excerpt
                      thumbnail {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                    id
                    slug
                  }
                }
              }
            `,
        output: '/rss.xml',
        title: "Megan Burleson's Blog Feed",
      },
          ]
        },
      },
    ],
  };

