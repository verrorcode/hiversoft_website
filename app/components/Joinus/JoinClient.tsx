"use client";

import { useState } from "react";
import Contactusform from "../Navbar/Contactus"; // Client-side component

const JoinClient = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    return (
        <section className="bg-joinus my-32">
            <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">
                <div className="text-center">
                    <h3 className="text-blue text-lg font-normal tracking-widest">CONNECT WITH HIVERSOFT</h3>
                    <h2 className="text-4xl sm:text-6xl font-bold my-6 leading-10">
                        Elevate Your Business with <br /> Smart AI Solutions.
                    </h2>
                    <p className="text-lightblack text-base font-normal max-w-3xl mx-auto leading-relaxed">
                        Partner with Hiversoft to harness cutting-edge technology and AI-driven insights. Unlock new growth opportunities and drive innovation across your business.
                    </p>
                </div>

                <div className="mx-auto max-w-4xl pt-10 flex justify-center">
                    <button
                        type="button"
                        className="joinButton w-auto min-w-[160px] px-8 py-4 text-base text-white font-semibold text-center rounded-full bg-blue hover:bg-btnblue"
                        onClick={() => setIsContactModalOpen(true)}
                        aria-label="Open Contact Form"
                    >
                        Talk to Us!
                    </button>
                </div>

                {/* Contact Us Modal (CSR) */}
                {isContactModalOpen && (
                    <Contactusform 
                        showTriggerButton={false}
                        isControlled={true}
                        externalIsOpen={isContactModalOpen}
                        onExternalClose={() => setIsContactModalOpen(false)}
                    />
                )}
            </div>
        </section>
    );
};

export default JoinClient;
