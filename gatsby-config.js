

module.exports = {
    siteMetadata: {
        title: "100 Days Of Code - First Round",
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
