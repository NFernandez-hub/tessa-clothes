import React, {useState, useEffect} from 'react';
import {GetAll,GetById,Trequest} from '../../api/apiRoutes';
import {Form, FormGroup, Button, Spinner} from 'react-bootstrap';
import {useForm} from '../../hooks/useForm';

export function BrandComponent() {
    
    const controller = 'Brand';
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

export function GetBrandComponent(){
    
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(false);

    if(brands === []){
        return <div><Spinner/></div>
    }

    return (
        <div>
            {brands.map((item, index) => {
                <div>
                    <h4>item.nam</h4>
                </div>
            })}
        </div>
    )
}

 

export function ManageBrandComponent(props){

    const {brand, action} = props;

    const [brandInput, setBrandInput] = useState(brand);
    const [action, setAction] = useState(action);
    const [buttonName, setButtonName] = useState('');
    const [inputEnabled, setInputEnabled] = useState(false);
    const [action, setAction] = useState('');
    const [ values, handleInputChange, reset ] = useForm(brandInput);
    const {name} = values;


    useEffect(() => {
        handleScreenLoading(action);
    }, [])

    const handleScreenLoading = (action) => {

        switch (acton) {
            case 'D':
                setInputEnabled(false);
                setButtonName('Borrar');
                setAction('delete');
                break;
            case 'U':
                setInputEnabled(true);
                setButtonName('Guardar');
                setAction('update');
                break;
            default:
                break;
        }

    }

    return (
        <Form>
            <Form.Control value={name} 
            onChange={handleInputChange} 
            enabled={inputEnabled}/>   
            <Button>{buttonName}</Button>
        </Form>
    )
}

