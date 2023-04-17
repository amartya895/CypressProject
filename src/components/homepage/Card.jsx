import React from 'react';

const Cards = (props) => {
    return (
        <div className='bg-white rounded-lg shadow-xl'>
            <div className="max-w-sm rounded overflow-hidden w-[350px] mb-10">
                <img className="w-full rounded-lg" src={props.Card1} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{props.title}</div>
                    <p className="text-gray-700 text-base">
                        {props.description}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <button className="bg-black text-white font-bold py-2 px-4 rounded-full">
                        {props.buttonText}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cards;