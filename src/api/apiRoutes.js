import { endPoint } from './../utils/apiEndPiont'

function GetById(controller, id) {
    const url = `${endPoint}${controller}/getbyid?id=${id}`

    return fetch(url).then(result => result).then(res => res.json())
        .catch(err => console.log(err));
}

function GetAll(controller) {
    const url = `${endPoint}${controller}/getall`

    return fetch(url).then(result => result).then(res => res.json())
        .catch(err => console.log(err));
}

function Trequest(controller, requestType, entity) {
    const url = `${endPoint}${controller}/${requestType}`

    const method = handleMethod(requestType);

    const request = {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(entity)

    }

    // console.log(entity)

    return fetch(url, request).then(result => result).then(resp => resp.json())
        .catch(err => console.log(err));
}


function handleMethod(request) {
    switch (request) {
        case 'create':
            return 'POST';
        case 'delete':
            return 'DELETE';
        case 'update':
            return 'PUT';
        default:
            return 'GET';
    }
}

export {
    GetById,
    GetAll,
    Trequest
}