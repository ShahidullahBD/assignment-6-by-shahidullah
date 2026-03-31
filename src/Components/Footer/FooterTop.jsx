import React from 'react';

const FooterTop = () => {

    const bgLinear = 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]';

    return (
        <div className={`${bgLinear} py-30 text-center`}>
            <h2 className='text-5xl font-bold text-white'>Ready to Transform Your Workflow?</h2>
            <p className='py-4 text-white'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
            <div className='flex gap-3  justify-center py-4'>
                <button className='btn bg-white rounded-full'>Explore Product</button>
                <button className='btn bg-transparent text-white rounded-full border-white'>View Pricing</button>
            </div>
            
        </div>
    );
};

export default FooterTop;