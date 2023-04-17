import React from 'react'

const TestimonialCard = () => {
    return (
        <div>
        <div class="bg-white w-72 shadow-lg mx-auto rounded-xl p-4">
        <div class="flex items-center mt-4 mb-5">
                    <a href="#" class="relative block">
                        <img alt="profil" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-ITm1nJh-g1uzfiTT4ZOl2Pduj0ZIqsfbg&usqp=CAU" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                    <div class="flex flex-col justify-between ml-2">
                        <span class="text-sm font-semibold text-indigo-500">
                            Jean Miguel
                        </span>
                        <span class="flex items-center text-xs">
                            User of Tail-Kit                            
                        </span>
                    </div>
                </div>
                <p class="text-gray-600">
                    <span class="text-lg font-bold text-indigo-500">
                        “
                    </span>
                    To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                    <span class="text-lg font-bold text-indigo-500">
                        ”
                    </span>
                </p>                
            </div>
        </div>
    )
}

export default TestimonialCard