"use client";
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Contactusform from './Contactus';
import Image from "next/image";

const NewNavbar = () => {
    return (
        <nav className="sticky top-0 w-full z-[999999] bg-white shadow-md">
            <Disclosure as="div">
                {({ open }) => (
                    <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
                        <div className="relative flex h-12 sm:h-20 items-center justify-between">
                            <div className="flex flex-1 items-center sm:justify-between">
                                
                                {/* LOGO */}
                                <h1 className="text-xl font-bold">
                                    <Link href="/" className="flex items-center">
                                        <Image 
                                            src="/images/logo/logo2.png" 
                                            alt="Hiversoft Logo"
                                            width={200} 
                                            height={100} 
                                            priority 
                                        />
                                    </Link>
                                </h1>

                                {/* DESKTOP LINKS */}
                                <div className="hidden lg:flex items-center  flex-1 justify-center">
                                    <div className="flex space-x-8">
                                        <Link href="/" className="navlinks hover:text-black px-3 py-4  rounded-md text-lg font-normal">
                                            Home
                                        </Link>
                                        <Link href="/#blog-section" className="navlinks hover:text-black px-3 py-4  rounded-md text-lg font-normal">
                                            Blog
                                        </Link>
                                    </div>
                                </div>

                                {/* DESKTOP CONTACT US */}
                                <div className="hidden lg:block ml-2">
                                    <Contactusform />
                                </div>
                            </div>

                            {/* MOBILE MENU BUTTON */}
                            <Disclosure.Button 
                                className="lg:hidden inline-flex items-center justify-center rounded-md p-2" 
                                aria-label="Toggle Navigation Menu"
                            >
                                {open ? (
                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                        </div>
                        
                        {/* Mobile menu panel */}
                        <Disclosure.Panel className="lg:hidden">
                            <div className="absolute top-full left-0 w-full bg-white shadow-lg">
                                <div className="space-y-1 px-2 pb-3 pt-2">
                                    <Link
                                        href="/"
                                        className="block px-4 py-2 rounded-md text-lg font-medium text-black hover:bg-gray-100"
                                    >
                                        Home
                                    </Link>
                                    <Link 
                                        href="/#blog-section"
                                        className="block px-4 py-2 text-lg font-medium text-gray-500 hover:bg-gray-100"
                                    >
                                        Blog
                                    </Link>
                                    <div className="px-4">
                                        <Contactusform />
                                    </div>
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </div>
                )}
            </Disclosure>
        </nav>
    );
};

export default NewNavbar;
