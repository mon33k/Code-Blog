import React from 'react';
import { graphql, Link } from 'gatsby'
// import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../layouts/index'


export default ({children, pageContext}) => {
    console.log("dataaa ", children)
    console.log("frontmatter ", pageContext)

    return (
        <Layout>
            <h2 className="post-title">{pageContext.frontmatter.title}</h2>
            <h6 className="post-date">{pageContext.frontmatter.date.substring(0, 10)}</h6>
            {children}
        </Layout>
    )
}


export const query = graphql
    `
    query PostsBySlug($slug: String!) {
        mdx( fields: { slug: { eq: $slug } }
        ){
            body
            frontmatter {
                title
                date(formatString: "YYYY MMMM Do")
            }
        }
    }
`
