import React , { useState } from "react"

export const ShoppingCardItem = (props) => {
    const { product } = props;
    const [productQt, setProductQt] = useState(product.qty);

    console.log(product);

    const setQty = () => {
        setProductQt(productQt + 1);
    }

    const removeQty = () => {
        if (productQt > 1) {
            setProductQt(productQt - 1);
        }
    }

    return (
        <div className="row border-top border-bottom">
            <div className="row main align-items-center">
                <div className="col-2"><img className="img-fluid" alt="" src={product.imgUrl} /></div>
                <div className="col">
                    <div className="row text-muted">{product.description}</div>
                    <div className="row">{product.name}</div>
                </div>
                <div className="col"> <button onClick={removeQty}>-</button><a href="" className="border color">{productQt}</a><button onClick={setQty}>+</button> </div>
                <div className="col">&euro; 45.00 <span className="close">&#10005;</span></div>
            </div>
        </div>);
}
