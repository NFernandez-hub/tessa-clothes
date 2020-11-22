import React from 'react'
import { Form } from 'react-bootstrap';
import { Trequest } from '../api/apiRoutes';

export function ClientDelete(props) {
    const { client } = props;

    const controller = "Client";
    const request = 'delete';

    const handleClick = async () => {

        var response = await Trequest(controller, request, {
            id: client.id,
        });

        console.log(response)
    }

    return (
        <Form>
            <div className="col-md-8">

                <Form.Group>

                    <Form.Label>Nombre</Form.Label>

                    <Form.Control type="text" placeholder="Nombre"
                        value={client.name} readOnly/>

                </Form.Group>

                <Form.Group>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Apellido"
                        value={client.lastName} readOnly/>
                </Form.Group>

                <Form.Group>

                    <Form.Label>Dni</Form.Label>

                    <Form.Control type="number" placeholder="DNI" 
                        value={client.dni} readOnly/>

                </Form.Group>

            </div>

            <hr />

            <div className="row ">
                <div>

                    <Form.Group>
                        <Form.Label>Cuil</Form.Label>
                        <Form.Control type="number" placeholder="CUIL"
                            value={client.cuil} readOnly/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Celular</Form.Label>
                        <Form.Control type="number" placeholder="Numero de contacto"
                            value={client.cellPhone} readOnly/>
                    </Form.Group>

                </div>


                <div className="col">
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email"
                            value={client.email} readOnly/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Fecha de Nacimiento</Form.Label>
                        <Form.Control type="date" placeholder="Fecha de Nacimiento"
                            value={client.birthDate} readOnly/>
                    </Form.Group>

                </div>
            </div>

            <button className="btn btn1 derecha" onClick={(e) => handleClick(e)}>
                Eliminar Cliente
            </button>

        </Form>
    )
}
