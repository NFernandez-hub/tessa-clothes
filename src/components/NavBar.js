import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
                <a href='home'>Home</a>
                <a>
                    
                </a>
                <a href='products'>Product</a>
            </span>

            <button className="btn btn-outline-warning">
                <i className="fas fa-cart-plus"></i>                
            </button>
        </div>
    )
}

