import React from 'react'
import "../app/globals.css"

export const Input = ({Label,Type,Auth}) => {
    return (
        <div className="sm:col-span-3">
            <label htmlFor={Auth} className="block text-sm font-medium leading-6 text-gray-900">
            {Label}
            </label>
            <div className="mt-2">
                <input
                    type={Type}
                    name={Auth}
                    id={Auth}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    )
}


export const Textfield = ({Label,Auth}) => {
    return (
        <div className="col-span-full">
            <label htmlFor={Auth} className="block text-sm font-medium leading-6 text-gray-900">
                {Label}
            </label>
            <div className="mt-2">
                <textarea
                    id={Auth}
                    name={Auth}
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
        </div>
    )
}

