/**
 * Created by DEV on 8/11/2017.
 */
import React, { Component } from 'react';
// import Comment from './Comment';

class CommentForm extends Component {
    _handleSubmit(event) {
        event.preventDefault();

        let author = this._author;
        let body = this._body;

        this.props.addComment(author.value, body.value);
    }
    render() {
        return (
            <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
                <label>Join Us</label>
                <div className="comment-form-fields">
                    <input placeholder="Name" type="text" ref={(input) => {this._author = input}}/> <br/>
                    <textarea placeholder="Comment" name="" ref={(textarea) => {this._body = textarea}} id="" cols="30" rows="10"></textarea>
                </div>
                <div className="comment-form-actions">
                    <button type="submit">
                        Post comment
                    </button>
                </div>
            </form>
        );
    }
}

export default CommentForm;
