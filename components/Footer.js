import React from 'react'
import Socials from '@/common/Socials'
const Footer = () => {
    return (
        <footer className='bg-gray-600'>
            <div className="mx-auto w-5/6 py-4 sm:py-6 lg:py-6 px-2 sm:px-6 lg:px-8 ">

                <div className='flex justify-between items-center flex-col lg:flex-row gap-4 lg:gap-0'>
                    <div className='text-center'>
                        <h2>© 2024 Saad Ansari Portfolio. All rights reserved.</h2>
                    </div>
                    <div>
                        <Socials />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
