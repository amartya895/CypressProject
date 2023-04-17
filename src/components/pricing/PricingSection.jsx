import React from 'react'
import Price2 from './Price2'
import Price1 from './Price1'
import Price3 from './Price3'
import Price4 from './Price4'

const PricingSection = () => {
    return (
    <div>
        <div className="container my-24 px-6 mx-auto">                
            <section className="mb-32 text-gray-800">
                
                <h2 className="text-2xl font-semibold text-center mb-6">Monthly | Annually | Yearly</h2>                
                <div className="grid lg:grid-cols-4 gap-6 xl:gap-x-12">
                    <Price1 />
                    <Price2 />
                    <Price3 />
                    <Price4 />      
            </div>
            </section>                
        </div>
    </div>
    )
}

export default PricingSection