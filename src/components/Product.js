import React from 'react';

export function Product(props) {

    const {producto} = props;
    
    return (
        <div>
            <h1>{producto.nombre}</h1>
            <p>{producto.description}</p>
        </div>
    )
}
