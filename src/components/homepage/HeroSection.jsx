import React from 'react';
import Card1 from '../../assets/images/card1.png';
import Card2 from '../../assets/images/card2.png';
import Cards from './Card';

const HeroSection = () => {
    return (
        <div>
            <div className='justify-center text-center mt-16'>
                <h1 className='text-white text-6xl font-black tracking-wide leading-tight'>
                <span className='text-emerald-500 font-sans'>Testing</span> your <span className='text-emerald-500'>code</span> <br /> doesn't have to be painful.
                </h1>

                <p className='text-white mt-5 font-sans'>
                Cypress is a powerful JavaScript-based end-to-end testing tool that helps you write faster, easier and <br /> more reliable tests for your application.
                </p>
            </div>

            <div className='flex flex-row gap-16 mt-24 justify-center text-center'>
                <Cards
                    Card1={Card1}
                    title='Test Runner'
                    description='Get started with Cypress in minutes and start writing tests for your application'
                    buttonText='$ npm install cypress'
                />

                <Cards
                    Card1={Card2}
                    title='Cypress Dashboard'
                    description='Scale your testing with our hosted dashboard service. Run tests in parallel, track test results, and more.'
                    buttonText='Sign up for free'                    
                />
            </div>
        </div>
    )
}

export default HeroSection