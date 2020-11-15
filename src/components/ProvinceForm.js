import React, {useState} from 'react';
import {useForm} from '../hooks/useForm';
import {Trequest} from '../api/apiRoutes';


export default function ProvinceForm() {
    
    const initialProvince = {
        description: ''
    }

    const controller = 'Province';
    const request = 'create';

    const [ values, handleInputChange, reset ] = useForm(initialProvince);

    const {description} = values;

    const handleClick = async () => {
        var response = await Trequest(controller, request, {
            description
        } );

        console.log(response);
    }

  
    return (
        <div>
            <input type='text' placeholder='Escriba una provincia' onChange={handleInputChange} value={description} name='description'></input>
            <button onClick={handleClick}>Crear</button>
        </div>
    )
}


 


 