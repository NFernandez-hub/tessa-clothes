import React from 'react'
import foto from './../Tabla-Talles-Tessa-Intimates.jpg';
import Image from 'react-bootstrap/Image';

export const TableImagePage = () => {
    return (
        <div>
            <Image className="imagen" src={foto} fluid />
        </div>
    )
}
