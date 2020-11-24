import React, { useEffect, useState } from 'react'
import { Button as Spinner, Container, Table } from 'react-bootstrap'
import { GetAll, } from '../api/apiRoutes';
import Modal from 'react-modal';
import ProductFrom from './ProductFrom';
import { ProductUpdate } from './ProductUpdate';
import ProductDelete from './ProductDelete';

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

export default function ProductTableList() {

    const [open, setOpen] = useState(false)
    const [openM, setOpenM] = useState(false)
    const [openD, setOpenD] = useState(false)

    const [singleProduct, setSingleProduct] = useState(null);

    const product = 'Product';

    const [productList, setProductList] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        getProducts();

    }, [])

    const closeModal = () => {
        setOpen(false);
        setOpenM(false);
        setOpenD(false);
    }

    const getProducts = async () => {
        setLoading(true);
        var result = await GetAll(product);

        if (result !== null) {
            setProductList(result)
            setLoading(false)
        }
    }

    const setOpenWithProduct = (a) => {
        setOpenM(true)
        setSingleProduct(a)
    }

    const setOpenDelete = (a) => {
        setOpenD(true)
        setSingleProduct(a)
    }

    return (
        <Container>
            <br></br>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th className="align"> <span className="btn btn1 row btncont " onClick={() => setOpen(true)}> <i className="fas fa-user-plus"></i> </span>

                        </th>
                        <th></th>
                        <th>Codigo</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Stock</th>

                        <Modal
                            isOpen={open}
                            //   onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            closeTimeoutMS={200}
                            overlayClassName="modal-fondo"
                            contentLabel="Example Modal"
                        >
                            <ProductFrom />
                        </Modal>
                    </tr>
                </thead>
                <tbody>
                    {
                        productList?.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th className="align"> <span className="btn btn1 row btncont" onClick={() => setOpenWithProduct(item)}><i className="far fa-edit"></i> </span>  </th>
                                    <th className="align">  <span className="btn btn1 row btncont" onClick={() => setOpenDelete(item)} ><i className="far fa-trash-alt"></i> </span> </th>
                                    <th>{item.code}</th>
                                    <th>{item.name}</th>
                                    <th>{item.description}</th>
                                    <th>{item.price1}</th>
                                    <th>{item.stock1}</th>
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
                        <ProductDelete product={singleProduct} />
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
                        <ProductUpdate product={singleProduct} />
                    </Modal>

                </tbody>

            </Table>
        </Container>


    )
}
