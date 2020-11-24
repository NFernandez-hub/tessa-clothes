import React from 'react'
import { Form } from 'react-bootstrap'
import { Trequest } from '../api/apiRoutes';
import { useForm } from '../hooks/useForm';

export function ProductUpdate(props) {

    const { product } = props;

    const controller = 'Product';
    const request = 'update';

    const initialProduct = {
        code: product.code,
        name: product.name,
        description: product.description,
        discountStock: false,
        showBrand: true,
        slow: true,
        price1: product.price1,
        brandId: 1,
        categoryId: 1,
        stock: product.stock
    }

    const [values, handleInputChange] = useForm(initialProduct);

    const { code, name, description, price1, stock } = values;

    const handleClick = async () => {

        var precio = parseFloat(price1, 10);
        var stockParse = parseFloat(stock, 10);

        var response = await Trequest(controller, request, {

            id: product.id,
            erasedState: true,
            code,
            name,
            description,
            discountStock: true,
            discontinued: true,
            showBrand: true,
            slow: true,
            price1: precio,
            brandId: 1,
            categoryId: 1,
            stock: stockParse

        });

        console.log(response)
    }

    return (
        <Form >
            <Form.Group>
                <Form.Label>Codigo</Form.Label>
                <Form.Control type="number" onChange={handleInputChange}
                    value={code} name='code' />
            </Form.Group>

            <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" onChange={handleInputChange}
                    value={name} name='name' />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={handleInputChange}
                    value={description} name="description" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" onChange={handleInputChange}
                    value={price1} name='price1' />
            </Form.Group>

            <Form.Group>
                <Form.Label>Stock</Form.Label>
                <Form.Control type="number" placeholder="Stock Inicial del articulo" onChange={handleInputChange}
                    value={stock} name='stock' />
            </Form.Group>

            <button className="btn btn1 derecha" onClick={handleClick}>
                Modificar Articulo
            </button>
        </Form>
    )
}
