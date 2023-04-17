import React from 'react'
import V1 from '../../assets/video/v1.mp4'
import F6 from '../../assets/images/f6.png'
import F7 from '../../assets/images/f7.png'
import F8 from '../../assets/images/f8.png'

const Feature2 = () => {
    return (
        <div>            
            <div class="relative max-w-screen-xl p-4 px-4 mx-auto bg-white sm:px-6 lg:px-8 py-26 lg:mt-6">
                <div class="relative">
                    <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div class="ml-auto lg:col-start-2 lg:max-w-2xl">
                            <p class="text-base font-semibold leading-6 text-indigo-500 uppercase">
                                Interactive
                            </p>
                            <h4 class="mt-2 text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9">
                            Gain actionable insights into your test suite
                            </h4>
                            <p class="mt-4 text-lg leading-6 text-gray-500">
                            Explore the performance of each test run and track how your project’s health changes over time. Cypress detects updates to your test run’s configuration so you can pinpoint when impactful changes occur.
                            </p>
                            <ul class="gap-6 mt-8 md:grid md:grid-cols-2">
                                <li class="mt-6 lg:mt-0">
                                    <div class="flex">
                                        <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full">
                                            <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span class="ml-4 text-base font-medium leading-6 text-gray-500">
                                        Project Health
                                        </span>
                                    </div>
                                </li>
                                <li class="mt-6 lg:mt-0">
                                    <div class="flex">
                                        <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full">
                                            <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span class="ml-4 text-base font-medium leading-6 text-gray-500">
                                            Test Suite Analytics
                                        </span>
                                    </div>
                                </li>
                                <li class="mt-6 lg:mt-0">
                                    <div class="flex">
                                        <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full">
                                            <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span class="ml-4 text-base font-medium leading-6 text-gray-500">
                                            Flake Severity
                                        </span>
                                    </div>
                                </li>
                                <li class="mt-6 lg:mt-0">
                                    <div class="flex">
                                        <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full">
                                            <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span class="ml-4 text-base font-medium leading-6 text-gray-500">
                                            Failure & Error Summary
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                            <div class="relative space-y-4">
                                <div class="flex items-end justify-center space-x-4 lg:justify-start">
                                    <img class="w-32 rounded-lg shadow-lg md:w-56" width="200" src={F6} alt="1"/>
                                    <video src={V1} controls className="w-full md:w-1/2 md:float-right md:ml-4"></video>
                                </div>
                                <div class="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                                    <img class="w-24 rounded-lg shadow-lg md:w-40" width="170" src={F7} alt="3"/>
                                    <img class="w-32 rounded-lg shadow-lg md:w-56" width="200" src={F8} alt="4"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature2