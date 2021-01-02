import React from 'react';
import { graphql, Link } from 'gatsby'
// import { MDXRenderer } from 'gatsby-plugin-mdx';
import "../stylesheets/layoutstyles.css"
import Layout from '../layouts/index'


export default ({children, pageContext}) => {

        return (
            <Layout>
                <div className="post-header">
                    <h2 className="post-title">{pageContext.frontmatter.title}</h2>
                    <h4 className="post-date">{pageContext.frontmatter.date.substring(0, 10)}</h4>
                </div>
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
