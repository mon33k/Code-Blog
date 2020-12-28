import React from 'react';
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../layouts/index'

// Try to make a static query here or try to see the docs from the remark plugin
// could also tryr to make the query elsewhere and pass the data here idk


export default ({pageContext: {post}}) => {
    // const {body} = data.mdx
    console.log("dataaa ", post)
    // console.log("location ", location)

    return (
        <Layout>
            {/* <div>The graphql query here isnt returning data for w.e reason</div> */}
            <button><Link to="/">Back</Link></button>
            {/* <MDXRenderer>{body}</MDXRenderer> */}
        </Layout>
    )
}


// export const query = graphql
//     `
//     query PostsBySlug($slug: String!) {
//         mdx( fields: { slug: { eq: $slug } }
//         ){
//             body
//             frontmatter {
//                 title
//                 date(formatString: "YYYY MMMM Do")
//             }
//         }
//     }
// `
