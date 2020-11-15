import React, {useState} from 'react';
import {GetAll,GetById,Trequest} from '../../api/apiRoutes';
import {Form, FormGroup, Button, Spinner} from 'react-bootstrap';
import {useForm} from '../../hooks/useForm';

export function CategoryComponent() {
    
    const controller = 'Category';
    const action = 'create';

    const emptyObject = {
        name: ""
      };

    const [ values, handleInputChange, reset ] = useForm(emptyObject);
    const {name} = values;

    const [loading, setLoading] = useState(false);
    
    
    const handleBrandCreate = async () => {
        try{
            
            setLoading(true);
            var response = await Trequest(controller, action, values);
            setLoading(false);
            
        }catch{

            setLoading(false);

        }finally{
            setLoading(false);
        }
    }

    return (
        <Form>
        <Form.Control 
        type='text' 
        placeholder='Descripción de la marca' 
        value={name} 
        onChange={handleInputChange}/>
        
        <Button onClick={handleBrandCreate}>
            {loading ? 
            <Spinner/> : ('Crear')}
        </Button>
        </Form>
    )
}
