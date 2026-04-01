import React from 'react';
import { TiTick } from 'react-icons/ti';

const PricingSection = () => {

    const bgLinear = 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]';

    return (
        <div className='w-[70%] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold text-black mb-3'>Simple, Transparent Pricing</h2>
                <p className='mb-5'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-10'>
                <div className='p-6 border rounded-2xl space-y-3 relative'>                    
                    <h3 className='text-2xl font-bold'>Starter</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p><span className='text-2xl font-bold'>$0</span>/Month</p>
                    <div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>2000+ templates</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>2000+ templates</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>2000+ templates</p>
                        </div>
                    </div>
                    <button className={`${bgLinear} btn btn-primary w-full rounded-full mt-2 text-white`}>Get Started Free</button>
                </div>
                <div className={`${bgLinear} p-6 border rounded-2xl space-y-3 relative text-white`}>                    
                    <p className='absolute -top-3.5 right-33 px-3 py-1 bg-amber-400 rounded-full'>Most Popular</p>
                    <h3 className='text-2xl font-bold'>Pro</h3>
                    <p>Best for professionals</p>
                    <p><span className='text-2xl font-bold'>$29</span>/Month</p>
                    <div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>2000+ templates</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>2000+ templates</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>2000+ templates</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>2000+ templates</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>2000+ templates</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>2000+ templates</p>
                        </div>
                    </div>
                    <button className={`btn btn-primary w-full rounded-full mt-2 text-white`}>Get Started Free</button>
                </div>
                <div className='p-6 border rounded-2xl space-y-3 relative'>                    
                    <h3 className='text-2xl font-bold'>Starter</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p><span className='text-2xl font-bold'>$0</span>/Month</p>
                    <div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>2000+ templates</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>2000+ templates</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>2000+ templates</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>2000+ templates</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>2000+ templates</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>2000+ templates</p>
                        </div>
                    </div>
                    <button className={`${bgLinear} btn btn-primary w-full rounded-full mt-2 text-white`}>Get Started Free</button>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;