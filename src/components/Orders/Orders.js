import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const products = useLoaderData();

    return (
        <div>
            <h1 className='text-5xl text-center'>This is the Order Component</h1>
            <h1 className='text-5xl text-center mt-8'>Total Products: {products.length}</h1>
        </div>
    );
};

export default Orders;