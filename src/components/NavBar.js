import React from 'react';
import { CartCard } from './CartCard';



export const Navbar = () => {    

    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
                <a href='home'>Home</a>
                <a href='products'>Product</a>
            </span>

            <button className="btn btn-outline-warning">
                <i className="fas fa-cart-plus"></i>
                <a href='cart'>CartCard</a>             
            </button>
            
        </div>
    )
}

