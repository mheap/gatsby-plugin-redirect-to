const { createFilePath } = require(`gatsby-source-filesystem`);

async function onCreateNode({ actions, node, getNode }, options) {
  if (node.internal.type === `MarkdownRemark`) {
    if (node.frontmatter.redirect) {
      let from;
      // Where are we redirecting from?
      if (node.fields && node.fields.slug) {
        // if there's already a slug, use that value
        from = node.fields.slug;
      } else {
        // Otherwise use the behaviour from gatsby-starter-blog
        from = createFilePath({ node, getNode });
      }

      actions.createRedirect(
        Object.assign(
          {
            fromPath: from,
            toPath: node.frontmatter.redirect,
            isPermanent: true,
            force: true,
          },
          options
        )
      );
    }
  }
}
exports.onCreateNode = onCreateNode;
