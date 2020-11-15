import React from 'react';
import '../scss/carrito.css'


export const HomePage = () => {


    return (
        <div className="App">
            <h1>Esta es el home</h1>
            <div class="container mt-5 mb-5 d-flex justify-content-center align-items-center">
                <div class="card productcard">
                    <div class="inner-card"> <img src="https://i.imgur.com/ba3tvGm.jpg" class="img img-fluid rounded" />
                        <div class="card-body">
                            <div class="card-title productcard-title">
                                <h6>tanguita </h6>
                            </div>
                            <div class="card-text productcard-text"> <small>tanguita corta</small> </div>

                        </div>

                        <div class="card-footer productcard-footer btncont">

                            <h4 class="price productprice">GRATIS</h4>

                            <div class="row btncont">
                                <button onClick="addCart(product)" class="btn derecha">Añadir al carrito</button>


                                <button class="btn " onClick="openXl(content)"><i class="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )

}
