"use client"
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
        profession: 'Product Manager, Basecamp',
        comment: 'Hiversoft transformed our operations with their intelligent automation and IT solutions. Our productivity has increased dramatically.',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Sophia Bennett",
        profession: 'Data Analyst, Buffer',
        comment: 'Partnering with Hiversoft was a game-changer. Their expertise in custom software and AI made our workflow more efficient and scalable.',
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Michael Reynolds",
        profession: 'AI Specialist, FreshBooks',
        comment: 'The Hiversoft team exceeded our expectations. Their machine learning insights empowered us to deliver smarter and faster solutions to our clients.',
        imgSrc: '/images/testimonial/user3.svg',
    },
    {
        name: "David Johnson",
        profession: 'Project Lead, Mailchimp',
        comment: 'We’ve seen remarkable improvements in data analysis and customer insights, thanks to Hiversoft’s IT solutions. Their support has been outstanding.',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Laura Thompson",
        profession: 'Software Engineer, Typeform',
        comment: 'Hiversoft’s expertise in digital transformation has modernized our platform. Their team’s dedication and knowledge are unmatched.',
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "James Lee",
        profession: 'Product Lead, Zapier',
        comment: 'Hiversoft provided an exceptional level of service and expertise. Their custom AI models and IT solutions have helped us stay ahead of the curve.',
        imgSrc: '/images/testimonial/user3.svg',
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
