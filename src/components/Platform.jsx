import React from 'react'
import OtherNavbar from './homepage/OtherNavbar'
import PlatformHeading from './platform/PlatformHeading'
import V2 from '../assets/video/v2.mp4'
import PlatformCompanies from './platform/PlatformCompanies'
import Timeline from './platform/Timeline'
import Section from './homepage/Section'
import Footer from './homepage/Footer'
import HeadingSection from './pricing/HeadingSection'
import Stats from './platform/Stats'
import Testimonials from './platform/Testimonials'

const Platform = () => {
  return (
    <div>
      <div className='bg-blue-100 h-auto'>
      <OtherNavbar />
      <PlatformHeading />      

      <div className='flex justify-center mt-10'>
        <video className="w-5/6 h-auto shadow-lg" autoPlay loop controls muted>
          <source className='' src={V2} type="video/mp4" />
        </video>
      </div> 

      <PlatformCompanies />
    </div>

    <Section 
        h1a = 'Write, run, and debug'
        h1b = 'like a pro'
        para = 'Introducing the Cypress App'
      />

      <Timeline />

      <HeadingSection 
        h1a = 'Loved by '
        h1b = 'OSS'
        h1c = ', trusted by '
        h1d = 'Enterprise'
        para = 'Cypress is proud to support developers all around the world by making it easier to build and test modern applications.'
      />

      <Stats 
        h2a = '5.0M+'
        statA = 'Weekly downloads'
        h2b = '42K+'
        statB = 'GitHub stars'
        h2c = '715K+' 
        statC = 'Dependent repositories'
      />

      <div className='mb-10'>
        <Testimonials />
      </div>
      
      <Footer />
    </div>

  )
}

export default Platform