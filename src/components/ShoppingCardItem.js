import React , { useState } from "react"

export const ShoppingCardItem = (props) => {
    const { product } = props;
    const [productQt, setProductQt] = useState(1);

    console.log(product);
    console.log(productQt)

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
                    <div className="row ">{product.name}</div>
                    <div className="row text-muted">{product.description}</div>
                </div>
                <div className="col"> <button onClick={removeQty}>-</button><span> {productQt} </span><button onClick={setQty}>+</button> </div>
                <div className="col">{product.price1*productQt}<span className="close">&#10005;</span></div>
            </div>
        </div>);
}

