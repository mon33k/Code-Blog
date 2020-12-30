const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `Mdx`) {
        const value = createFilePath({ node, getNode })

        createNodeField({
            name: `slug`,
            node,
            value: `/posts${value}`,
        })
    }
}



exports.createPages = async ({ graphql, actions, reporter }) => {

        const { createPage } = actions

        const result = await graphql
        (`
            query {
                allMdx {
                    edges {
                        node {
                            id
                            fields {
                            slug
                            }
                        }
                    }
                }
            }
        `)
    
        if (result.errors) {
            reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
        }
    
        // Create blog post pages.
        const posts = result.data.allMdx.edges
        const templatePath =  path.resolve(`./src/templates/blog-post.js`)
        console.log("posts", JSON.stringify(posts, null, 4))
    
        posts.forEach(({ node }, index) => {
            console.log("nodee ", node.fields.slug)
            createPage({
                path: node.fields.slug,
                component: templatePath,
                context: { 
                    slug: node.fields.slug
                },
            })
        })

//slug: node.fields.slug,
   
   
}




