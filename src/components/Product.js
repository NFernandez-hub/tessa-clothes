import React from 'react';

export const Product = (props) => {

    const { product, cart, setCart } = props;


    const handleAddToCart = (e) => {
        e.preventDefault();
        setCart([...cart,product]);
    }

    return (
        <div>
            <div className="container mt-5 mb-5 d-flex justify-content-center align-items-center">
                <div className="card productcard">
                    <div className="inner-card"> <img src="https://i.imgur.com/ba3tvGm.jpg" alt="" className="img img-fluid rounded" />
                        <div className="card-body">
                            <div className="card-title productcard-title">
                                <h6>{product.name} </h6>
                            </div>
                            <div className="card-text productcard-text"> <small>{product.description}</small> </div>

                        </div>

                        <div className="card-footer productcard-footer btncont">

                            <h4 className="price productprice">{product.price1}</h4>

                            <div className="row btncont">
                                <button className="btn derecha" onClick={(e) => handleAddToCart(e)}>Añadir al carrito</button>
                                <button className="btn "><i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
