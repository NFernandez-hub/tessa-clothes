import React from 'react';

export const Product = (props) => {
    
    const { product, cart, setCart } = props;

    product.qty = 1;

    const handleAddToCart = (e) => {

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
