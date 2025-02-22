"use client";
import { useState } from "react";
import Contactusform from "../Navbar/Contactus"; // Import Contactusform component

const BeliefsContent = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false); // Modal visibility state

  const handleOpenContactForm = () => {
    setIsContactModalOpen(true); // Open modal
  };

  const handleCloseContactForm = () => {
    setIsContactModalOpen(false); // Close modal
  };

  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-10'>
        {/* COLUMN-1 - Beliefs */}
        <div className="bg-darkblue bg-beliefs pt-8 px-8 sm:px-16 pb-20 rounded-3xl flex flex-col justify-between min-h-[600px]">
          <div>
            <h2 className="text-sm lg:text-base font-normal text-white tracking-widest mb-3 text-center sm:text-start">OUR VALUES</h2>
            <h3 className="text-3xl sm:text-5xl font-bold text-white leading-snug mb-4 text-center sm:text-start max-w-lg">
              Integrity <span className="text-grey">and innovation drive everything we do.</span>
            </h3>
            <h5 className="text-offwhite text-sm lg:text-base pt-1 mb-4 text-center sm:text-start max-w-lg">
              At Hiversoft, we believe in honesty, collaboration, and delivering impactful solutions powered by creativity and cutting-edge technology.
            </h5>
          </div>
          <div className="text-center sm:text-start mt-auto">
            <button
              className="text-lg py-3 px-10 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue"
              onClick={handleOpenContactForm} // Open modal on "Get Started" click
              aria-label="Get Started with Hiversoft"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* COLUMN-2 - Build */}
        <div className="bg-[#f0fff0] pt-8 px-8 sm:px-16 pb-20 rounded-3xl flex flex-col justify-between min-h-[600px]">


          <div>
            <h2 className="text-sm lg:text-base font-normal text-blue tracking-widest mb-3 text-center sm:text-start">BUILD</h2>
            <h3 className="text-3xl sm:text-5xl font-bold text-black leading-snug mb-4 text-center sm:text-start max-w-lg">
              <span className="text-blue">Build</span> intelligent solutions that solve real-world challenges.
            </h3>
            <h5 className="bluish text-sm lg:text-base pt-1 mb-4 text-center sm:text-start max-w-lg">
              From web and mobile apps to advanced AI/ML platforms, our team at Hiversoft turns your ideas into scalable, high-impact solutions that empower your growth.
            </h5>
          </div>
          <div className="text-center sm:text-start mt-auto">
            <button
              className="text-lg py-3 px-10 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue"
              onClick={handleOpenContactForm} // Open modal on "Learn More" click
              aria-label="Learn More about Hiversoft"
            >
              Learn More
            </button>
          </div>
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

export default BeliefsContent;