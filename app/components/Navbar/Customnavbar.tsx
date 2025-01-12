"use client;"
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Contactusform from './Contactus';

const NewNavbar = () => {
    return (
        <Disclosure as="nav" className="navbar">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
                        <div className="relative flex h-12 sm:h-20 items-center justify-between">
                            <div className="flex flex-1 items-center sm:justify-between">
                                {/* LOGO */}
                                <div className="flex flex-shrink-0 items-center border-right">
                                    <Link href="/" className="text-2xl sm:text-4xl font-semibold text-black">
                                        Hiversoft
                                    </Link>
                                </div>

                                {/* DESKTOP LINKS */}
                                <div className="hidden lg:flex items-center border-right flex-1 justify-center">
                                    <div className="flex space-x-8">
                                        <Link href="/" className="navlinks hover:text-black px-3 py-4 rounded-md text-lg font-normal">
                                            Home
                                        </Link>
                                        <span className="text-lg font-normal text-gray-500 cursor-default py-4">
                                            Blog
                                        </span>
                                    </div>
                                </div>

                                {/* DESKTOP CONTACT US */}
                                <div className="hidden lg:block ml-4">
                                    <Contactusform />
                                </div>
                            </div>

                            {/* MOBILE MENU BUTTON */}
                            <Disclosure.Button className="lg:hidden inline-flex items-center justify-center rounded-md p-2">
                                {open ? (
                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                        </div>

                        {/* MOBILE MENU */}
                        <Disclosure.Panel className="lg:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                <Link
                                    href="/"
                                    className="block px-4 py-2 rounded-md text-lg font-medium text-black hover:bg-gray-100"
                                >
                                    Home
                                </Link>
                                <span className="block px-4 py-2 text-lg font-medium text-gray-500 cursor-default">
                                    Blog
                                </span>
                                <div className="px-4">
                                    <Contactusform />
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </div>
                </>
            )}
        </Disclosure>
    );
};

export default NewNavbar;