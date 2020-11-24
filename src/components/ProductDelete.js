import React from 'react'
import { Form } from 'react-bootstrap';
import { Trequest } from '../api/apiRoutes';

export default function ProductDelete(props) {

    const { product } = props;

    const controller = "Product";
    const request = 'delete';

    const handleClick = async () => {

        var response = await Trequest(controller, request, {
            id: product.id,
        });

        console.log(response)
    }

    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Codigo</Form.Label>
                    <Form.Control type="number" value={product.code} readOnly />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" value={product.name} readOnly />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control as="textarea" rows={3} value={product.description} readOnly />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="number" value={product.price1} readOnly />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Stock Inicial</Form.Label>
                    <Form.Control type="number" value={product.stock} readOnly/>
                </Form.Group>

                <button className="btn btn1 derecha" onClick={handleClick}>
                    Eliminar Articulo
            </button>
            </Form>
        </div>
    )
}
