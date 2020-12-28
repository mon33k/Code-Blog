import React from 'react'
import Layout from "../layouts/index"
import { graphql, Link, useStaticQuery } from "gatsby"


const About = ({children, location}) => {
    
    const data = useStaticQuery(
        graphql`
            query {
                allMdx(
                    sort: { fields: [frontmatter___date], order: DESC }
                    filter: { frontmatter: { published: { eq: true } } }
                    ) {
                    nodes {
                      id
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                      }
                    }
                }
            }`
        )

    return (
        <Layout postLinks={ data.allMdx.nodes} location={location}>
            <h1>About Page</h1>
            <p>Blah blah about page ya </p>

        </Layout>
    )
}

export default About