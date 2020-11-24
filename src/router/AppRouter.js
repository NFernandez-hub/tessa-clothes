import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import ProductTableList from "../components/ProductTableList";

import { ClientsPage } from "../pages/ClientsPage";
import { ProductsPage } from "../pages/ProductsPage";
import { TableImagePage } from "../pages/TableImagePage";

export const AppRouter = (props) => {

    const [carrito, setCarrito] = useState([])
    const { children } = props;

    const newChildren = React.cloneElement(children, { carrito, setCarrito })

    return (
        <div>
            {newChildren}
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/productsList" component={() => <ProductTableList />} />
                        <Route exact path="/clients" component={() => <ClientsPage />} />
                        <Route exact path="/products" component={() => <ProductsPage cart={carrito} setCart={setCarrito} />} />
                        <Route exact path="/tableImage" component={() => <TableImagePage/>} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </Router>
        </div>

    );
}