"use client";

import { Disclosure } from "@headlessui/react";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from "./Contactus";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: "About Us", href: "#aboutus-section", current: false },
    { name: "Services", href: "#services-section", current: false },
    { name: "FAQ", href: "#faq-section", current: false },
    { name: "Blog", href: "#blog-section", current: false },
    { name: "Testimonial", href: "#testimonial-section", current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="navbar fixed top-[30px] left-0 right-0 bg-white z-50">
            <nav className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8" aria-label="Main Navigation">
                <div className="relative flex h-12 sm:h-20 items-center justify-between">
                    
                    {/* LOGO */}
                    <div className="flex items-center">
                        <Link href="/" aria-label="Go to Home">
                            <Image
                                src="/images/logo/logo2.png" // Ensure the correct path
                                alt="Hiversoft - AI and Automation Solutions"
                                width={200}
                                height={100}
                                priority // Use only if the image is above the fold
                            />
                        </Link>
                    </div>

                    {/* DESKTOP NAVIGATION */}
                    <ul className="hidden lg:flex space-x-4">
                        {navigation.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href} // ✅ Using <a> for in-page SEO
                                    className={classNames(
                                        item.current ? "bg-gray-900" : "navlinks hover:text-black",
                                        "px-3 py-4 rounded-md text-lg font-normal"
                                    )}
                                    aria-label={`Navigate to ${item.name}`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* CONTACT US BUTTON */}
                    <Contactusform />

                    {/* MOBILE DRAWER ICON */}
                    <button
                        className="block lg:hidden"
                        onClick={() => setIsOpen(true)}
                        aria-label="Open Mobile Menu"
                    >
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* MOBILE DRAWER */}
                    <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                        <Drawerdata />
                    </Drawer>
                </div>
            </nav>

            {/* Structured Data for SEO */}
            <script type="application/ld+json" suppressHydrationWarning>
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Hiversoft",
                    "url": "https://yourwebsite.com",
                    "logo": "https://yourwebsite.com/images/logo/logo2.png",
                    "sameAs": [
                        "https://facebook.com/yourpage",
                        "https://twitter.com/yourprofile",
                        "https://linkedin.com/company/yourcompany"
                    ],
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+1234567890",
                        "contactType": "customer service"
                    }
                })}
            </script>
        </header>
    );
};

export default Navbar;
