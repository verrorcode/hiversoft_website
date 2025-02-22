import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

interface DataType {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
    name: string;
    href: string;
}

const AboutData: DataType[] = [
    {
        heading: "Who We Are",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: "At Hiversoft, we are passionate about delivering innovative digital solutions that transform your business and help you scale globally.",
        link: "Discover our story",
        href: "#banner",
        name: "Aboutus",
    },
    {
        heading: "Our Expertise",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: "With expertise in web development, mobile applications, and cloud solutions, we empower our clients with tailor-made software solutions.",
        link: "Explore our services",
        href: "#services-section",
        name: "Services-section",
    },
    {
        heading: "Our Projects",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: "From startups to enterprises, Hiversoft has collaborated with clients worldwide, delivering impactful projects that drive growth and efficiency.",
        link: "View our portfolio",
        href: "#featured",
        name: "Featured",
    },
];

const AboutUs = () => {
    return (
        <>
            {/* SEO-Optimized Metadata */}
            <Head>
                <title>About Hiversoft - Innovating for a Digital Tomorrow</title>
                <meta name="description" content="Learn about Hiversoft, our expertise, and projects. We deliver innovative digital solutions to help businesses scale globally." />
                <meta name="keywords" content="Hiversoft, digital solutions, web development, cloud solutions, business transformation" />
                <meta property="og:title" content="About Hiversoft - Innovating for a Digital Tomorrow" />
                <meta property="og:description" content="Discover Hiversoft's journey, expertise, and impactful projects that drive business growth and efficiency." />
                <meta property="og:image" content="/images/aboutus/imgOne.svg" />
                <meta property="og:type" content="website" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "AboutPage",
                            "name": "About Hiversoft",
                            "description": "Learn about Hiversoft, our expertise, and projects.",
                            "publisher": {
                                "@type": "Organization",
                                "name": "Hiversoft",
                                "url": "https://hiversoft.com",
                            },
                        }),
                    }}
                />
            </Head>

            {/* About Us Section */}
            <section id="aboutus-section" aria-labelledby="aboutus-heading">
                <div className="mx-auto max-w-7xl px-4 py-10 my-20 lg:px-10 bg-lightgrey rounded-3xl relative">
                    {/* Decorative Image */}
                    <Image 
                        src="/images/aboutus/dots.svg" 
                        width={100} 
                        height={100} 
                        alt="Decorative dots for design" 
                        priority 
                        className="absolute bottom-1 -left-20" 
                    />

                    {/* Section Heading */}
                    <header className="text-center">
                        <h3 id="aboutus-heading" className="text-blue text-lg tracking-widest">
                            ABOUT HIVERSOFT
                        </h3>
                        <h4 className="text-4xl lg:text-6xl font-bold">
                            Innovating for a digital tomorrow.
                        </h4>
                    </header>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-x-16 lg:gap-x-32">
                        {AboutData.map((item, i) => (
                            <article key={i} className="hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group">
                                <h4 className="text-4xl font-semibold text-black mb-5 group-hover:text-white">
                                    {item.heading}
                                </h4>

                                {/* Image with optimized alt text */}
                                <Image 
                                    src={item.imgSrc} 
                                    alt={`${item.heading} illustration`} 
                                    width={100} 
                                    height={100} 
                                    className="mb-5" 
                                />

                                <p className="text-lg font-normal text-black group-hover:text-offwhite mb-5">
                                    {item.paragraph}
                                </p>

                                {/* Link with aria-label for accessibility */}
                                <Link 
                                    href={item.href}  
                                    aria-label={`Learn more about ${item.heading}`} 
                                    className="text-lg font-semibold group-hover:text-white text-blue hover-underline flex items-center gap-2"
                                >
                                    {item.link}
                                    <ChevronRightIcon width={20} height={20} />
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
