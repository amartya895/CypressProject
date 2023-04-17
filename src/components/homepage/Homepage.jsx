import React from 'react';
import HeroSection from './HeroSection';
import Section from './Section';
import Feature1 from './Feature1';
import Feature2 from './Feature2';
import Feature3 from './Feature3';
import Footer from './Footer';

import Platform from '../Platform';
import Pricing from '../Pricing';
import Customers from '../Customers';
import Events from '../Events';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

const Homepage = () => {    
    return (
        <div className='bg-gradient-to-r h-[800px] from-sky-900 to-emerald-700 mb-40'>
            <Navbar />
            <HeroSection />
            <Section
                h1a = 'The hardest things about testing'
                h1b = 'are easy with Cypress.'
                para = 'Our open source end-to-end testing tool is trusted by over 500,000 developers and QA engineers to help them build better software.'
            />
            <Feature1 />
            <Feature2 />
            <Feature3 /> 
            <Footer />
        </div>
    )
}

export default Homepage