"use client";
import { useState } from "react";
import Image from "next/image";
import Contactusform from "../Navbar/Contactus"; // Import Contactusform component

const BannerContent = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false); // Modal state

  const handleOpenContactForm = () => {
    setIsContactModalOpen(true); // Open modal
  };

  const handleCloseContactForm = () => {
    setIsContactModalOpen(false); // Close modal
  };

  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-2 my-8'>
        {/* COLUMN-1 */}
        <div className="mx-auto sm:mx-0">
          <div className='py-3 text-center lg:text-start'>
            <button className='text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black'>
              INNOVATION AT HIVERSOFT
            </button>
          </div>
          <div className="py-3 text-center lg:text-start">
            <h1 className='text-5xl lg:text-7xl font-extrabold text-darkpurple leading-tight'>
              Empowering Digital <br /> Transformation for <br /> the Future.
            </h1>
          </div>
          <div className='mt-7 text-center lg:text-start pr-10'>
            <p className="text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed max-w-xl pr-4 lg:pr-10">
              At Hiversoft, we bring your vision to life by crafting cutting-edge software solutions that drive growth and innovation.
            </p>
            <button
              className='text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-darkblue'
              onClick={handleOpenContactForm} // Open Contact Us modal when "Learn More" is clicked
              aria-label="Learn More about Hiversoft"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* COLUMN-2 */}
        <div className='lg:-m-24 lg:pt-20 hidden lg:block'>
          <Image
            src="https://static.hiversoft.com/banner.svg"
            alt="Empowering Digital Transformation"
            width={800}
            height={642}
            priority // Prioritize this image for faster loading
          />
        </div>
      </div>

      {/* Contact Us Modal */}
      <Contactusform
        showTriggerButton={false}
        isControlled={true}
        externalIsOpen={isContactModalOpen}
        onExternalClose={handleCloseContactForm}
      />
    </>
  );
};

export default BannerContent;