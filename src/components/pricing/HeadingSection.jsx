import React from 'react'

const HeadingSection = (props) => {
    return (
        <div>
            <div className='justify-center text-center mt-28'>
                <h1 className='text-black text-5xl font-black font-sans'>
                {props.h1a}<span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-900 to-emerald-700'>{props.h1b}</span>{props.h1c}<span className='text-purple-800'>{props.h1d}</span>  
                </h1>

                <p className='text-gray-700 mt-5 text-3xl font-sans text-center ml-80 mr-80 mt-2'>
                    {props.para}                
                </p>
            </div>
        </div>
    )
}

export default HeadingSection