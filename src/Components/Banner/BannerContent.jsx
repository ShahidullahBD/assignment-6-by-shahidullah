import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { IoPlayOutline } from 'react-icons/io5';

const BannerContent = () => {
    const bgLinear = 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]';
    return (
        <div>
            <div className='flex rounded-full w-fit gap-2 items-center bg-[#E1E7FF] p-3 mb-4'>
                <GoDotFill className='text-[#9514FA]' />
                <p className={`text-base ${bgLinear} text-transparent bg-clip-text`}>New: AI-Powered Tools Available</p>
            </div>
            <div>
                <h1 className='text-7xl font-bold text-[#101727]'>Supercharge Your <br />Digital Workflow</h1>
                <p className='mt-2'>Access premium AI tools, design assets, templates, and productivity <br />software—all in one place. Start creating faster today. <br />Explore Products
                </p>
            </div>
            <div className='flex gap-4 my-8'>
                <button className={`btn ${bgLinear} p-4 rounded-full text-white text-base font-bold`}>Explore Products</button>
                <div className={`${bgLinear} rounded-2xl`}>
                    <div className='flex gap-2 items-center btn w-fit p-3.5 rounded-2xl bg-white'>
                        <IoPlayOutline className='text-[#4F39F6]' />
                        <button className={`${bgLinear} text-transparent bg-clip-text`}>Watch Demo</button>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default BannerContent;