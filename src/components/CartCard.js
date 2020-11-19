import React, { useState, useEffect } from 'react'
import { ShoppingCardItem } from './ShoppingCardItem'
import Modal from 'react-modal';


import '../scss/carrito.css'
import { PagoModal } from './PagoModal';
import { Button } from 'react-bootstrap';
import { GetAll, Trequest } from '../api/apiRoutes';

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

export const CartCard = (props) => {

    const { cart } = props;

    const [totalAmount, setTotalAmount] = useState(null);

    const [open, setOpen] = useState(false)

    const factura = 'Voucher';
    const [pago, setPago] = useState(null);

    const GetTotalAmount = () => {

        var total = 0;

        cart.forEach(item => {

            total += (item.price1 * item.qty);
        });

        setTotalAmount(total);
    }

    //GET de la factura
    useEffect(() => {

        getVoucher();

    }, [])

    const getVoucher = async () => {
        var result = await GetAll(factura)
        setPago(result);
    }

    if (pago !== null) {
        var detalle = pago[pago.length - 1]
    }

    useEffect(() => {
        GetTotalAmount();
    }, [totalAmount])

    const controller = 'Voucher';
    const request = 'create';

    const handleFinisBuy = async () => {
        //POST de la facutra
        var precioFinal = parseFloat(totalAmount, 10);

        var result = await Trequest(controller, request, {
            number: detalle.number + 1,
            date: "0001-01-01T00:00:00",
            subtotal: precioFinal,
            discount: 0,
            total: precioFinal,
            wayToPay: 1,
            userId: 1
        });
        
        setOpen(true);
    }


    return (
        <div className='carrito-body'>
            <div className="card">
                <div className="row">
                    <div className="col-md-8  cart">
                        <div className="title">
                            <div className="row">
                                <div className="col">
                                    <h4><b>Shopping Cart</b></h4>
                                </div>
                                {/* <div className="col align-self-center text-right text-muted">3 items</div> */}
                            </div>
                        </div>
                        {cart?.map((item, index) =>
                            <ShoppingCardItem product={item} key={index} setTotalAmount={setTotalAmount} totalAmount={totalAmount} />
                        )}

                    </div>
                    <div className="col-md-4 summary ">
                        <div>
                            <h5><b>Factura</b></h5>
                        </div>
                        {/* <hr /> */}
                        {/* <div className="row">
                            <div className="col hola">ITEMS 3</div>
                            <div className="col text-right">&euro; 132.00</div>
                        </div> */}
                        <form>
                            {/* <p>SHIPPING</p> <select>
                                <option className="text-muted">Standard-Delivery- &euro;5.00</option>
                            </select>
                            <p>GIVE CODE</p> <input id="code" placeholder="Enter your code" /> */}
                        </form>
                        <div className="row chau">
                            <div className="col">TOTAL PRICE</div>
                            <div className="col text-right">${totalAmount}</div>
                        </div>
                        <hr />
                        <div className="row align">

                        <div className="col align">
                        <button className="btn btn1 right" onClick={handleFinisBuy}>CONFIRMAR</button>
                    </div>
                    </div>

                    </div>
                </div>
            </div>

            <Modal
                isOpen={open}
                //   onAfterOpen={afterOpenModal}
                // onRequestClose={closeModal}
                style={customStyles}
                closeTimeoutMS={200}
                overlayClassName="modal-fondo"
                contentLabel="Example Modal"
            >
                <PagoModal />
            </Modal>

        </div>

    )
}
