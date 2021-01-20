

module.exports = {
    siteMetadata: {
        title: "Monique's Code Blog",
        menuLinks: [
            {
                name: 'First Post',
                link: '/posts/2021/2021-01-12-first-post/'
            },
            {
                name: 'Pomodoro App',
                link: '/posts/2021/2021-01-13-second-post/'
            },
            {
                name: 'Adding Syntax Highlight',
                link: '/posts/2021/2021-01-14-third-post/'
            },
            // {
            //     name: 'Day 4',
            //     link: '/posts/2021/2021-01-15-fourth-post/'
            // },

        ]

    },
    
    pathPrefix: "/Code-Blog",
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
                {
                    resolve: `gatsby-remark-prismjs`,
                    options: {},
                }
              ]
            }
          },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sass`
    ],
}