import React, { Component } from 'react'

class Comments extends Component {

    renderComment(comment, i){
            return (
                <div className="comment" key={i}>
                    <p>
                        <strong>{comment.user}</strong>
                        {comment.text}
                        <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)} >&times;</button>
                    </p>
                </div>
            )
    }

    handleSubmit(event){
        const postId = this.props.params.postId
        const author = this.refs.author.value
        const comment = this.refs.comment.value
        this.props.addComment(postId,author,comment)
        this.refs.commentForm.reset()
        event.preventDefault()
    }

    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment.bind(this))}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="author" placeholder="author"></input>
                    <input type="text" ref="comment" placeholder="comment"></input>
                    <input  type="submit" hidden></input>
                </form>
            </div>
        )
    }
}

export default Comments
