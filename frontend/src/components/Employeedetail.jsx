import React from 'react'

function Employeedetail() {
    return (
        <div className='m-5'>
            <h1 className='font-bold text-3xl'>WELCOME AYUSH </h1>
            <div className='w-[30%] mt-4'>
                <a
                    href="#"
                    className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                >
                    <span
                        className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                    ></span>

                    <div className="sm:flex sm:justify-between sm:gap-4">
                        <div>
                            <h1 className='font-bold mb-2'>Name: <span className='font-light'>Ayush</span></h1>
                            <h1 className='font-bold mb-2'>Email: <span className='font-light'>ayush2@gmail.com</span></h1>
                            <h1 className='font-bold mb-2'>Phone: <span className='font-light'>8684894051</span></h1>
                            <h1 className='font-bold mb-2'>Password: <span className='font-light'>Ayush23@</span></h1>
                            <h1 className='font-bold mb-2'>Address: <span className='font-light'>142 A block Noida </span></h1>

                            {/* <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                Building a SaaS product as a software developer
                            </h3> */}

                            {/* <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p> */}
                        </div>

                        <div className="hidden sm:block sm:shrink-0   flex-col items-center justify-center  ">
                            <img
                                alt=""
                                src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"
                                className="size-16 rounded-lg object-cover shadow-sm"
                            />
                            <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm mt-10">
                                <button
                                    className="inline-block border-e p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                                    title="Edit Product"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                        />
                                    </svg>
                                </button>

                                <button
                                    className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                                    title="Delete Product"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                    </svg>
                                </button>
                            </span>
                        </div>

                    </div>

                </a>

            </div>

        </div>
    )
}

export default Employeedetail