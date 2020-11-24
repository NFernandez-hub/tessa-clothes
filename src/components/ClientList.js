import React, { useEffect, useState } from 'react'
import { Button as Spinner, Container, Table } from 'react-bootstrap'
import { GetAll, } from '../api/apiRoutes';
import ClientForm from './ClientForm';
import Modal from 'react-modal';
import { ClientUpdate } from './ClientUpdate';
import { ClientDelete } from './ClientDelete';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')

export default function ClientList() {

    const [open, setOpen] = useState(false)
    const [openM, setOpenM] = useState(false)
    const [openD, setOpenD] = useState(false)

    const [singleClient, setSingleClient] = useState(null);

    const client = 'Client';

    const [clientList, setClientList] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        getClients();

    }, [])

    const closeModal = () => {
        setOpen(false);
        setOpenM(false);
        setOpenD(false);
    }

    const getClients = async () => {
        setLoading(true);
        var result = await GetAll(client);

        if (result !== null) {
            setClientList(result)
            setLoading(false)
        }
    }

    const setOpenWithClient = (a) => {
        setOpenM(true)
        setSingleClient(a)
    }

    const setOpenDelete = (a) => {
        setOpenD(true)
        setSingleClient(a)
    }
    
    return (
        <div>
            <Container>
                <br></br>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th className="align">
                                <span className="btn btn1" onClick={() => setOpen(true)}> <i className="fas fa-user-plus"></i></span>
                               
                            </th>
                            <th></th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Dni</th>
                            <th>Email</th>
                            <th>Numero Celular</th>

                            <Modal
                                isOpen={open}
                                //   onAfterOpen={afterOpenModal}
                                onRequestClose={closeModal}
                                style={customStyles}
                                closeTimeoutMS={200}
                                overlayClassName="modal-fondo"
                                contentLabel="Example Modal"
                            >
                                <ClientForm />
                            </Modal>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clientList?.map((item, index) => {
                                return (
                                    <tr key={index}>

                                        <th  className="align" > <span className="btn btn1 " onClick={() => setOpenWithClient(item)}> <i className="far fa-edit"></i> </span> </th>
                                        <th className="align" > <span className="btn btn1 " onClick={() => setOpenDelete(item)} ><i className="far fa-trash-alt"></i></span>  </th>

                                        <th>{item.name}</th>
                                        <th>{item.lastName}</th>
                                        <th>{item.dni}</th>
                                        <th>{item.email}</th>
                                        <th>{item.cellPhone}</th>
                                    </tr>
                                )
                            })
                        }

                        <Modal
                            isOpen={openD}
                            //   onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            closeTimeoutMS={200}
                            overlayClassName="modal-fondo"
                            contentLabel="Example Modal"
                        >
                            <ClientDelete client={singleClient} />
                        </Modal>

                        <Modal
                            isOpen={openM}
                            //   onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            closeTimeoutMS={200}
                            overlayClassName="modal-fondo"
                            contentLabel="Example Modal"
                        >
                            <ClientUpdate client={singleClient} />
                        </Modal>

                    </tbody>

                </Table>
            </Container>

        </div>




    )
}
