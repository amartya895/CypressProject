import React from 'react'

const PlatformHeading = () => {
    return (
        <div className='mt-20 bg-blue-100'>
            <div class="relative z-20 flex items-center ">
                <div class="container relative flex flex-col items-center justify-between px-6 py-8 mx-auto">
                    <div class="flex flex-col">
                        <h1 class="w-full text-center text-black text-6xl font-bold font-sans">
                        Test. Automate.
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-900 to-emerald-700'> Accelerate.</span> 
                        </h1>
                        <h2 class="w-full max-w-auto py-8 mx-auto text-xl font-light text-center text-gray-800 font-sans">
                        With Cypress, you can easily create tests for your modern web applications, debug them visually, and automatically run them <br /> in your continuous integration builds.
                        </h2>
                        <div class="flex items-center justify-center mt-4">
                            <a href="#" class="px-4 py-2 mr-4 text-white bg-emerald-700 border-2 border-transparent text-md hover:bg-emerald-800 rounded-lg font-sans">
                                >_npm install cypress
                            </a>
                            <a href="#" class="px-4 py-2 text-gray-800 bg-transparent border-2 border-emerald-800 hover:bg-emerald-700 hover:text-white text-md rounded-lg font-sans">
                                Documentation
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default PlatformHeading