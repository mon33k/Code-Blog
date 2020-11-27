

module.exports = {
  siteMetadata: {
    title: `Gatsby Markdown Blog`,
    description: `Learn how to make a blog with Gatsby and Markdown posts.`,
    },
    pathPrefix: "/Hundred-Days-Of-Code-Log",
    plugins: [
      {
          resolve: `gatsby-plugin-mdx`,
          options: {
              extensions: [`.mdx`, `.md`],
          },
      },
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `posts`,
              path: `${__dirname}/src/posts`,
          },
      },
    ],
}
