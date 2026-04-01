import React, { use, useState } from 'react';
import Cart from './Cart';
import PurchesedCart from './PurchesedCart';

const MainSectionCart = ({ plansPromise, purchesCarts, setPurchesCarts }) => {

    const plans = use(plansPromise);

    const [activeTab, setActiveTeb] = useState('Products');
    

    return (
        <div className=''>
            <div className='flex items-center justify-center gap-3 my-5 text-base font-bold'>
                <button onClick={()=> setActiveTeb('Products')}
                className={`btn ${activeTab=='Products'}? btn-primary : btn-outline  rounded-full`}>Products</button>
                <button onClick={()=> setActiveTeb('Cart')}
                className='btn btn-primary rounded-full'
                >Carts ({purchesCarts.length})</button>
            </div>

            {activeTab === 'Products' && <div className='w-[70%] grid lg:grid-cols-3 grid-cols-2 gap-10 mx-auto my-10'>
                {
                    plans.map(plan =>
                        <Cart key={plan.id} plan={plan} purchesCarts={purchesCarts} setPurchesCarts={setPurchesCarts} />
                    )
                }
            </div>}
           {activeTab === "Cart" && <div>
                <PurchesedCart purchesCarts={purchesCarts} setPurchesCarts={setPurchesCarts}/>
            </div>}
        </div>
    );
};

export default MainSectionCart;