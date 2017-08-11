/**
 * Created by DEV on 8/11/2017.
 */
import React, { Component } from 'react';
import Comment from './Comment';

class CommentBox extends Component {
    constructor() {
        super();
        this.state = {
            showComments : false
        };
    }
    _getComments() {
        const commentList = [
            { id: 1, author: 'Morgan McCircuit', body: 'Great picture!' },
            { id: 2, author: 'Bending Bender', body: 'Excellent stuff' }
        ];

        return commentList.map((comment) => {
            return (<Comment author={comment.author} body={comment.body} key={comment.id} />);
        });
    }

    _getCommentTitle(commentCount) {
        if(commentCount === 0) {
            return 'No comments yet!';
        } else if(commentCount === 1) {
            return '1 comment';
        } else {
            return commentCount + ' comments';
        }
    }

    _handleClick() {
        this.setState({
            showComments: !this.state.showComments
        });
    }

    render() {
        const comments = this._getComments();
        let commentNodes;
        let buttonText = 'Show comments';

        if (this.state.showComments) {
            buttonText = 'Hide comments';
            commentNodes = <div className="comment-list">{comments}</div>
        }
        return (
            <div className="comment-box">
                <h3>Comments</h3>
                <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
                <h4 className="comment-count">{this._getCommentTitle(comments.length)}</h4>
                <div className="comment-list">
                    {commentNodes}
                </div>
            </div>
        );
    }
}

export default CommentBox;
