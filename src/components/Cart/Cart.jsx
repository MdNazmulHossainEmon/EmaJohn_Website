import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "./Cart.css"

const Cart = () => {
    return (
        <div className='cart'>
            <h4 className='text-center mb-5'>Order Summary</h4>
            <p>Selected Items: </p>
            <p>Total Price: $ </p>
            <p>Total Shipping Charge: $ </p>
            <p>Tax: $ </p>
            <p className='mb-5'>
                <strong>Grand Total: $</strong>
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