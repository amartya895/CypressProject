import React from 'react'
import CustomerStories from './customers/CustomerStories'
import Heading from './customers/Heading'
import Footer from './homepage/Footer'
import OtherNavbar from './homepage/OtherNavbar'

const Customers = () => {
  return (
    <div>
      <OtherNavbar />
      <Heading />
      <CustomerStories />
      <Footer />
    </div>
  )
}

export default Customers