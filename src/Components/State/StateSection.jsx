import React from 'react';

const StateSection = () => {

    const bgLinear = 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]';

    return (
        <div className={`${bgLinear} p-5 text-white mb-15 text-center`}>
            <div className="flex divide-x divide-gray-400 justify-center gap-15">
                    <div className='space-y-3 pr-10'>
                        <p className="px-4 text-6xl font-bold">50K+</p>
                        <p>Active Users</p>
                    </div>
                    <div className='space-y-3 pr-10'>
                        <p className="px-4 text-6xl font-bold">200+</p>
                        <p>Premium Tools</p>
                    </div>
                    <div className='space-y-3'>
                        <p className="px-4 text-6xl font-bold">4.9</p>
                        <p>Rating</p>
                    </div>
                </div>
        </div>
    );
};

export default StateSection;