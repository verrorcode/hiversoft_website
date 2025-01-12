"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

interface DataType {
    heading: string;
    description: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        heading: 'Admirian: Revolutionizing Influencer Marketing.',
        description: 'A powerful platform that connects brands with influencers, enabling data-driven campaigns and performance tracking.',
        imgSrc: 'https://static.hiversoft.com/Analytics.png',
    },
    {
        heading: 'Kontra AI: Your AI-Powered Business Assistant.',
        description: 'AI agents and virtual assistants that automate customer engagement, scheduling, and intelligent task management.',
        imgSrc: 'https://static.hiversoft.com/Home-Page.svg',
    },
    {
        heading: 'Admirian: Revolutionizing Influencer Marketing.',
        description: 'An advanced analytics dashboard that offers insights into campaign performance and audience engagement.',
        imgSrc: 'https://static.hiversoft.com/Analytics.png',
    },
    {
        heading: 'Kontra AI: Your AI-Powered Business Assistant.',
        description: 'Seamlessly integrates with existing workflows to automate repetitive tasks and enhance productivity.',
        imgSrc: 'https://static.hiversoft.com/Home-Page.svg',
    }
];

// CAROUSEL SETTINGS
function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", background: "rgba(255, 255, 255, 0.3)", padding: "28px", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", background: "rgba(255, 255, 255, 0.3)", padding: "28px", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            speed: 2000,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className="bg-bgblue py-20 mt-40 marginFeature bg-featured" id = 'featured'>
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-12'>

                    <div className="text-center pt-48 pb-10 md:pt-96">
                        <h3 className="text-4xl sm:text-6xl font-bold text-white my-2">Our Featured Platforms.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-white text-opacity-50 lg:mr-48 my-2">Our Featured Platforms.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-white text-opacity-25 lg:-mr-32 my-2">Our Featured Platforms.</h3>
                    </div>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="flex justify-center px-5">
                                <div className='bg-transparent m-3 pb-12 my-10 rounded-3xl flex flex-col items-center'>
                                    <a
                                        href={items.heading.includes('Admirian') ? 'https://admirian.com' : 'https://kontraai.com'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full"
                                    >
                                        <div className="relative rounded-2xl overflow-hidden mx-auto" style={{ width: '100%', maxWidth: '600px', height: '550px' }}>
                                            <Image
                                                src={items.imgSrc}
                                                alt={items.heading}
                                                layout="fill"
                                                objectFit="cover"
                                                objectPosition="top"
                                                className="rounded-2xl"
                                            />
                                        </div>
                                    </a>
                                    <div className="w-full px-6 mt-6 text-center">
                                        <h4
                                            className='sm:text-4xl font-bold'
                                            style={
                                                items.heading.includes('Admirian')
                                                    ? { color: '#F97316' }
                                                    : {
                                                          background: 'linear-gradient(to right, #8B5CF6, #EC4899, #EF4444)',
                                                          WebkitBackgroundClip: 'text',
                                                          color: 'transparent',
                                                      }
                                            }
                                        >
                                            {items.heading}
                                        </h4>
                                        <p className='text-lg text-gray-300 mt-4 text-white'>{items.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}
