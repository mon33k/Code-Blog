

module.exports = {
    siteMetadata: {
        title: "100 Days Of Code - First Round",
        menuLinks: [
            {
                name: 'Day 1',
                link: '/posts/2021/2021-01-12-first-post/'
            },
            {
                name: 'Day 2',
                link: '/posts/2021/2021-01-13-second-post/'
            },
            {
                name: 'Day 3',
                link: '/posts/2021/2021-01-14-third-post/'
            }
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
        {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                `gatsby-remark-relative-images`,
                `gatsby-remark-gifs`,
                {
                  resolve: `gatsby-remark-images`,
                  options: {
                    maxWidth: 800,
                    linkImagesToOriginal: false,
                    sizeByPixelDensity: true,
                    showCaptions: true
                  }
                },
              ]
            }
          },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sass`
    ],
}