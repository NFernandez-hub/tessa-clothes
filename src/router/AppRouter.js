import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { CartCard } from "../components/CartCard";

import { HomePage } from "../pages/HomePage";
import { ProductsPage } from "../pages/ProductsPage";

export const AppRouter = (props) => {

    const {children} = props;

    return (
        <div>
        {children}
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/products" component={ProductsPage} /> 
                    <Route exact path="/cart" component={CartCard} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
        </div>

    );
}