/**
 * Created by DEV on 8/11/2017.
 */
import React, { Component } from 'react';

class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <p className="comment-header">{this.props.author}</p>
                <p className="comment-body">
                    {this.props.body}
                </p>
                <div className="comment-footer">
                    <a href="#" className="comment-footer-delete">Delete comment</a>
                </div>
            </div>
        );
    }
}

export default Comment;
