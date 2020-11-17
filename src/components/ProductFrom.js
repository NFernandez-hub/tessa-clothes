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
        categoryId: 1
    }

    const controller = 'Product';
    const request = 'create';

    const [values, handleInputChange] = useForm(initialProduct);

    const { code, name, description, price1 } = values;

    const handleClick = async () => {

        var precio = parseInt(price1, 10);

        var response = await Trequest(controller, request, {
            code,
            name,
            description,
            discountStock: true,
            showBrand: true,
            slow: true,
            price1: precio,
            brandId: 1,
            categoryId: 1
        });

        console.log(response)
        console.log(precio)
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label>Codigo: numerico</Form.Label>
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
                <Form.Control as="textarea" rows={3} onChange={handleInputChange} name="description" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Precio: numerico</Form.Label>
                <Form.Control type="number" placeholder="Ingrese el precio del Articulo" onChange={handleInputChange}
                    value={price1} name='price1' />
            </Form.Group>            

            <Button className="boton boton3" onClick={handleClick} href="products">
                Crear Articulo
            </Button>
        </Form>
    )
}
