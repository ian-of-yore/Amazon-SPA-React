import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const ReviewItem = ({ product }) => {
    const { img, name, price, shipping } = product;
    return (
        <div className='grid grid-cols-6 border-2 h-40 w-7/12 mx-auto my-8'>
            <div className='col-span-2 w-full '>
                <img className='object-fill h-40 w-56' src={img} alt="" />
            </div>
            <div className='col-span-3 flex flex-col justify-center ml-4'>
                <p className='text-2xl font-semibold'>{name}</p>
                <p className='font-semibold text-xl my-2'>Price: ${price}</p>
                <p className='text-lg'>Shipping Charge: ${shipping}</p>
            </div>
            <div className='col-span-1'>
                <p className='mt-12 ml-8 '><FontAwesomeIcon className='w-12 h-12' icon={faTrashCan}></FontAwesomeIcon></p>
            </div>
        </div>
    );
};

export default ReviewItem;