import React from 'react';
import digiTools from '../../assets/DigiTools.png';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const FooterBottom = () => {
    return (
        <div className='bg-[#101727]'>
            <div className='w-[70%] mx-auto pt-30 pb-15 block space-y-10 lg:flex gap-20 text-white'>
                <div className=''>
                    <div>
                        <img className='brightness-0 invert' src={digiTools} alt="digitoolsIcon" />
                        <p className='mt-5'>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                    </div>
                </div>
                <div>
                    <ul className='space-y-4'>
                        <li className='text-xl '>Products</li>
                        <li>Feature</li>
                        <li>Pricing</li>
                        <li>Templates</li>
                        <li>Integration</li>
                    </ul>
                </div>
                <div>
                    <ul className='space-y-4'>
                        <li className='text-xl '>Company</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Career</li>
                        <li>Press</li>
                    </ul>
                </div>
                <div>
                    <ul className='space-y-4'>
                        <li className='text-xl '>Resources</li>
                        <li>Documentation</li>
                        <li>Help Center`</li>
                        <li>Community</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-xl mb-3'>Social Links</h4>
                    <div className='flex gap-3'>
                        <a href="#" className='p-2 rounded-full bg-white text-black text-xl'> <FaInstagram /> </a>
                        <a href="#" className='p-2 rounded-full bg-white text-black text-xl'> <FaFacebook /> </a>
                        <a href="#" className='p-2 rounded-full bg-white text-black text-xl'> <FaXTwitter /> </a>
                    </div>
                </div>
            </div>
            <div className='block space-y-10 lg:flex justify-between w-[70%] mx-auto text-white py-10'>
                <p>© 2026 Digitools. All rights reserved.</p>
                <div className='flex gap-4'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default FooterBottom;