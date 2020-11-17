import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { HomePage } from "../pages/HomePage";

import { ProductsPage } from "../pages/ProductsPage";

export const AppRouter = (props) => {

    const [carrito, setCarrito] = useState([])
    const {children} = props;

    const newChildren = React.cloneElement(children, {carrito, setCarrito})

    return (
        <div>
        {newChildren}
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={() => <HomePage />} />
                    <Route exact path="/products" component={() => <ProductsPage cart={carrito} setCart={setCarrito}/>} /> 
                    
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
        </div>

    );
}