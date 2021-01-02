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
            <h1 className="post-title">About Page</h1>
            <p>My name is Monique I am a Web Developer focusing on Frontend Development. <br/> I created this blog so that I can level up my skills in programming.</p>

            <h3 className="about-title">My Rules</h3>
            <p>
                I'm going to try to start this with goals and being consistent. 
                This is going to be a modified version of the challenge because I won't be coding on Sundays.
            </p>

            <h3 className="about-title">I will try to follow this format for the next 100 days:</h3>
            <ul>
                <li>1. Code everyday except Sundays</li>
                <li>2. Commit all progress on projects on github and document DSA code challenges in my Blog</li>
                <li>3. Document 1 new thing I learned each day</li>   
            </ul>

            <h3>Contact</h3>
            <p>monique.writescode@gmail.com <br/> https://www.linkedin.com/in/moniquemojica/</p>

        </Layout>
    )
}

export default About