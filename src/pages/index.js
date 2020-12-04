import * as React from "react"
import { graphql } from "gatsby"
import "../stylesheets/HomePage.css"
// import NavBar from "../components/navbar"
import MenuDrawer from "../components/MenuDrawer"

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
        }
    }
}
`

const HomePage = ({ data }) => {
    
return (

    <div className="app-container">
        {/* <div className="header-container">
            <h1 className="site-title">{data.site.siteMetadata.title}</h1>
            <p className="site-description">{data.site.siteMetadata.description}</p>
        </div> */}

        <div className="main-container">
            <MenuDrawer />
            <div className="frontmatter-container">
                {data.allMdx.nodes.map(({ excerpt, frontmatter, id }) => (
                <div key={id} className="item">
                    <h1>{frontmatter.title}</h1>
                    <p>{frontmatter.date}</p>
                    <p className="excerpt">{excerpt}</p>
                </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default HomePage
