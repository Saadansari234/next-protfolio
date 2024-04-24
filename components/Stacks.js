import React from 'react'
import Image from 'next/image'
import TechStacks from '@/Database/TechStacks'

const Stacks = () => {
    
    return (
        <div className='flex flex-col items-center  mx-auto w-full lg:w-5/6 py-4 sm:py-8 lg:py-8 px-2 sm:px-6 lg:px-8'  >
            <div className='lg:w-6/12 md:w-6/12 text-center '>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Tech Stacks
                </h1>
                <p className="mt-3 text-xl font-bold leading-8 dark-heading-extrapro">
                    These Are My Tech Tool
                </p>
            </div>

            <div className='flex flex-wrap my-8 lg:my-16 gap-5 justify-center w-full'>
                {
                    TechStacks.map((elem, index) => {
                        return (
                            <div className=' w-2/5 lg:w-1/6 h-32 bg-white  flex justify-center items-center box-shadow-2 img-radius cursor-pointer' key={index}>
                                <div style={{width:"85%",height:"85%"}}>
                                    <img src={elem.logo} className='w-full h-full object-contain' alt="" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Stacks
