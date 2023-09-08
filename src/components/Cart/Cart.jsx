import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "./Cart.css"

const Cart = ({ cart }) => {
    // console.log(cart);

    let totalPrice = 0
    let totalShipping = 0

    for (const product of cart) {
        // console.log("price: ",product.price);
        totalPrice = totalPrice + product.price
        totalShipping = totalShipping + product.shipping
    }

    const tax = (totalPrice * 7) / 100
    const grandTotal = totalPrice + totalShipping + tax

    return (
        <div className='cart'>
            <h4 className='text-center mb-5'>Order Summary</h4>
            <p>Selected Items: {cart.length} </p>
            <p>Total Price: ${totalPrice} </p>
            <p>Total Shipping Charge: ${totalShipping} </p>
            <p>Tax: ${tax} </p>
            <p className='mb-5'>
                <strong>Grand Total: ${grandTotal}</strong>
            </p>

            <Button variant='danger'>
                Clear Cart
                <span className='ms-2'><FontAwesomeIcon icon={faTrash} /></span>
            </Button>
            <br />
            <br />
            <Button variant='warning'>
                Review Order
                <span className='ms-2'><FontAwesomeIcon icon={faArrowRight} /></span>
            </Button>
        </div>
    );
};

export default Cart;