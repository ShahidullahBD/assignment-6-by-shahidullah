import React from 'react';
import { toast } from 'react-toastify';

const bgLinear = 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]';

const PurchesedCart = ({purchesCarts, setPurchesCarts}) => {
    
    const totalPrice = purchesCarts.reduce((sum, item) => sum + item.price, 0)
    
    
    const handlePayment = () => {        
        if(purchesCarts.length === 0){
            toast.error('You not purchase any plan yet');
            return;
        }
        setPurchesCarts([])
        toast.success('Payment Successful')                
    }

    const handDelete = (cart) => {
        const filteredArr = purchesCarts.filter(c => c.id !== cart.id)
        setPurchesCarts(filteredArr)
        toast.warning('Plan deleted')
    }
   
    return (
        <div className='w-[70%] mx-auto my-10'>
            {
                purchesCarts.map(cart =>
                    <div className='flex justify-between items-center rounded-xl mb-5 p-4 bg-blue-100'
                     key={cart.id}>
                        <div className='flex items-center gap-3'>
                            <div>
                                <img src={cart.icon} alt="" />
                            </div>
                            <div>
                                <p>{cart.name}</p>
                                <p>$ {cart.price}</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={()=>handDelete(cart)}
                            className='bg-red-500 text-white px-2 py-1 rounded-lg'>Delete</button>
                        </div>
                    </div>                    
                )                
            }
            <div className='flex justify-between p-2 bg-gray-50 rounded-lg font-bold'>
                <p>Total</p>
                <p>$ {totalPrice.toFixed(2)}</p>
            </div>
            <div>
                <button onClick={()=> handlePayment()}
                className={`btn btn-primary w-full rounded-full mt-3 ${bgLinear} text-lg`}>Proceed to Checkout</button>
            </div>
        </div>
        
    );
};

export default PurchesedCart;