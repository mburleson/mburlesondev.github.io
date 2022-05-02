module.exports = {

    siteMetadata: {
      title: "Megan Burleson",
      siteUrl: "https://MeganBurleson.com",
      blogUrl: "https://MeganBurleson.com/blog",
      description: "Graphic Designer & Frontend Developer",
      icon: "../images/favicon.png",
      image: "../images/favicon.png",
    },
    plugins: [
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `blog`,
          path: `${__dirname}/blog`,
        }
      },
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
          query: `
            {
              site {
                siteMetadata {
                  title
                  description
                  blogUrl
                  blog_url: blogUrl
                }
              }
            }
          `,
          feeds: [
            {
              serialize: ({ query: { site, allMdx } }) => {
                return (
                   allMdx.nodes.map(node => {
                    return Object.assign({}, node.frontmatter, {
                      description: node.frontmatter.excerpt,
                      date: node.frontmatter.date,
                      url:
                        site.siteMetadata.blogUrl +
                        node.frontmatter.slug,
                    })
                  })
                )
              },
              
            
              query: `
              query {
                allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                  nodes {
                    frontmatter {
                      title
                      date
                      excerpt
                    }
                    id
                    slug
                  }
                }
              }
            `,
        output: '/rss.xml',
        title: "Megan's RSS Feed",
      },
          ]
        },
      },
    ],
  };

