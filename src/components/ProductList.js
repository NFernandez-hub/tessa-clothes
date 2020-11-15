import React, { useState, useEffect } from 'react';
import { Product } from '../components/Product';
import { GetAll } from '../api/apiRoutes';


export default function ProductList() {

    const province = 'Province';

    const [productList, setProductList] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        
        getProducts();

    }, [])

    const getProducts = async () => {
        setLoading(true);
        var result = await GetAll(province);
        if (result !== null) {
            setProductList(result);
            setLoading(false);
        }
    }

    if (loading) {
        return <h1>Spinner</h1>
    }

    return (
        <div>
            {
                productList?.forEach((product, index) => {
                    <Product product={product} key={index} />
                })
            }
        </div>
    )
}
