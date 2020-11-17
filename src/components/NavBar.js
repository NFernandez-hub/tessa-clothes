import React, { useState } from 'react';
import Modal from 'react-modal';
import { CartCard } from './CartCard';
import ProductFrom from './ProductFrom';

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

export const Navbar = (props) => {

    const { cart, setCart } = props;

    const [open, setOpen] = useState(false)

    const [openP, setOpenP] = useState(false)

    const closeModal = () => {
        setOpen(false);
        setOpenP(false)
    }

    return (
        <div className="navbar navbar-ligth bg-dark mb-4">
            <span className="navbar-brand">
                {/* <a href='home'>Home</a> */}
                <a href='products'>Store</a>
            </span>

            <button className="btn btn-outline-warning" onClick={() => setOpen(true)}>
                <i className="fas fa-cart-plus"></i>
                <span> Cart</span>
            </button>

            <Modal
                isOpen={open}
                //   onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                closeTimeoutMS={200}
                overlayClassName="modal-fondo"
                contentLabel="Example Modal"
            >
                <CartCard cart={cart} setCart={setCart} />
            </Modal>

            <button className="btn btn-outline-danger" onClick={() => setOpenP(true)}>
                <i className="fas fa-cart-plus"></i>
                <span> Add Product</span>
            </button>

            <Modal
                isOpen={openP}
                //   onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                closeTimeoutMS={200}
                overlayClassName="modal-fondo"
                contentLabel="Example Modal"
            >
                <ProductFrom/>
            </Modal>


        </div>
    )
}

