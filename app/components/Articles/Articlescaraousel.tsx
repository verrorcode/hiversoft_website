"use client";
import Slider from "react-slick";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface DataType {
  time: string;
  heading: string;
  heading2: string;
  date: string;
  imgSrc: string;
  name: string;
  path: string;
}

interface ArticlesCarouselProps {
  postData: DataType[];
}

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

const ArticlesCarousel = ({ postData }: ArticlesCarouselProps) => {
  return (
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
                priority={i === 0} // Prioritize the first image
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
  );
};

export default ArticlesCarousel;