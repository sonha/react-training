import React, { Component } from 'react';
import Product from './Product';
import './style.css';
class ProductList extends Component {
    render() {
        var data = [
            {
                id: 1,
                title: 'Yellow Pail',
                description: 'On-demand sand castle construction expertise.',
                url: '#',
                // votes: generateVoteCount(),
                submitter_avatar_url: 'images/avatars/daniel.jpg',
                product_image_url: 'images/products/image-aqua.png',
            },
            {
                id: 2,
                title: 'Supermajority: The Fantasy Congress League',
                description: 'Earn points when your favorite politicians pass legislation.',
                url: '#',
                // votes: generateVoteCount(),
                submitter_avatar_url: 'images/avatars/kristy.png',
                product_image_url: 'images/products/image-rose.png',
            },
            {
                id: 3,
                title: 'Tinfoild: Tailored tinfoil hats',
                description: 'We already have your measurements and shipping address.',
                url: '#',
                // votes: generateVoteCount(),
                submitter_avatar_url: 'images/avatars/veronika.jpg',
                product_image_url: 'images/products/image-steel.png',
            },
            {
                id: 4,
                title: 'Haught or Naught',
                description: 'High-minded or absent-minded? You decide.',
                url: '#',
                // votes: generateVoteCount(),
                submitter_avatar_url: 'images/avatars/molly.png',
                product_image_url: 'images/products/image-yellow.png',
            },
        ];

        const product = data[0];
        console.log(data);
        return (
            <div className="ui unstackable items">
                <Product
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    submitter_avatar_url={product.submitter_avatar_url}
                    product_image_url={product.product_image_url}
                />
            </div>
        );
    }
}

export default ProductList;
