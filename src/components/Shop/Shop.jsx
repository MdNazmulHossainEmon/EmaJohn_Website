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
                    <Col lg={9}>
                        <div className='products-container'>
                            <h2>Products coming here : {products.length}</h2>

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


                    <Col lg={3}>
                        <div className='cart-container'>
                            <h3>Order Summary</h3>
                        </div>

                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Shop;