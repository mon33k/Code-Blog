import React, {Fragment} from 'react'

class Post extends React.Component {

    render() {
        const {posts} = this.props
        // console.log("excerpt", excerpt)
        console.log("frontmatter posts", posts)
        return(
            <>
                    {posts.map(({ excerpt, frontmatter, id }) => (
                            <div key={id} className="item">
                                <h1>{frontmatter.title}</h1>
                                <p>{frontmatter["date"].substring(0, 10)}</p>
                                <p className="excerpt">{excerpt}</p>
                            </div>
                    ))}
            </>
        )
    }
}

export default Post 