import React, { useEffect, useState } from 'react';
import "./Shop.css"
import { Col, Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {

        const storedCart = getShoppingCart()
        // console.log(storedCart);
        const savedCart = []

        // step 1: get id 
        for (const id in storedCart) {
            // Step 2: get the product by using id
            const addedProduct = products.find(product => product.id === id)
            // Step 3: get quantity of the product
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                // Step 4: add the added product to saved cart 
                savedCart.push(addedProduct)

            }

        }
        // step 5: set the cart
        setCart(savedCart)

    }, [products])

    const handleAddToCart = (product) => {
        // console.log("product added :", product);
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }

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
                                        handleAddToCart={handleAddToCart}
                                    ></Product>)
                                }
                            </Row>
                        </div>
                    </Col>

                    <Col lg={2}>
                        <div className='cart-container'>
                            <Cart
                                cart={cart}
                            ></Cart>
                        </div>

                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Shop;