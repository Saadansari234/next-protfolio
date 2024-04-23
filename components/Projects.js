import React from 'react'
import Image from 'next/image'
import myProjects from '@/Database/projects'
const Projects = () => {
    return (
        <div className='flex flex-col items-center  mx-auto w-full lg:w-5/6 py-4 sm:py-8 lg:py-8 px-2 sm:px-6 lg:px-8'  >
            <div className='lg:w-6/12 md:w-6/12 text-center '>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    My Projects
                </h1>
                <p className="mt-3 text-xl font-bold leading-8 dark-heading-extrapro">
                    Projects That I have Build Using Technical Skills
                </p>
            </div>
            <div className='w-full my-5 lg:my-11'>
                {
                    myProjects.map((elem, index) => {
                        if (elem.position == "left") {
                            return (

                                <div class="flex flex-wrap justify-between w-full h-full ">

                                    <div class="mt-3 relative h-60 bg-slate-400 project-container-1 color-border box-shadow-2 " >
                                        <Image
                                     
                                            src={elem.p1.ImageLink}
                                            alt="mypic"
                                            fill
                                            objectFit="cover"
                                            className="absolute-image img-radius"
                                            quality={50}
                                        />
                                        <div className='project-details flex justify-center items-center'>
                                          <div className='flex flex-col items-center w-11/12 gap-2 lg:gap-3 text-gray-900'>
                                            <h1 className='text-sm lg:text-lg font-extrabold'>{elem.p1.Name}</h1>
                                            <h2 className='text-sm lg:text-lg'>
                                                <span className='font-extrabold'>Tech Stack:</span>
                                                {elem.p1.Stack}
                                            </h2>
                                            <div  className='flex  lg:gap-16 res-icons'>
                                                <a href={elem.p1.SourceCode} className='underline font-bold'><i class="fa-brands fa-github mr-1"></i>Source Code</a>
                                                <a href={elem.p1.LivePrev} className='underline font-bold'><i class="fa-solid fa-link mr-1"></i>Live Prev</a>
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                    <div class="mt-3 relative h-60 bg-slate-400 project-container-2 color-border box-shadow-2">
                                        <Image
                                            src={elem.p2.ImageLink}
                                            alt="mypic"
                                            layout="fill"
                                            objectFit="cover"
                                            className="absolute-image img-radius"
                                            quality={50}
                                        />
                                        <div className='project-details flex justify-center items-center'>
                                          <div className='flex flex-col items-center w-11/12 gap-2 lg:gap-3 text-gray-900'>
                                            <h1 className='text-sm lg:text-lg font-extrabold'>{elem.p2.Name}</h1>
                                            <h2 className='text-sm lg:text-lg'>
                                                <span className='font-extrabold'>Tech Stack:</span>
                                                {elem.p2.Stack}
                                            </h2>
                                            <div  className='flex  lg:gap-16 res-icons'>
                                                <a href={elem.p2.SourceCode} className='underline font-bold'><i class="fa-brands fa-github mr-1"></i>Source Code</a>
                                                <a href={elem.p2.LivePrev} className='underline font-bold'><i class="fa-solid fa-link mr-1"></i>Live Prev</a>
                                            </div>
                                          </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        } else if (elem.position == "right") {
                            return (
                                <div class="flex flex-wrap justify-between w-full h-full">

                                    <div class="mt-3 relative h-60 bg-slate-400 project-container-2 color-border box-shadow-2">
                                        <Image
                                            src={elem.p2.ImageLink}
                                            alt="mypic"
                                            layout="fill"
                                            objectFit="cover"
                                            className="absolute-image img-radius"
                                            quality={50}
                                        />
                                        <div className='project-details flex justify-center items-center'>
                                          <div className='flex flex-col items-center w-11/12 gap-2 lg:gap-3 text-gray-900'>
                                            <h1 className='text-sm lg:text-lg font-extrabold'>{elem.p2.Name}</h1>
                                            <h2 className='text-sm lg:text-lg'>
                                                <span className='font-extrabold'>Tech Stack:</span>
                                                {elem.p2.Stack}
                                            </h2>
                                            <div  className='flex  lg:gap-16 res-icons'>
                                                <a href={elem.p2.SourceCode} className='underline font-bold'><i class="fa-brands fa-github mr-1"></i>Source Code</a>
                                                <a href={elem.p2.LivePrev} className='underline font-bold'><i class="fa-solid fa-link mr-1"></i>Live Prev</a>
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                    <div class="mt-3 relative h-60 bg-slate-400 project-container-1 color-border box-shadow-2" >
                                        <Image
                                            src={elem.p1.ImageLink}
                                            alt="mypic"
                                            layout="fill"
                                            objectFit="cover"
                                            className="absolute-image img-radius"
                                            quality={50}
                                        />
                                        <div className='project-details flex justify-center items-center'>
                                          <div className='flex flex-col items-center w-11/12 gap-2 lg:gap-3  text-gray-900'>
                                            <h1 className='text-sm lg:text-lg font-extrabold'>{elem.p1.Name}</h1>
                                            <h2 className='text-sm lg:text-lg'>
                                                <span className='font-extrabold'>Tech Stack:</span>
                                                {elem.p1.Stack}
                                            </h2>
                                            <div  className='flex  lg:gap-16 res-icons' >
                                                <a href={elem.p1.SourceCode} className='underline font-bold'><i class="fa-brands fa-github mr-1"></i>Source Code</a>
                                                <a href={elem.p1.LivePrev} className='underline font-bold'><i class="fa-solid fa-link mr-1"></i>Live Prev</a>
                                            </div>
                                          </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        }
                    })
                }


            </div>
        </div>
    )
}

export default Projects
