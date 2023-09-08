import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "./Cart.css"

const Cart = ({ cart }) => {
    // console.log(cart);

    let totalPrice = 0
    let totalShipping = 0
    let quantity = 0

    for (const product of cart) {
        // console.log("price: ",product.price);

        if (product.quantity == 0) {
            product.quantity = 1
        }

        totalPrice = totalPrice + product.price * product.quantity
        totalShipping = totalShipping + product.shipping * product.quantity
        quantity = quantity + product.quantity
    }

    const tax = (totalPrice * 7) / 100
    const grandTotal = totalPrice + totalShipping + tax

    return (
        <div className='cart'>
            <h4 className='text-center mb-5'>Order Summary</h4>
            <p>Selected Items: {quantity} </p>
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