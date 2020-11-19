import React from 'react'
import { Container, Row } from 'react-bootstrap';
import ProductList from '../components/ProductList'
import foto from './../fotoheader.png';
import Image from 'react-bootstrap/Image';

export const ProductsPage = (props) => {

    const { cart, setCart } = props;


    return (
        <div className="App">
            <Image className="imagen" src={foto} fluid />

            <Container>

                <h1>Lista de productos</h1>

                <Row className="align">
                    <Row>
                        <ProductList cart={cart} setCart={setCart}>

                        </ProductList>
                    </Row>

                </Row>

            </Container>
        </div>
    )
}

