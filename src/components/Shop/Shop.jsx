import React, { useEffect, useState } from 'react';
import "./Shop.css"
import { Col, Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <Container fluid>
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
                            <Cart></Cart>
                        </div>

                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Shop;