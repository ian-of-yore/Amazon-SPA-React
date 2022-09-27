import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.handleAddToCart)
    const { name, img, price, seller, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p className='manufacturer'>Manufacturer: {seller}</p>
                <p className='rating'>Ratings: {ratings} Stars</p>
            </div>
            <button onClick={() => props.handleAddToCart()} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;