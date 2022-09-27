import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
                <p>Selected Items: {cart.length} </p>
                <p>Total Price: </p>
                <p>Total Shipping Charge: </p>
                <p>Tax: </p>
                <h6>Grand Total: </h6>
                <div className='cart-buttons'>
                    <button className='btn-clear-cart'>
                        <p>Clear Cart</p>
                        <p className='fa-icons'><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></p>
                    </button>
                    <button className='btn-review-order'>
                        <p>Review Order</p>
                        <p className='fa-icons'><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Shop;