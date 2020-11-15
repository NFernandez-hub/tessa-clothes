import React, { useState } from 'react'
import Modal from 'react-modal';

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

export const CarritoModal = () => {

    const [isOpen, setIsOpen] = useState(true)

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <Modal
            isOpen={isOpen}
            //   onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h1>Carrito</h1>
            <hr />
            <span>de productos</span>
        </Modal>
    )
}
