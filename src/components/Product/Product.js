import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({ product, handleAddToCart }) => {
    const { name, img, price, seller, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name text-lg font-bold'>{name}</p>
                <p className='product-price text-lg'>Price: ${price}</p>
                <p className='manufacturer'>Manufacturer: {seller}</p>
                <p className='rating'>Ratings: {ratings} Stars</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart mt-4 py-2'>
                <p>Add to Cart</p>
                <p><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
            </button>
        </div>
    );
};

export default Product;