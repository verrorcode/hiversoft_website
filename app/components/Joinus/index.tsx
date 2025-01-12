"use client";
import { useState } from "react";
import Contactusform from "../Navbar/Contactus"; // Import the Contact Us form modal

const Join = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false); // State to manage modal visibility

    const handleOpenContactForm = () => {
        setIsContactModalOpen(true); // Open modal
    };

    const handleCloseContactForm = () => {
        setIsContactModalOpen(false); // Close modal
    };

    return (
        <div className="bg-joinus my-32">
            <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">

                <div className="text-center">
                    <h3 className="text-blue text-lg font-normal tracking-widest">CONNECT WITH HIVERSOFT</h3>
                    <h2 className="text-4xl sm:text-6xl font-bold my-6 leading-10"> Elevate Your Business with <br /> Smart AI Solutions.</h2>
                    <p className="text-lightblack text-base font-normal max-w-3xl mx-auto leading-relaxed ">
                        Partner with Hiversoft to harness cutting-edge technology and AI-driven insights. Unlock new growth opportunities and drive innovation across your business.
                    </p>
                </div>

                <div className="mx-auto max-w-4xl pt-10 flex justify-center">
                    <button
                        type="button"
                        className="joinButton w-auto min-w-[160px] px-8 py-4 text-base text-white font-semibold text-center rounded-full bg-blue hover:bg-btnblue"
                        onClick={handleOpenContactForm} // Open Contact Us modal on click
                    >
                        Talk to Us!
                    </button>
                </div>

                {/* Contact Us Modal */}
                <Contactusform 
                    showTriggerButton={false}
                    isControlled={true}
                    externalIsOpen={isContactModalOpen}
                    onExternalClose={handleCloseContactForm}
                />
            </div>
        </div>
    );
};

export default Join;
