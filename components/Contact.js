"use client"
import React from 'react'
// import { Textfield, Input } from '@/common/Input'
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {

    const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data here

    // Show success message
    toast.success('Message sent successfully!', {
        position: toast.POSITION.TOP_RIGHT // Set toast position to top right
    });

    // After submitting, reset the form
    formRef.current.reset();
  };

    return (
        <div className='flex flex-col items-center  mx-auto w-full lg:w-5/6 py-4 sm:py-8 lg:py-8 px-2 sm:px-6 lg:px-8  '  >
           

            <div className='w-full text-center '>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Contact
                </h1>
                <p className="mt-3 text-xl font-bold leading-8 dark-heading-extrapro">
                    Please Fill This Form To Connect
                </p>
            </div>

            <form className='bg-white box-shadow-2 color-border my-5 lg:my-11' ref={formRef} onSubmit={handleSubmit} action="https://formspree.io/f/xjvqpdgr" method="POST">
                <div className='mx-8 my-8 '>
                    <div className="space-y-12 ">
                        <div className="border-b border-gray-900/10 pb-12">
                            

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            required
                                            autoComplete="given-name"
                                            className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Last Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            required
                                            autoComplete="given-name"
                                            className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                                        Number
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="number"
                                            name="number"
                                            id="number"
                                            required
                                            autoComplete="given-name"
                                            className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="e-mail" className="block text-sm font-medium leading-6 text-gray-900">
                                        E mail
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="e-mail"
                                            id="e-mail"
                                            required
                                            autoComplete="given-name"
                                            className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                                        Message
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={3}
                                            className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                                </div>


                            </div>

                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">

                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>

            <ToastContainer
                position="top-right" // Set toast container position to top right
                autoClose={5000} // Close toast after 5 seconds
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </div >

    )
}

export default Contact
