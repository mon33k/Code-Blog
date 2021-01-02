

module.exports = {
    siteMetadata: {
        title: "100 Days Of Code - First Round",
        menuLinks: [
            {
                name: 'Day 1',
                link: '/posts/2020/2020-12-31-first-post/'
            },
            // {
            //     name: 'Day 2',
            //     link: '/posts/2020/2020-09-05-second-post/'
            // },
            // {
            //     name: 'Day 3',
            //     link: '/posts/2020/2020-09-10-third-post/'
            // }
        ]

    },
    
    pathPrefix: "/Hundred-Days-Of-Code-Log",
    plugins: [
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                defaultLayouts:{
                    default: `${__dirname}/src/templates/blog-post.js`
                }
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/pages/posts`,
            },
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
              pathToConfigModule: `src/utils/typography`,
            },
          },
        `gatsby-transformer-remark`,
        `gatsby-plugin-sass`
    ],
}