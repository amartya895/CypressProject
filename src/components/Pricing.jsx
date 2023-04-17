import React from 'react'
import Footer from './homepage/Footer'
import OtherNavbar from './homepage/OtherNavbar'
import HeadingSection from './pricing/HeadingSection'
import PriceSection2 from './pricing/PriceSection2'
import PricingSection from './pricing/PricingSection'

const Pricing = () => {
  return (
    <div>      
      <div className='bg-blue-100 h-auto'>
        <OtherNavbar />
        <HeadingSection
          h1a = 'Start with'
          h1b = 'open source'
          h1c = ', scale with'
          h1d = 'Cypress Cloud'
          para = 'Build, test, and ship quality code with actionable insights'
        />
        <PricingSection />   
        <PriceSection2 />    
        <Footer />  
      </div>
      

      
    </div>
  )
}

export default Pricing