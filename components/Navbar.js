"use client"
import React from 'react';
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRef , useEffect } from 'react';
import { navLinks } from '@/Database/Links';
// changes for deployment
const navigation = [
    { name: 'Home', href: navLinks.home, current: false },
    { name: 'About', href: navLinks.about, current: false },
    { name: 'Portfolio', href: navLinks.portfolio, current: false },
    { name: 'Contact', href: navLinks.contact, current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

    const scrolled = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            scrolled.current = isScrolled;
        };

        // Check scroll position immediately when the component mounts
        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Disclosure as="nav" className={`fixed w-full z-10 ${scrolled ? 'bg-white box-shadow' : 'bg-transparent '}`}>
            {({ open }) => (
                <div>
                    <div className="mx-auto max-w-full px-2  sm:px-6 lg:px-8">
                        <div className="relative flex w-full  h-16 items-center justify-between">
                            <div className="absolute inset-y-0 right-0  flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 w-full justify-between items-center  sm:justify-between ">
                                <div className="flex flex-shrink-0 items-center">
                                   <h2 className='logo-name'>Saad.</h2>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-600 text-gray-600' : 'text-gray-600 hover:bg-gray-600 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden bg-gray-600">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-600 text-white' : 'text-white hover:bg-gray-600 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </div>
            )}
        </Disclosure>
    )
}
