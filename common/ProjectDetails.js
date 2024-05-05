import React from 'react'
import Image from 'next/image'
import myProjects from '@/Database/projects'
const ProjectDetails = () => {
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
            <div className='w-full flex flex-wrap my-5 lg:my-11 justify-center'>
                {
                    myProjects.map((elem, index) => {
                        return (

                            <div key={index} className=' flex justify-center myproject-contain'>
                                <div className='w-11/12 color-border box-shadow-2 bg-white' style={{ padding: "15px 10px", display: "flex", justifyContent: "center" }}>
                                    <div>
                                        <div style={{ position: "relative",width:"100%",height:"160px", marginBottom: "10px" }}>
                                            <Image
                                                src={elem.ImageLink}
                                                // width={300}
                                                // height={300}
                                                alt="projects"
                                                objectFit='cover'
                                                fill={true}
                                                className='img-radius'
                                            />
                                        </div>
                                        <div className='w-11/12 flex flex-col gap-2'>
                                            <h1><b>{elem.Name}</b></h1>
                                            <p><b>Stacks:</b> {elem.Stack}</p>
                                            <p><b>Note:</b> {elem.note}</p>
                                            <div className='flex justify-between res-icons'>
                                                <a href={elem.SourceCode} className='underline'><i class="fa-brands fa-github mr-1"></i>Source Code</a>
                                                <a href={elem.LivePrev} className='underline '><i class="fa-solid fa-link mr-1"></i>Live Prev</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>


        </div>
    )
}

export default ProjectDetails
