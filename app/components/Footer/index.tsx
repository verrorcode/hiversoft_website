"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductType {
    id: number;
    section: string;
    link: { name: string; href: string }[];
}

const products: ProductType[] = [
    {
        id: 1,
        section: "Menu",
        link: [
            { name: 'Our Services', href: '#services-section' },
            { name: 'Featured Work', href: '#featured' },
            { name: 'Testimonials', href: '#testimonial-section' },
            { name: 'FAQ', href: '#faq-section' },
            { name: 'Blogs', href: '#blog-section' }
        ]
    },
    {
        id: 2,
        section: "Quick Links",
        link: [
            { name: 'Contact Us', href: '#contact-section' },
            { name: 'Careers', href: '#careers-section' },
            { name: 'Case Studies', href: '#case-studies-section' },
            { name: 'Partners', href: '#partners-section' },
        ]
    }
];

const Footer = () => {
    return (
        <div className="bg-black -mt-40" id="first-section">
            <div className="mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COMPANY INFO */}
                    <div className="col-span-4">
                        <h3 className="text-white text-4xl font-semibold leading-9 mb-4 lg:mb-20">Hiversoft</h3>
                        <p className="text-gray-400 text-lg mb-6">
                            Empowering businesses with AI-driven digital solutions that foster growth and innovation.
                        </p>
                        <div className="flex gap-4">
                            <div className="footer-icons">
                                <Link href="https://facebook.com" target="_blank">
                                    <Image src={'https://static.hiversoft.com/vec.svg'} alt="facebook" width={15} height={20} />
                                </Link>
                            </div>
                            <div className="footer-icons">
                                <Link href="https://twitter.com" target="_blank">
                                    <Image src={'https://static.hiversoft.com/twitter.svg'} alt="twitter" width={20} height={20} />
                                </Link>
                            </div>
                            <div className="footer-icons">
                                <Link href="https://instagram.com" target="_blank">
                                    <Image src={'https://static.hiversoft.com/instagram.svg'} alt="instagram" width={20} height={20} />
                                </Link>
                            </div>
                            {/* <div className="footer-icons">
                                <Link href="https://linkedin.com" target="_blank">
                                    <Image src={'https://static.hiversoft.com/linkedin.svg'} alt="linkedin" width={20} height={20} />
                                </Link>
                            </div> */}
                        </div>
                    </div>

                    {/* MENU AND QUICK LINKS */}
                    {products.map((product) => (
                        <div key={product.id} className="group relative col-span-2 pl-24">
                            <p className="text-white text-xl font-extrabold mb-9">{product.section}</p>
                            <ul>
                                {product.link.map((link, index) => (
                                    <li key={index} className="mb-5">
                                        <a
                                            href={link.href}
                                            className="text-white text-lg font-normal mb-6 space-links cursor-pointer hover:text-gray-400 transition"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* CONTACT INFO */}
                    <div className="col-span-4 pl-24">
                        <p className="text-white text-xl font-extrabold mb-9">Contact</p>
                        <p className="text-white text-lg mb-4">Email: support@hiversoft.com</p>
                        {/* <p className="text-white text-lg mb-4">Phone: +1 (123) 456-7890</p> */}
                        <p className="text-white text-lg mb-4">Address: 4064 Ella Street, San Francisco, CA</p>
                    </div>
                </div>
            </div>

            {/* COPYRIGHT AND LEGAL LINKS */}
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
                    <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
                        <div>
                            <h3 className="text-center md:text-start text-offwhite text-lg">© 2023 Hiversoft. All Rights Reserved.</h3>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <Link href="/">
                                <h3 className="text-offwhite pr-6 hover:text-gray-400 transition">Privacy Policy</h3>
                            </Link>
                            <Link href="/">
                                <h3 className="text-offwhite pl-6 border-solid border-l border-footer hover:text-gray-400 transition">Terms & Conditions</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
