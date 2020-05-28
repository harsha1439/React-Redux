import React, { Component } from 'react'
import Photo from './Photo'

//import comments
import Comments from './Comments'
class Single extends Component {
    render() {
        const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId)
        const post = this.props.posts[i]
        const id = this.props.params.postId
        const postComments = this.props.comments[id] || []
        
        console.log()
        return (
            
            <div className="single-photo">
               <Photo i={i} post={post} {...this.props}></Photo>
               
                <Comments postComments={postComments} {...this.props}></Comments>
            </div>
        )
    }
}

export default Single
