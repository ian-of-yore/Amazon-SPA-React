import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import { Link, useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    // Collecting storedCart data from the Local Storage and updating the cart
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart)
    }, [products])

    const handleAddToCart = (seletedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === seletedProduct.id);
        if (!exists) {
            seletedProduct.quantity = 1;
            newCart = [...cart, seletedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== seletedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }

        setCart(newCart);
        addToDb(seletedProduct.id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
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
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to='/orders'>
                        <button className='btn-review-order'>
                            <p>Review Order</p>
                            <p className='fa-icons'><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p>
                        </button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;