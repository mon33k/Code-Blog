import React, {Fragment} from "react"
import { graphql, Link } from "gatsby"
import "../stylesheets/HomePage.css"
// import MenuDrawer from "../components/MenuDrawer"
import Layout from "../layouts/index"
// import Post from '../components/Post'
import { MDXRenderer } from 'gatsby-plugin-mdx';


export const query = graphql`
    query SITE_INDEX_QUERY {
    site {
        siteMetadata {
            title
            description
        }
    }
    allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
        ) {
        nodes {
            id
            excerpt(pruneLength: 250)
            frontmatter {
            title
            date
            }
            fields {
                slug
            }
            body
        }
    }
}
`

const HomePage = ({ data, location, children }) => {
    console.log("children ", data)

return (
    <Fragment>
        <Layout location={location}>
            {data.allMdx.nodes.map(({ excerpt, frontmatter, id, fields, body }) => (
                            <div key={id} className="item">
                                <Link
                                    to={fields.slug}
                                >
                                    <h2 className="post-title">{frontmatter.title}</h2>
                                </Link>
                                <h6 className="post-date">{frontmatter["date"].substring(0, 10)}</h6>
                                <MDXRenderer>{body}</MDXRenderer>
                            </div>
                    ))}
        </Layout>
    </Fragment>
    )
}

export default HomePage