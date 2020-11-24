import React, { useState } from "react"

export const ShoppingCardItem = (props) => {
    const { product, setTotalAmount, totalAmount } = props;
    const [productQt, setProductQt] = useState(product.qty);

    

    return (
        <div className="row border-top border-bottom">
            <div className="row main align-items-center">
                <div className="col-2"><img className="img-fluid" alt="" src={product.imgUrl} /></div>
                <div className="col">
                    <div className="row ">{product.name}</div>
                    <div className="row text-muted">{product.description}</div>
                </div>
                <div className="col-2">
                    <div className="row text-muted">{productQt}</div>
                </div>
                <div className="col">${product.price1 * productQt}<span className="close">&#10005;</span></div>
            </div>
        </div>);

}

