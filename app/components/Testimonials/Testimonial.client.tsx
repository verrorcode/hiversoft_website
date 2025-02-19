"use client";

import Slider from "react-slick";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// Carousel settings
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
            settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true, dots: false },
        },
        {
            breakpoint: 800,
            settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: false },
        },
        {
            breakpoint: 450,
            settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: false },
        },
    ],
};

// TypeScript interface for props
interface TestimonialClientProps {
    postData: {
        name: string;
        profession: string;
        comment: string;
        imgSrc: string;
    }[];
}

const TestimonialClient: React.FC<TestimonialClientProps> = ({ postData }) => {
    return (
        <div className="bg-testimonial pt-0 pb-16" id="testimonial-section">
            <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-6xl font-bold text-black my-3">Hear from our clients.</h1>
                    <h2 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">Hear from our clients.</h2>
                    <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">Hear from our clients.</h3>
                </div>

                <Slider {...settings}>
                    {postData.map((item, i) => (
                        <div key={i} className="relative">
                            <div className="bg-white test-sha m-3 p-10 my-20 rounded-3xl">
                                <Image
                                    src={item.imgSrc}
                                    alt={`Image of ${item.name}`}
                                    width={71}
                                    height={71}
                                    className="inline-block m-auto absolute test-pos"
                                />
                                <p className="text-base font-medium text-testColor my-4">{item.comment}</p>
                                <hr style={{ color: "lightgrey" }} />
                                <div className="flex justify-between">
                                    <div>
                                        <h4 className="text-base font-medium pt-4 pb-2">{item.name}</h4>
                                        <h5 className="text-xs font-medium pb-2 opacity-50">{item.profession}</h5>
                                    </div>
                                    <div className="flex">
                                        {[...Array(5)].map((_, index) => (
                                            <StarIcon key={index} width={20} className="star" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialClient;
