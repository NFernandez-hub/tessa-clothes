import React from 'react'
import ProductList from '../components/ProductList'

export const ProductsPage = (props) => {

    const {cart, setCart} = props;


    return (
        <div className="App">
            <h1>Lista de productos</h1>
            <ProductList cart={cart} setCart={setCart}>

            </ProductList>
        </div>
    )
}

