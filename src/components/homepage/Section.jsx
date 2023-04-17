import React from 'react'

const Section = (props) => {
    return (
        <div className='mt-28'>
            <div className='justify-center text-center mt-16'>
                <h1 className='text-black text-5xl font-bold leading-tight'>
                {props.h1a} <br /> <span className='text-purple-800'>{props.h1b}</span>
                </h1>

                <p className='text-black mt-5'>
                    {props.para}
                </p>
            </div>
        </div>
    )
}

export default Section