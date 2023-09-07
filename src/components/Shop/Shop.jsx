import React, { useEffect, useState } from 'react';
import "./Shop.css"
import { Col, Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <Container>
                <Row>
                    <Col lg={10}>
                        <div className='products-container'>
                            <Row lg={3}>
                                {
                                    products.map(product => <Product
                                        key={product.id}
                                        product={product}
                                    ></Product>)
                                }
                            </Row>

                        </div>

                    </Col>


                    <Col lg={2}>
                        <div className='cart-container'>
                            <h4>Order Summary</h4>
                        </div>

                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Shop;