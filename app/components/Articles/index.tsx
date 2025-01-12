"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

// CAROUSEL DATA
interface DataType {
    time: string;
    heading: string;
    heading2: string;
    date: string;
    imgSrc: string;
    name: string;
    path: string;
}

const postData: DataType[] = [
    {
        time: "5 min",
        heading: "AI-Powered Assistants",
        heading2: "Revolutionizing Customer Engagement",
        name: "Published by Hiversoft",
        date: "January 1, 2025",
        imgSrc: "https://static.hiversoft.com/ai5.jpg",
        path: "/articles/ai-powered-assistants",
    },
    {
        time: "4 min",
        heading: "Predictive Analytics",
        heading2: "Driving Smarter Decision-Making",
        name: "Published by Hiversoft",
        date: "January 12, 2025",
        imgSrc: "https://static.hiversoft.com/ai8.jpg",
        path: "/articles/predictive-analytics",
    },
    {
        time: "6 min",
        heading: "AI & Cloud Integration",
        heading2: "Unlocking Scalability and Efficiency",
        name: "Published by Hiversoft",
        date: "December 3, 2024",
        imgSrc: "https://static.hiversoft.com/ai7.jpg",
        path: "/articles/ai-cloud-integration",
    },
];

// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },
                },
            ],
        };

        return (
            <div className="bg-lightgrey py-20" id="blog-section">
                <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
                    <div className="text-center mb-8">
                        <h3 className="text-blue text-lg font-normal tracking-widest">ARTICLES</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold">Our Latest Blogs</h3>
                    </div>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="h-full">
                                <div className="bg-white flex flex-col justify-between m-3 px-3 pt-3 pb-6 shadow-lg rounded-3xl h-full">
                                    <div>
                                        <Image
                                            src={items.imgSrc}
                                            alt={items.heading}
                                            width={389}
                                            height={262}
                                            className="rounded-lg w-full h-48 object-cover"
                                        />

                                        <Link href={items.path}>
                                            <h3 className="absolute bg-blue text-white hover:bg-black hover:shadow-xl py-2 px-4 rounded-full article-img">
                                                {items.time} read
                                            </h3>
                                        </Link>
                                        <Link href={items.path} className="block mt-6">
                                            <h4 className="text-2xl font-bold text-black">{items.heading}</h4>
                                            <h4 className="text-xl font-semibold pt-1 text-black">{items.heading2}</h4>
                                        </Link>
                                    </div>

                                    <div className="mt-4">
                                        <h3 className="text-base font-normal pb-1 opacity-75">{items.name}</h3>
                                        <h3 className="text-base font-normal opacity-75">{items.date}</h3>
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
