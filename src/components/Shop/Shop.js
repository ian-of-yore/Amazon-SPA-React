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
    // const { count, products } = useLoaderData();
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    /**
    * Pagination
    * 01. total Documents count: Loaded from backend
    * 02. perPageDocuemnt: set an initial value of 10
    * 03. totalPageCount: calculation done
    * 04. currentPage: 
    */
    const [count, setCount] = useState(0);
    const [perPageDocuemnt, setPerPageDocument] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);
    const totalPage = Math.ceil(count / perPageDocuemnt);

    useEffect(() => {
        const url = `http://localhost:5000/products?currentPage=${currentPage}&perPageDocument=${perPageDocuemnt}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setCount(data.count);
            })
    }, [currentPage, perPageDocuemnt])

    // Collecting storedCart data from the Local Storage and updating the cart
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product._id === id);
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
        const exists = cart.find(product => product._id === seletedProduct._id);
        if (!exists) {
            seletedProduct.quantity = 1;
            newCart = [...cart, seletedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== seletedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }

        setCart(newCart);
        addToDb(seletedProduct._id);
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
                        key={product._id}
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
            <div className='pagination'>
                <div>
                    <p className='text-xl font-semibold'>Show
                        <span className='h-10 w-10 ml-1'>
                            <select onChange={(event) => setPerPageDocument(event.target.value)}>
                                <option value="5">5</option>
                                <option value="10" selected>10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                            </select>
                        </span> items per page</p>
                </div>
                <div>
                    {
                        [...Array(totalPage).keys()].map(number => <button
                            key={number}
                            className={currentPage === number && 'selected'}
                            onClick={() => setCurrentPage(number)}
                        >
                            {number}
                        </button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;