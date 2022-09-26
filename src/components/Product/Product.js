import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const { name, img, price, seller, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6 className='product-name'>{name}</h6>
            <p className='product-price'>Price: ${price}</p>
            <p><small>Manufacturer: {seller}</small></p>
            <p><small>Ratings: {ratings}</small></p>
        </div>
    );
};

export default Product;