import React, { useState, useEffect } from 'react';
import { GetById } from '../api/apiRoutes';

export default function Client(props) {

    const { clientId } = props;
    const controller = 'Client';

    const [client, setClient] = useState(clientId);

    useEffect(() => {
        getClient(clientId);
    }, [clientId])

    const getClient = async (Id) => {
        var result =  await GetById(controller, Id);
        console.log(result);
    }

    return (
        <div>
        <h1>Este es el cliente</h1>
        </div>
    )
}
