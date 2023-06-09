import React from 'react'

const Stories = (props) => {
  return (
    <div>
      <div className="mb-6 lg:mb-0">
        <div className="relative block bg-white rounded-lg shadow-lg">
          <div className="flex">
            <div className="relative overflow-hidden bg-no-repeat bg-cover  shadow-lg rounded-lg mx-4 -mt-4" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img src={props.image} className="w-full" />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
              </a>
            </div>
          </div>
          <div className="p-6">
            <h5 className="font-bold text-lg mb-3">{props.title}</h5> 
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read
              more</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stories