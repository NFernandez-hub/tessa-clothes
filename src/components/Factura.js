import React from 'react'
import { Form, FormGroup } from 'react-bootstrap'

export const Factura = (props) => {

    const { factura } = props;

    var date = new Date();
    var day = date.getDate();       // yields date
    var month = date.getMonth() + 1;    // yields month (add one as '.getMonth()' is zero indexed)
    var year = date.getFullYear();  // yields year

    

    //After this construct a string with the above results as below
    var time = day + "/" + month + "/" + year;

    if (factura === undefined) {
        return (
            <Form >
                <div className="border">

                <FormGroup className="align">
                    <Form.Label className="labelInvoice align" >Numero: </Form.Label>
                    <Form.Label className="label2Invoice"> { } </Form.Label>
                </FormGroup>
                </div>


                <FormGroup>
                    <Form.Label className="labelInvoice">Fecha: </Form.Label>
                    <Form.Label className="label2Invoice" > { } </Form.Label>
                </FormGroup>

                <FormGroup>
                    <Form.Label className="labelInvoice">SubTotal: </Form.Label>
                    <Form.Label className="label2Invoice" > { } </Form.Label>
                </FormGroup>

                <FormGroup>
                    <Form.Label className="labelInvoice" >Total: </Form.Label>
                    <Form.Label className="label2Invoice"> { } </Form.Label>
                </FormGroup>
                

            </Form>
        )
    } else {
        
        return (

            <Form className="justify">
             <div className="border ">

                <FormGroup className="justify" >
                    <Form.Label className="labelInvoice  align">Numero: </Form.Label>
                    <Form.Label className="label2Invoice align "> {factura.number} </Form.Label>
                </FormGroup>
             </div>
             <div className="border ">

                <FormGroup className="justify">
                    <Form.Label className="labelInvoice align ">Fecha: </Form.Label>
                    <Form.Label className="label2Invoice align " > {time} </Form.Label>
                </FormGroup>
                </div>

                <div className="border">

                <FormGroup className="justify" >
                    <Form.Label className="labelInvoice align " >SubTotal: </Form.Label>
                    <Form.Label className="label2Invoice align" >${factura.subTotal} </Form.Label>
                </FormGroup>
                </div>

                <div className="border">

                <FormGroup className="justify" >
                    <Form.Label className="labelInvoice align">Total: </Form.Label>
                    <Form.Label className="label2Invoice align" >${factura.total} </Form.Label>
                </FormGroup>
                </div>

            </Form>
        )
    }

}
