import React from 'react'

const Heading = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="sm:text-5xl text-4xl font-sans font-bold text-black">
            Cypress customers           
          </h2>
          <p className="text-xl mt-4 w-auto mx-auto text-gray-400">
          Top companies are eliminating bugs, reducing regressions, and <br/> shipping apps confidently with Cypress
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <button type="button" className="py-3 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Contact sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heading