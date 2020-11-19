import React, { useState } from 'react';
import Modal from 'react-modal';
import { CartCard } from './CartCard';
import ProductFrom from './ProductFrom';
import ClientForm from './ClientForm';

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

    const[openC, setOpenC] = useState(false)

    const closeModal = () => {
        setOpen(false);
        setOpenP(false);
        setOpenC(false)
    }

    return (
        <div className="navbar header mb-4">
          

          <div className="navbar-brand ">
                {/* <a href='home'>Home</a> */}
                <a href='products'>         
                 <img class="logo-container" alt="Tessa Intimates" src="https://d26lpennugtm8s.cloudfront.net/stores/001/224/103/themes/common/logo-860990000-1596415832-cc0ef48153f777c6d2835febb903bfc91596415832-320-0.png?0" />
                </a>
            </div>

          
           

            <div className="options">
            <span className="btn option" onClick={() => setOpen(true)}>
                <i className="fas fa-cart-plus"></i>
                <span> Cart</span>
            </span>

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

            <span className="btn  option" onClick={() => setOpenP(true)}>
                <i className="fas fa-folder-plus"></i>
                <span> Add Product</span>
            </span>

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

            <span className="btn option" onClick={() => setOpenC(true)}>
                <i className="fas fa-user-plus"></i>
                <span> Add Client</span>
            </span>

            <Modal
                isOpen={openC}
                //   onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                closeTimeoutMS={200}
                overlayClassName="modal-fondo"
                contentLabel="Example Modal"
            >
                <ClientForm/>
            </Modal>
            </div>

        </div>
    )
}

