import React, { useState } from 'react';
import { TiTick } from 'react-icons/ti';

const Cart = ({plan, purchesCarts, setPurchesCarts }) => {   
    
    const bgLinear = 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]';
    const [isBuyNow, setIsBuyNow] = useState(false);

    const handleBuyNow = ()=> {
        setIsBuyNow(true);
        setPurchesCarts([...purchesCarts, plan]);      
        alert(plan.name);
    }

    return (
        <div>
            <div key={plan.id} className='p-6 border rounded-2xl space-y-3 relative'>
                            <div>
                                <img src={plan.icon} alt="pen" />
                                <p className={`absolute top-2 right-2 px-3 py-1 bg-blue-500 rounded-full text-white`}>{plan.tagType}</p>
                            </div>
                            <h3 className='text-2xl font-bold'>{plan.name}</h3>
                            <p>{plan.description}</p>
                            <p><span className='text-2xl font-bold'>$ {plan.price}</span>/{plan.period}</p>
                            <div>
                                <div className='flex items-center gap-1'>
                                    <TiTick className='text-green-600'></TiTick>
                                    <p>{plan.features[0]}</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <TiTick className='text-green-600'></TiTick>
                                    <p>{plan.features[1]}</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <TiTick className='text-green-600'></TiTick>
                                    <p>{plan.features[2]}</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <TiTick className='text-green-600'></TiTick>
                                    <p>{plan.features[3]}</p>
                                </div>
                            </div>
                            <button onClick={handleBuyNow}
                            className={`${bgLinear} btn btn-primary w-full rounded-full mt-2 text-white`}>{isBuyNow? "Purchased" : "Buy Now"}</button>
                        </div>
        </div>
    );
};

export default Cart;