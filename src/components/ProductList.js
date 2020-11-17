import React, { useState, useEffect } from 'react';
import { Product } from '../components/Product';
import { GetAll } from '../api/apiRoutes';
import { Spinner , CardDeck as Container, Col, Row } from 'react-bootstrap';


export default function ProductList(props) {

    const product = 'Product';

    const {cart, setCart} = props;

    const [productList, setProductList] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        getProducts();

    }, [])

    const getProducts = async () => {
        setLoading(true);
        var result = await GetAll(product);
        console.log(result)
        if (result !== null) {
            setProductList(result);
            setLoading(false);
        }
    }

    if (loading) {
        return <Spinner animation="border" variant="secondary" />
    }

    return (
        <Container style = {{justifyContent:'center'}}>
            <Row style = {{justifyContent:'center'}}>

                {
                    productList?.map((product, index) => {
                        return (<Col key={index} >
                            <Product product={product} cart={cart} setCart={setCart} />
                        </Col>)

                    })
                }

            </Row>
        </Container>

    )
}
