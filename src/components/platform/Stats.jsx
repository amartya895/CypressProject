import React from 'react'

const Stats = (props) => {
  return (
    <div>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800 text-center">
          <div className="grid gap-x-6 lg:gap-x-12 md:grid-cols-3">

            <div className="mb-12 md:mb-0">
              <h2 className="text-3xl font-bold display-5 text-black mb-4">{props.h2a}</h2>
              <h5 className="text-2xl font-medium mb-4 text-gray-500">{props.statA}</h5>
            </div>

            <div className="mb-12 md:mb-0">
              <h2 className="text-3xl font-bold display-5 text-black mb-4">{props.h2b}</h2>
              <h5 className="text-2xl font-medium mb-4 text-gray-500">{props.statB}</h5>
            </div>

            <div className="mb-12 md:mb-0">
              <h2 className="text-3xl font-bold display-5 text-black mb-4">{props.h2c}</h2>
              <h5 className="text-2xl font-medium mb-4 text-gray-500">{props.statC}</h5>
            </div>

          </div>
        </section>  
      </div>
    </div>
  )
}

export default Stats