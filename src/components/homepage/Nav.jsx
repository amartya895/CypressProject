import React from 'react';
import Logo from '../../assets/images/logo.png';

const Nav = () => {
    return (
        <div className='flex flex-row gap-60 ml-2 mr-2'>
            <div className='flex flex-row gap-80 text-lg col-span-2 ...'>
                <div className='mt-5 ml-2'>
                    <img className='w-30 h-16' src={Logo}/>
                </div>
                <ul className='flex flex-row gap-7 mt-10 text-white'>
                    
                    <li className=''>
                        <a href='#'>Why Cypress</a>
                    </li>
                    <li className=''>
                        <a href='#'>Platform</a>
                    </li>
                    <li className=''>
                        <a href='/Pricing'>Pricing</a>
                    </li> 
                    <li className=''>
                        <a href='#'>Customers</a>
                    </li> 
                    <li className=''>
                        <a href='#'>What's New</a>
                    </li>   
                    <li className=''>
                        <a href='#'>Learn</a>
                    </li>                
                </ul>   
            </div>

            <div className='flex flex-row text-lg mt-7'>
                <button type="button" className="text-emerald-500 font-medium px-5 py-2.5 mr-2 mb-2">
                    Log In
                </button>
                <button type="button" className="text-white font-medium px-5 py-2.5 mr-2 mb-2">
                    Sign Up
                </button>
            </div>
        </div>
    );
}

export default Nav