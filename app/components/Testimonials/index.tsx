"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA
interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "David Carter",
        profession: 'Product Manager, Admirian',
        comment: 'Hiversoft streamlined our development with their backend & frontend expertise. The MVP they delivered helped us secure key clients, all while staying on schedule.',
        imgSrc: 'https://static.hiversoft.com/user1.svg',
    },
    {
        name: "Sophia Bennett",
        profession: 'Data Analyst, InsightWave Analytics',
        comment: "Hiversoft’s data dashboards and BI tools gave us actionable insights, and their UI/UX design made our analytics tools intuitive and efficient.",
        imgSrc: 'https://static.hiversoft.com/user2_4.png',
    },
    {
        name: "Michael Reynolds",
        profession: 'Innovation Director, ST Ventures',
        comment: "Hiversoft team's custom software and AI workflows reduced inefficiencies and sped up delivery. Their technical expertise stood out.",
        imgSrc: 'https://static.hiversoft.com/user3_4.png',
    },
    {
        name: "Maria Johnson",
        profession: 'Project Lead, BlueCore Systems',
        comment: "Hiversoft’s scalable software and insightful dashboards helped us make data-driven decisions faster. Their support is exceptional",
        imgSrc: 'https://static.hiversoft.com/user1_3.png',
    },
    // {
    //     name: "Laura Thompson",
    //     profession: 'Software Engineer, Typeform',
    //     comment: 'Hiversoft’s expertise in digital transformation has modernized our platform. Their team’s dedication and knowledge are unmatched.',
    //     imgSrc: 'https://static.hiversoft.com/user2.svg',
    // },
    {
        name: "Alex Monroe",
        profession: 'Technology Manager, Kontra AI',
        comment: "Hiversoft provided us with custom workflows and sleek UI/UX. Their solutions are tailored and were highly effective in giving us a competitive edge",
        imgSrc: 'https://static.hiversoft.com/user3.svg',
    },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
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
            <div className="bg-testimonial pt-0 pb-16 " id="testimonial-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>
                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">Hear from our clients.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">Hear from our clients.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">Hear from our clients.</h3>
                    </div>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="relative">
                                <div className='bg-white test-sha m-3 p-10 my-20 rounded-3xl'>
                                    <Image src={items.imgSrc} alt={`Image of ${items.name}`} width={71} height={71} className="inline-block m-auto absolute test-pos" />
                                    <h4 className='text-base font-medium text-testColor my-4'>{items.comment}</h4>
                                    <hr style={{ color: "lightgrey" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-base font-medium pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-xs font-medium pb-2 opacity-50'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                        </div>
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
