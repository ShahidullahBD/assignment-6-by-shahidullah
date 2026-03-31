import React from 'react';
import logo from '../../assets/DigiTools.png';
import { BsCart } from 'react-icons/bs';

const Navbar = ({ purchesCarts }) => {
    return (
        <div className='w-[80%] mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">                   
                    <a className="btn btn-ghost text-xl">
                        <img className='py-1' src={logo} alt="digitools" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[16px] font-semibold">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-3">
                    <div className='relative mt-7'>
                        {
                            purchesCarts.length == 0? "":<p className='bg-red-500 text-sm text-center px-0.5 rounded-full absolute -top-4 -right-2 text-white'>{purchesCarts.length}</p>
                        }
                        <a href="#" className='mr-5'><BsCart></BsCart></a>
                    </div>
                    <a href="#"><button>Login</button></a>
                    <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;