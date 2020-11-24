import React from 'react';
import {toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const Product = (props) => {

    const { product, cart, setCart } = props;

    product.qty = 1;

    const handleAddToCart = (e) => {

        if (product.stock1 >= 1) {

            toast('El articulo fue añadido al carrito.', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            if (cart.length === 0) {
                setCart([...cart, product]);
            } else {

                var find = cart.find(x => x.id === product.id)

                if (find === undefined) {
                    setCart([...cart, product]);
                } else {
                    find.qty += 1;
                }
            }
        }
        else{
            toast('El producto no tiene stock.', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (

        <div>
            <div className="container mt-5 mb-5 justify-content-center align-items-center">
                <div className="card productcard">
                    <div className="inner-card"> <img src="https://i.imgur.com/ba3tvGm.jpg" alt="" className="img img-fluid rounded" />
                        <div className="card-body">
                            <div className="card-title productcard-title">
                                <h6>{product.name} </h6>
                            </div>
                            <div className="card-text productcard-text"> <small>{product.description}</small> </div>

                        </div>

                        <div className="card-footer productcard-footer btncont">

                            <h4 className="price productprice">${product.price1}</h4>

                            <div className="row btncont">
                                <button className="btn btn1 derecha" onClick={(e) => handleAddToCart(e)}>Añadir al carrito</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
