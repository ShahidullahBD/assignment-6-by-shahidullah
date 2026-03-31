import React from 'react';
import Banner from '../../assets/banner.png';

const BannerImage = () => {
    return (
        <div className='shadow-2xl'>
            <img src={Banner} alt="" />
        </div>
    );
};

export default BannerImage;