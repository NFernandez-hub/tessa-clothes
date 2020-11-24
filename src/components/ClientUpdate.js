import React from 'react'
import { Form } from 'react-bootstrap';
import { Trequest } from '../api/apiRoutes';
import { useForm } from '../hooks/useForm';

export function ClientUpdate(props) {

    const { client } = props;

    const controller = "Client";
    const request = 'update';

    const initialClient = {
        name: client.name,
        lastName: client.lastName,
        dni: client.dni,
        cuil: client.cuil,
        cellPhone: client.cellPhone,
        email: client.email,
        birthDate: client.birthDate
    }

    const [values, handleInputChange] = useForm(initialClient);

    const { name, lastName, dni, cuil, cellPhone, email, birthDate } = values;

    const handleClick = async () => {

        var parseDni = parseInt(dni, 10);
        var parseCuil = parseInt(cuil, 10);
        var parseCell = parseInt(cellPhone, 10);

        var response = await Trequest(controller, request, {
            id: client.id,
            name,
            lastName,
            dni: parseDni,
            cuil: parseCuil,
            cellPhone: parseCell,
            email,
            birthDate
        });
    }
    
    return (
        <Form>
            <div className="col-md-8">

                <Form.Group >

                    <Form.Label>Nombre</Form.Label>

                    <Form.Control type="text" placeholder="Nombre" onChange={handleInputChange}
                        value={name} name='name' />

                </Form.Group>

                <Form.Group>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Apellido" onChange={handleInputChange}
                        value={lastName} name='lastName' />
                </Form.Group>

                <Form.Group>

                    <Form.Label>Dni</Form.Label>

                    <Form.Control type="number" placeholder="DNI" onChange={handleInputChange}
                        value={dni} name='dni' />

                </Form.Group>

            </div>
            <hr />
            <div className="row ">
                <div>

                    <Form.Group>
                        <Form.Label>Cuil</Form.Label>
                        <Form.Control type="number" placeholder="CUIL" onChange={handleInputChange}
                            value={cuil} name='cuil' />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Celular</Form.Label>
                        <Form.Control type="number" placeholder="Numero de contacto" onChange={handleInputChange}
                            value={cellPhone} name='cellPhone' />
                    </Form.Group>

                </div>


                <div className="col">
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" onChange={handleInputChange}
                            value={email} name='email' />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Fecha de Nacimiento</Form.Label>
                        <Form.Control type="date" placeholder="Fecha de Nacimiento" onChange={handleInputChange}
                            value={birthDate} name='birthDate' />
                    </Form.Group>

                </div>
            </div>

            <button className="btn btn1 derecha" onClick={(e) => handleClick(e)}>
                Modificar Cliente
            </button>
        </Form>
    )
}
