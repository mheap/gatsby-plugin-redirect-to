# gatsby-plugin-redirect-to

This plugin does the opposite of [gatsby-redirect-from](https://www.gatsbyjs.org/packages/gatsby-redirect-from/).

`gatsby-redirect-from` allows you to specify URLs that should all point to a specific page. This plugin allows you to redirect from a page to another URL (internal or external).

This is useful when you write posts on external sites that you want to appear like normal blog posts, but redirect elsewhere when visited.

## Prerequisites

- Gatsby v2
- Markdown files processed using `gatsby-transformer-remark`

> If there is a slug present on `allMarkdownRemark.edges.node.fields` when this plugin executes, that will be used. If not, the default slug process in `gatsby-starter-blog` will be used to create a slug automatically

## Installation

```bash
npm install --save gatsby-plugin-redirect-to
```

Then include the plugin in `gatsby-config.js` _before_ `gatsby-transformer-remark`

```javascript
plugins: ["gatsby-plugin-redirect-to"];
```

> This plugin will **not** work locally by default. You will need to enable the `redirectInBrowser` option to enable local redirects

## Usage

In your markdown's frontmatter, add a `redirect` key:

```yaml
---
title: Blog post on other site
redirect: https://example.com/external-blog-post
---

```

## Options

By default, this plugin will create permanent redirects, and will force a redirect even if the content exists (by design; the content has to exist for a `redirect` key to exist). This is equivalent to the following configuration:

```javascript
plugins: [
  {
    resolve: `gatsby-plugin-redirect-to`,
    options: {
      force: true,
      isPermanent: true,
    },
  },
];
```

If you want to test locally, use the following config:

```javascript
plugins: [
  {
    resolve: `gatsby-plugin-redirect-to`,
    options: {
      force: true,
      isPermanent: true,
      redirectInBrowser: true,
    },
  },
];
```

Any of the parameters listed in [createRedirect](https://www.gatsbyjs.org/docs/actions/#createRedirect) are valid options to pass to this plugin
