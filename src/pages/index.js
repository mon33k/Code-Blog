import React, {Fragment} from "react"
import { graphql, Link } from "gatsby"
import "../stylesheets/HomePage.css"
// import MenuDrawer from "../components/MenuDrawer"
import Layout from "../layouts/index"
// import Post from '../components/Post'

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
        }
    }
}
`

const HomePage = ({ data, location }) => {

return (
    <Fragment>
        <Layout postLinks={data.allMdx.nodes} location={location}>
            {data.allMdx.nodes.map(({ excerpt, frontmatter, id, fields }) => (
                            <div key={id} className="item">
                                <Link
                                    to={fields.slug}
                                >
                                    <h1>{frontmatter.title}</h1>
                                </Link>
                               
                                <p>{frontmatter["date"].substring(0, 10)}</p>
                                <p className="excerpt">{excerpt}</p>
                                <div>POST COMPONENT</div>
                            </div>
                    ))}
        </Layout>
    </Fragment>
    )
}

export default HomePage