import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = ({ cart, clearCart }) => {
    // console.log(cart)

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (let product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    let tax = Math.ceil(parseInt((total * 0.1).toFixed(2)));
    let grandTotal = total + shipping + tax;

    return (
        <div className='mt-16 pl-6'>
            <h2>Order Summary</h2>
            <p>Quantity: {quantity} </p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping} </p>
            <p>Tax: ${tax}</p>
            <h6>Grand Total: ${grandTotal}</h6>
            <div className='cart-buttons'>
                <button onClick={clearCart} className='btn-clear-cart'>
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