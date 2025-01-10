"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    vertical: string;
    description: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        vertical: 'Healthcare AI',
        description: 'Empowering healthcare providers with intelligent solutions for patient care, diagnostics, and automation.',
        imgSrc: '/images/wework/health.jpg',
    },
    {
        vertical: 'Finance & FinTech',
        description: 'Delivering AI-driven financial insights, fraud detection, and secure payment solutions for modern finance.',
        imgSrc: '/images/wework/fin.jpg',
    },
    {
        vertical: 'Retail & E-commerce',
        description: 'Boosting customer engagement and sales with personalized recommendations and seamless user experiences.',
        imgSrc: '/images/wework/retail.jpg',
    },
    {
        vertical: 'Manufacturing & IoT',
        description: 'Optimizing production workflows and predictive maintenance with IoT-integrated AI solutions.',
        imgSrc: '/images/wework/manufacturing.jpg',
    },
    {
        vertical: 'Education & EdTech',
        description: 'Revolutionizing education with adaptive learning platforms, smart grading systems, and analytics.',
        imgSrc: '/images/wework/edu.jpg',
    },
    {
        vertical: 'Real Estate & Smart Cities',
        description: 'Transforming real estate and urban living with data-driven insights and smart city solutions.',
        imgSrc: '/images/wework/realestate.jpg',
    },
]

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
            speed: 4000,
            autoplaySpeed: 4000,
            cssEase: "linear",
            pauseOnHover: false,
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
            <div className="bg-wework py-32">
                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>
                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">Industries We Innovate.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">Industries We Innovate.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">Industries We Innovate.</h3>
                    </div>
                </div>

                <Slider {...settings}>
                    {postData.map((items, i) => (
                        <div key={i}>
                            <div className='bg-white m-3 py-10 px-6 my-10 text-center shadow-xl rounded-3xl'>
                                <Image src={items.imgSrc} alt={items.vertical} width={550} height={350} className="inline-block m-auto rounded-3xl" />
                                <h4 className='text-3xl font-bold pt-8'>{items.vertical}</h4>
                                <p className='text-lg font-normal pt-4 opacity-70'>{items.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}
