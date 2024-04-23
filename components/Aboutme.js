import React from 'react'
import Image from 'next/image'
import Socials from '@/common/Socials'

const Aboutme = () => {
    return (
        <div>
            <div className="mx-auto w-5/6 py-24 sm:py-28 lg:py-36 px-2 sm:px-6 lg:px-8">
                <div className=' flex flex-col md:flex-row lg:flex-row items-center justify-between gap-8 '>
                    <div className='lg:w-5/12 md:w-5/12'>
                        <div className='my-image-container'>
                            <Image
                                src="/mypic-2.jpeg"
                                alt="mypic"
                                layout="fill"
                                objectFit="cover"
                                className="absolute-image"
                                quality={100}
                            />
                        </div>
                    </div>
                    <div className='lg:w-5/12 md:w-5/12'>
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            About Me
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Passionate React developer with a flair for crafting efficient and intuitive user interfaces. Excited about creating seamless web experiences and staying at the forefront of modern web development. Let's connect and collaborate to build the next generation of web applications together!
                        </p>
                        <div className='flex flex-col  mt-4 lg:mt-8'>
                            <div className="font-semibold text-2xl leading-6 ">
                                Connect <span aria-hidden="true">→</span>
                            </div>
                            <div className='mt-2 lg:mt-4'>
                                <Socials />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme
