import React, { useEffect, useState } from 'react'
import { GetAll } from '../api/apiRoutes';
import { Factura } from './Factura'

export const PagoModal = () => {

    const factura = 'Voucher';
    const [pago, setPago] = useState(null);

    //GET de la factura
    useEffect(() => {

        getVoucher();

    }, [])

    const getVoucher = async () => {
        var result = await GetAll(factura)
        setPago(result);
    }    

    if (pago !== null) 
    {
        var detalle = pago[pago.length -1]
    }
    
    return (
        <div>
            <p>¡GRACIAS POR SU COMPRA!</p>
            <div>
                <Factura factura={detalle}/>
            </div>
            <a className="btn btn1 derecha" href="products">
                CERRAR
            </a>
        </div>
    )
}
