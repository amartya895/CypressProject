import React from 'react'
import Stories from './Stories'
import C1 from '../../assets/images/c1.webp' 
import C2 from '../../assets/images/c2.webp' 
import C3 from '../../assets/images/c3.webp' 
import C4 from '../../assets/images/c4.webp'
import C5 from '../../assets/images/c5.webp'
import C6 from '../../assets/images/c6.webp'

const CustomerStories = () => {
  return (
    <div className='-mt-10'>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800 text-center">
          <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
            <Stories 
              image = {C1}
              title = 'Pacific Northwest National Laboratory achieves a new level of productivity with Cypress'
            />   
            <Stories 
              image = {C2}
              title = 'Vidyard reduces test run times by 80% with Cypress via test parallelization'
            />   
            <Stories 
              image = {C3}
              title = 'Beamery reduces manual test suite by 50% with Cypress for their end-to-end and component tests'
            />   
          </div>
        </section>
        <section className="mb-32 text-gray-800 text-center">
          <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
            <Stories 
              image = {C4}
              title = 'GoFundMes Developers and QA Engineers Achieve 30x Faster Test Runs with Cypress'
            />   
            <Stories 
              image = {C5}
              title = 'DHL reduces test execution time by 50%, and increases test coverage with Cypress'
            />   
            <Stories 
              image = {C6}
              title = 'Siemens increases test execution speed by 375% with Cypress'
            />   
          </div>
        </section>
      </div>
    </div>
  )
}

export default CustomerStories