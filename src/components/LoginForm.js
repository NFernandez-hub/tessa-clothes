import React from 'react'
import {Container, Form } from 'react-bootstrap'

export const LoginForm = () => {

    return (
        <Container>
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <a className="btn btn1" type="submit">
                Ingresar
            </a>
        </Form>
        </Container>
    )
}
