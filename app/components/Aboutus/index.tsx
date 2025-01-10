import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid';

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
        paragraph: 'At Hiversoft, we are passionate about delivering innovative digital solutions that transform your business and help you scale globally.',
        link: 'Discover our story',
        href: '#aboutus-section',
        name: 'Aboutus'
    },
    {
        heading: "Our Expertise",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'With expertise in web development, mobile applications, and cloud solutions, we empower our clients with tailor-made software solutions.',
        link: 'Explore our services',
        href: '#ourteam-section',
        name: 'Ourteam'
    },
    {
        heading: "Our Projects",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'From startups to enterprises, Hiversoft has collaborated with clients worldwide, delivering impactful projects that drive growth and efficiency.',
        link: 'View our portfolio',
        href: '#featured-section',
        name: 'Featured'
    },
];

const AboutUs = () => {
    return (
        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-10 my-20 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="decorative-dots" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest'>ABOUT HIVERSOFT</h3>
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>Innovating for a digital tomorrow.</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-x-16 lg:gap-x-32'>
                    {AboutData.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-4xl font-semibold text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                            <Link href={item.href}  className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
