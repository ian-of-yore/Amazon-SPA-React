import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';


const Orders = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);


    const handleRemoveProduct = (id) => {
        const remainingProducts = cart.filter(product => product._id !== id);
        setCart(remainingProducts);
        removeFromDb(id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container grid grid-cols-4'>
            <div>
                {
                    cart.length === 0 ? <p className='text-center text-4xl font-semibold text-gray-700 my-8'>You have no items in the Cart! Visit <span className='text-orange-700 underline'><Link to='/shop'>Shop</Link></span></p> : <p className='text-center text-4xl font-semibold text-gray-700 my-8'>You have selected <span className='text-orange-700'>{cart.length}</span> products</p>
                }

                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }

            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to='/shipment' className=' mt-4 flex justify-center items-center bg-red-600 text-white rounded-xl pb-3 mr-14 text-xl'>
                        <p>Shipment</p>
                        <p className='fa-icons'><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;