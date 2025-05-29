import React, { useState } from "react";
import Link from "next/link";
import Contactusform from "./Contactus";
import { XMarkIcon } from '@heroicons/react/24/outline';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'About Us', href: '#aboutus-section', current: true },
    { name: 'Services', href: '#services-section', current: false },
    { name: 'FAQ', href: '#faq-section', current: false },
    { name: 'Blog', href: '#blog-section', current: false },
    { name: 'Testimonial', href: '#testimonial-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {
    
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    return (
        <div className="rounded-md max-w-sm w-full mx-auto">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                                    'block  py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                        
                        <div className="mt-8">
                            <button 
                                onClick={() => setIsContactModalOpen(true)}
                                className="bg-[#000B33] w-full text-white text-lg font-medium 
                                py-4 px-6 rounded-md shadow-sm hover:bg-[#001166] 
                                transition-colors duration-200 ease-in-out
                                min-h-[56px] flex items-center justify-center"
                            >
                                Contact Us
                            </button>
                        </div>
                        {isContactModalOpen && (
                            <Contactusform 
                                showTriggerButton={false}
                                isControlled={true}
                                externalIsOpen={isContactModalOpen}
                                onExternalClose={() => setIsContactModalOpen(false)}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
