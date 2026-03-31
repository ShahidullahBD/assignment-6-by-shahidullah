import React from 'react';
import { AiFillProject } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import roketIcon from '../../assets/rocket.png';
import packageIcon from '../../assets/package.png';
import user from '../../assets/user.png';

const GetStart = () => {

    const bgLinear = 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]';

    return (
        <div className='my-40 w-[70%] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold text-black'>Get Started in 3 Steps</h2>
                <p className='my-5'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-3 gap-5'>

                {/* Card-1 */}
                <div className='card border shadow-lg p-5 flex items-center space-y-4 relative my-10'>
                    <p className={`absolute right-5 px-2 py-1 rounded-full w-fit ${bgLinear} text-white`}>01</p>
                    <div className='mt-10 p-8 rounded-full text-5xl w-fit bg-[#f3e8fe]'>
                        <img src={user} alt="UserIcon" />
                    </div>
                    <h3 className='text-2xl font-bold my-5'>Create Account</h3>
                    <p className='mb-15 text-center'>Sign up for free in seconds. No credit card <br />required to get started.</p>
                </div>

                {/* Card-2 */}
                <div className='card border shadow-lg p-5 flex items-center space-y-4 relative my-10'>
                   <p className={`absolute right-5 px-2 py-1 rounded-full w-fit ${bgLinear} text-white`}>02</p>
                    <div className='mt-10 p-8 rounded-full text-5xl w-fit bg-[#f3e8fe]'>
                        <img src={packageIcon} alt="packageIcon" />
                    </div>
                    <h3 className='text-2xl font-bold my-5'>Choose Products</h3>
                    <p className='mb-15 text-center'>Browse our catalog and select the tools <br />that fit your needs.</p>
                </div>

                {/* Card-3 */}
                <div className='card border shadow-lg p-5 flex items-center space-y-4 relative my-10'>
                    <p className={`absolute right-5 px-2 py-1 rounded-full w-fit ${bgLinear} text-white`}>03</p>
                    <div className='mt-10 p-8 rounded-full text-5xl w-fit bg-[#f3e8fe]'>
                        <img src={roketIcon} alt="roketIcon" />
                    </div>
                    <h3 className='text-2xl font-bold my-5'>Start Creating</h3>
                    <p className='mb-15 text-center'>Download and start using your premium  <br />tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default GetStart;