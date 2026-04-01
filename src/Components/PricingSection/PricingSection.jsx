import React from 'react';
import { TiTick } from 'react-icons/ti';

const PricingSection = () => {

    const bgLinear = 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]';
    const textLinear = 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text text-transparent bg-clip-text';

    return (
        <div className='w-[70%] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold text-black mb-3'>Simple, Transparent Pricing</h2>
                <p className='mb-5'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-10'>
                <div className='flex flex-col p-6 border rounded-2xl space-y-3 relative shadow-lg'>                    
                    <h3 className='text-2xl font-bold'>Starter</h3>
                    <p>Perfect for getting started</p>
                    <p><span className='text-2xl font-bold'>$0</span>/Month</p>
                    <div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>Access to 10 free tools</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>Basic templates</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>Community support</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>1 project per month</p>
                        </div>
                    </div>
                    <button className={`${bgLinear} btn btn-primary w-full rounded-full text-white mt-auto`}>Get Started Free</button>
                </div>
                <div className={`${bgLinear} p-6 border rounded-2xl space-y-3 relative text-white flex flex-col shadow-lg`}>                    
                    <p className='absolute -top-3.5 right-27 px-3 py-1 bg-amber-400 rounded-full'>Most Popular</p>
                    <h3 className='text-2xl font-bold'>Pro</h3>
                    <p>Best for professionals</p>
                    <p><span className='text-2xl font-bold'>$29</span>/Month</p>
                    <div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>Access to all premium tools</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>Unlimited templates</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>Priority support</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>Unlimited projects</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>Cloud sync</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>Advanced analytics</p>
                        </div>
                    </div>
                    <button className={`btn w-full rounded-full text-blue-800 mt-auto`}> 
                        <span className={`${textLinear}`}>Start Pro Trial</span> </button>
                </div>
                <div className='flex flex-col p-6 border rounded-2xl space-y-3 relative shadow-lg'>                    
                    <h3 className='text-2xl font-bold'>Enterprise</h3>
                    <p>For teams and businesses</p>
                    <p><span className='text-2xl font-bold'>$0</span>/Month</p>
                    <div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>Everything in Pro</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>Team collaboration</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>Custom integrations</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>Dedicated support</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>SLA guarantee</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <TiTick className='text-green-600'></TiTick>
                            <p>Custom branding</p>
                        </div>
                    </div>
                    <button className={`${bgLinear} btn btn-primary w-full rounded-full mt-auto text-white`}>Contact Sales</button>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;