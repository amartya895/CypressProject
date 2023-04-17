import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <div>  
      <div>
        <h1 className='flex justify-center text-bold text-4xl -mt-10 mb-5'>Testimonials</h1>
      </div>  
      <div class="flex flex-col items-center justify-center w-full gap-6 p-8 mb-8 md:flex-row md:mb-0 flex-between">
        <TestimonialCard />  
        <TestimonialCard />  
        <TestimonialCard />  
        <TestimonialCard />  
      </div>
    </div>
  )
}

export default Testimonials