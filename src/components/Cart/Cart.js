import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = (props) => {
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Selected Items: {props.cart.length} </p>
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
    );
};

export default Cart;