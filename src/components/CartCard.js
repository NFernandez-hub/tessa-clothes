import React from 'react'
import { ShoppingCardItem } from './ShoppingCardItem'
import '../scss/carrito.css'

export const CartCard = () => {    

    const setItem = [{
        description: 'Remera',
        name: 'Remerita',
        qty: 1,
        imgUrl: 'https://i.imgur.com/ba3tvGm.jpg'
    }, {
        description: 'Remera',
        name: 'Remerita',
        qty: 1,
        imgUrl: 'https://i.imgur.com/ba3tvGm.jpg'
    },]
    
    return (
                   
            <div className='carrito-body'>
                <div className="card">
                    <div className="row">
                        <div className="col-md-8  cart">
                            <div className="title">
                                <div className="row">
                                    <div className="col">
                                        <h4><b>Shopping Cart</b></h4>
                                    </div>
                                    <div className="col align-self-center text-right text-muted">3 items</div>
                                </div>
                            </div>
                            {setItem?.map((item, index) =>
                                <ShoppingCardItem product={item} key={index} />
                            )}
                            <div className="back-to-shop"><a href="/"><i className="fas fa-arrow-alt-circle-left color"></i></a><span className="text-muted">to sBackhop</span></div>
                        </div>
                        <div className="col-md-4 summary">
                            <div>
                                <h5><b>Summary</b></h5>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col hola">ITEMS 3</div>
                                <div className="col text-right">&euro; 132.00</div>
                            </div>
                            <form>
                                <p>SHIPPING</p> <select>
                                    <option className="text-muted">Standard-Delivery- &euro;5.00</option>
                                </select>
                                <p>GIVE CODE</p> <input id="code" placeholder="Enter your code" />
                            </form>
                            <div className="row chau">
                                <div className="col">TOTAL PRICE</div>
                                <div className="col text-right">&euro; 137.00</div>
                            </div> <button className="boton">CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
       
    )
}
