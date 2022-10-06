import React from 'react';

const ReviewItem = ({ product }) => {
    const { img, name, price, shipping } = product;
    return (
        <div className='grid grid-cols-6 border-2 h-40 w-9/12 mx-auto my-8'>
            <div className='col-span-1.5 w-full '>
                <img className='object-fill h-40' src={img} alt="" />
            </div>
            <div className='col-span-3 flex flex-col justify-center ml-4'>
                <p className='text-2xl font-semibold'>{name}</p>
                <p className='font-semibold text-xl my-2'>Price: ${price}</p>
                <p className='text-lg'>Shipping Charge: ${shipping}</p>
            </div>
        </div>
    );
};

export default ReviewItem;