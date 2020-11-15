import { Navbar } from './../components/NavBar';
import React from 'react'


export function BasicLayOut(props) {
    
    const {children} = props;
    
    return (
        <div>
        <Navbar>
        </Navbar>
        {children}
        </div>
    )
}
