import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css"

const Product = (props) => {
    // console.log(props);
    const { id, name, img, price, ratings, seller } = props.product
    return (
        <div>
            <Card className='card-item'>
                <Card.Img variant="top" src={img} />
                <Card.Body>

                    <Card.Title>{name}</Card.Title>
                    <p>Price: ${price}</p>
                    <p>Manufacture: ${seller}</p>
                    <p>Ratings: {ratings} Star</p>

                </Card.Body>
                <Button variant='warning'>
                    Add To Cart
                    <span><FontAwesomeIcon icon={faShoppingCart} /></span>
                </Button>

            </Card>
        </div>

    );
};

export default Product;