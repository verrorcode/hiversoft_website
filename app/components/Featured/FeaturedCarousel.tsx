"use client";

import Slider from "react-slick";
import React from "react";
import Image from "next/image";

interface DataType {
    heading: string;
    description: string;
    imgSrc: string;
}

interface CarouselProps {
    postData: DataType[];
}

function SampleNextArrow(props: { className?: any; style?: any; onClick?: any }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", background: "rgba(255, 255, 255, 0.3)", padding: "28px", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className?: any; style?: any; onClick?: any }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", background: "rgba(255, 255, 255, 0.3)", padding: "28px", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}

const FeaturedCarousel: React.FC<CarouselProps> = ({ postData }) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        speed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 800,
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
        <Slider {...settings}>
            {postData.map((item, i) => (
                <div key={i} className="flex justify-center px-5">
                    <div className="bg-transparent m-3 pb-12 my-10 rounded-3xl flex flex-col items-center">
                        <a
                            href={item.heading.includes("Admirian") ? "https://admirian.com" : ""}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full"
                        >
                            <div className="relative rounded-2xl overflow-hidden mx-auto" style={{ width: "100%", maxWidth: "600px", height: "550px" }}>
                                <Image
                                    src={item.imgSrc}
                                    alt={item.heading}
                                    fill
                                    style={{ objectFit: "cover", objectPosition: "center" }}
                                    className="rounded-2xl"
                                    unoptimized={true}
                                />
                            </div>
                        </a>
                        <div className="w-full px-6 mt-6 text-center">
                            <h4
                                className="sm:text-4xl font-bold"
                                style={
                                    item.heading.includes("Admirian")
                                        ? { color: "#F97316" }
                                        : {
                                              background: "linear-gradient(to right, #8B5CF6, #EC4899, #EF4444)",
                                              WebkitBackgroundClip: "text",
                                              color: "transparent",
                                          }
                                }
                            >
                                {item.heading}
                            </h4>
                            <p className="text-lg text-gray-300 mt-4 text-white">{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default FeaturedCarousel;
