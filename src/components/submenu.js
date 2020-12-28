import React from 'react'
import { graphql, useStaticQuery, Link } from "gatsby"
import {
    MenuList, MenuItem
} from '@material-ui/core'


const SubMenu = ({nested}) => {
    const data = useStaticQuery(graphql`
    query SitePathQuery {
      site {
        siteMetadata {
          title
          menuLinks {
                name
                link
            }
        }
      }
    }
  `)

    return (
        <MenuList>

            {data.site.siteMetadata.menuLinks.map((post, index) => {
                  return (<MenuItem
                  to={post.link}
                  key={index}
                  className={nested}
                  component={Link}
                  >
                  {post.name}
              </MenuItem>)
            })}
        </MenuList>

    )

}

export default SubMenu