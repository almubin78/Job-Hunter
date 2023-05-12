import React from 'react';
import rightLogo from '../../../assets/All Images/P3OLGJ1 copy 1.png'

const Header = () => {
    return (
        <div className=' md:flex items-center mt-3 mb-5 container'>
            <div className="content-section ">
                <div>
                    <h2 className='text-xl'>One Step Closer To Your  </h2>
                    <h2 className='text-purple-500 text-2xl'>Dream Job</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                </div>
                <button className='btn'>Get Started</button>
            </div>
            <div className="img-section ">
                <img src={rightLogo} alt="" />
            </div>
        </div>
    );
};

export default Header;