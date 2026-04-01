import React, { use, useState } from 'react';
import Cart from './Cart';
import PurchesedCart from './PurchesedCart';
import EmptyCart from './EmptyCart';

const MainSectionCart = ({ plansPromise, purchesCarts, setPurchesCarts }) => {

    const plans = use(plansPromise);

    const [activeTab, setActiveTeb] = useState('Products');
    

    return (
        <div className=''>
            <div className='flex items-center justify-center text-xl font-bold'>
                <button onClick={()=> setActiveTeb('Products')}
                className={`btn ${activeTab==='Products'? 'btn btn-primary' : 'btn btn-outline'} rounded-l-full`}>Products</button>
                <button onClick={()=> setActiveTeb('Cart')}
                className={`btn ${activeTab==='Cart'? 'btn btn-primary' : 'btn btn-outline'} rounded-r-full`}
                >Carts ({purchesCarts.length})</button>
            </div>

            {activeTab === 'Products' && <div className='w-[70%] grid lg:grid-cols-3 grid-cols-2 gap-10 mx-auto my-10'>
                {
                    plans.map(plan =>
                        <Cart key={plan.id} plan={plan} purchesCarts={purchesCarts} setPurchesCarts={setPurchesCarts} />
                    )
                }
            </div>}

            {purchesCarts.length===0 &&  <div className='w-[70%] mx-auto my-5'>
                <EmptyCart/>
            </div>
            }

           {activeTab === "Cart" && <div>
                <PurchesedCart purchesCarts={purchesCarts} setPurchesCarts={setPurchesCarts}/>
            </div>}

        </div>
    );
};

export default MainSectionCart;