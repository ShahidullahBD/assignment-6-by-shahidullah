import React from 'react';
import { BsCart } from 'react-icons/bs';


const EmptyCart = () => {
    return (
        <div className='bg-gray-50 space-y-5 border border-blue-100 rounded-2xl'>
            <h3 className='p-4 text-2xl font-black text-black'>Your Cart</h3>
            <div className='flex flex-col items-center gap-4'>
                <BsCart className='text-7xl'/>
                <p className='p-2 font-bold'>Your Cart is Empty</p>
            </div>
        </div>
    );
};

export default EmptyCart;