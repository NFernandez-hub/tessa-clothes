import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Trequest } from '../api/apiRoutes';
import { useForm } from '../hooks/useForm';

export default function ProductFrom() {

    const initialProduct = {
        code: '',
        name: '',
        description: '',
        discountStock: false,
        showBrand: true,
        slow: true,
        price1: 0,
        brandId: 1,
        categoryId: 1,
        stock1:0
    }

    const controller = 'Product';
    const request = 'create';

    const [values, handleInputChange] = useForm(initialProduct);

    const { code, name, description, price1, stock1 } = values;

    const handleClick = async () => {

        var precio = parseFloat(price1, 10);
        var stockInicial = parseFloat(stock1, 10)

        var response = await Trequest(controller, request, {
            code,
            name,
            description,
            discountStock: true,
            showBrand: true,
            slow: true,
            price1: precio,
            brandId: 1,
            categoryId: 1,
            stock1: stockInicial
        });

        console.log(response)
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label>Codigo</Form.Label>
                <Form.Control type="number" placeholder="Ingrese el codigo del Articulo" onChange={handleInputChange}
                    value={code} name='code' />
            </Form.Group>

            <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingrese el nombre del Articulo" onChange={handleInputChange}
                    value={name} name='name' />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={handleInputChange} value={description}
                    name="description" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" placeholder="Ingrese el precio del Articulo" onChange={handleInputChange}
                    value={price1} name='price1' />
            </Form.Group>

            <Form.Group>
                <Form.Label>Stock Inicial</Form.Label>
                <Form.Control type="number" placeholder="Stock Inicial del articulo" onChange={handleInputChange}
                    value={stock1} name='stock1' />
            </Form.Group>

            <button className="btn btn1 derecha" onClick={handleClick}>
                Crear Articulo
            </button>
        </Form>
    )
}
