import React from 'react'
import F3 from '../../assets/images/f3.png'
import F4 from '../../assets/images/f4.png'
import F5 from '../../assets/images/f5.png'

const Feature3 = () => {
    return (
        <div className=''> 
            <div className="bg-white overflow-hidden relative lg:flex lg:items-center">
                <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
                        <span className="block">
                            Integrate seamlessly into your workflow
                        </span>
                    </h2>
                    <p className="text-md mt-4 text-gray-400">
                        Run Cypress tests in CI and record test results to Cypress Cloud for immediate failure feedback. Cypress Cloud integrates with all CI providers, including CircleCI, GitHub Actions, Bitbucket, Jenkins, and more.
                    </p>
                    <div className="lg:mt-0 lg:flex-shrink-0">
                        <div className="mt-12 inline-flex rounded-md shadow">
                            <a href='https://docs.cypress.io/guides/continuous-integration/introduction'>
                                <button type="button" className="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Get started
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-8 p-8 lg:p-24">
                    <img src={F5} className="w-1/2 rounded-lg" alt="Tree"/>
                    <div>
                        <img src={F4} className="mb-8 rounded-lg" alt="Tree"/>
                        <img src={F3} className="rounded-lg" alt="Tree"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature3