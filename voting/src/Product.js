import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';
class Product extends Component {

    render() {
        return (
            <div className="item">
                <div className="image">
                    <img src={this.props.product_image_url} alt=""/>
                </div>
                <div className="middle aligned content">
                    <div className="header">
                        <a>
                            <i className="large caret up icon"></i>
                            {this.props.votes}
                        </a>
                    </div>
                    <div className="description">
                        <a href={this.props.url}>{this.props.title}</a>
                        <p>{this.props.description}</p>
                    </div>
                    <div className="extra">
                        <span>Submitted by: </span>
                        <img className="ui avatar image" src={this.props.submitter_avatar_url} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
