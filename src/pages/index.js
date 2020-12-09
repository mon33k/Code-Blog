import React, {Fragment} from "react"
import { graphql, Link } from "gatsby"
import "../stylesheets/HomePage.css"
// import NavBar from "../components/navbar"
import MenuDrawer from "../components/MenuDrawer"
import Post from '../components/Post'

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

const HomePage = ({ data }) => {

return (
    <Fragment>
        <MenuDrawer postLinks={data.allMdx.nodes}>
            <Post posts={data.allMdx.nodes}/>
        </MenuDrawer>
    </Fragment>
    )
}

export default HomePage

  // <div className="app-container">
        // {/* <div className="header-container">
        //     <h1 className="site-title">{data.site.siteMetadata.title}</h1>
        //     <p className="site-description">{data.site.siteMetadata.description}</p>
        // </div> */}

        // <div className="main-container">
        // <>
        //     <MenuDrawer postLinks={data.allMdx.nodes}>
        //         <Post posts={data.allMdx.nodes}/>
        //     </MenuDrawer>
        // </>
        // </div>
    // </div>