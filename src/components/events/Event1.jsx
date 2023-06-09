import React from 'react'

const Event1 = (props) => {
  return (
    <div className='-mb-10'>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <div className="container mx-auto xl:px-32 text-center lg:text-left">
            <div className="lg:grid-cols-2 flex items-center">
              <div className="mb-12 lg:mb-0">
                <div className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-8" style={{background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)'}}>
                  <h2 className="text-3xl font-bold mb-6">{props.title1}</h2>                  
                  <div className="flex flex-col md:flex-row md:justify-around lg:justify-between mb-6 mx-auto">
                    <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                        <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                        </path>
                      </svg>
                      Webinar
                    </p>
                    <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                        <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                        </path>
                      </svg>
                      {props.date1}
                    </p>
                    
                  </div>
                  <p className="text-gray-500 mb-0">
                    {props.description1}
                  </p>
                </div>
              </div>
              <div className="mb-12 lg:mb-0">
                <div className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14" style={{background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)'}}>
                  <h2 className="text-3xl font-bold mb-6">{props.title2}</h2>                  
                  <div className="flex flex-col md:flex-row md:justify-around lg:justify-between mb-6 mx-auto">
                    <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                        <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                        </path>
                      </svg>
                      Webinar
                    </p>
                    <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                        <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                        </path>
                      </svg>
                      {props.date2}
                    </p>
                    
                  </div>
                  <p className="text-gray-500 mb-0">
                    {props.description2}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Jumbotron */}
        </section>
        {/* Section: Design Block */}
      </div>
    </div>
  )
}

export default Event1