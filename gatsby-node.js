const path = require('path');


exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const Tags = path.resolve('src/pages/portfolio/tag.js');

  const result = await graphql(`
    {
      tagsGroup: allMdx(limit: 2000 filter: {fileAbsolutePath: {regex: "/portfolio/"}}) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  // ...

  // Extract tag data from query
  const tags = result.data.tagsGroup.group;

  // Make tag pages
  tags.forEach((tag)  => {
    createPage({
      path: `/portfolio/${(tag.fieldValue)}/`,
      component: Tags,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};