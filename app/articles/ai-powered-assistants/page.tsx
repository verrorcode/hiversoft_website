"use client";
import Image from "next/image";
import React, { useState } from "react";
import Contactusform from "@/app/components/Navbar/Contactus"; // Assuming Contactusform component path

const AIPoweredAssistantsBlog = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility

    const handleOpenContactForm = () => {
        setIsModalOpen(true); // Open modal
    };

    const handleCloseContactForm = () => {
        setIsModalOpen(false); // Close modal
    };

    return (
        <div className="min-h-screen flex flex-col pt-20 pb-20">
            <div className="flex-grow">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 bg-white rounded-3xl pb-32">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl sm:text-6xl font-extrabold text-darkblue leading-tight">
                            AI-Powered Assistants: Revolutionizing Customer Engagement
                        </h1>
                        <p className="mt-6 text-xl text-gray-600">
                            Explore how AI-powered assistants are reshaping modern business operations by enhancing customer service, streamlining workflows, and delivering exceptional user experiences.
                        </p>
                    </div>

                   {/* AI assistant-related illustration */}
                    <div className="my-8 flex justify-center">
                        <div className="w-full max-w-3xl">
                            <Image
                                src="https://static.hiversoft.com/ai1.jpg" // Update this with the correct path to your image
                                alt="AI Assistant Illustration"
                                width={800} // Adjust width as needed
                                height={300} // Adjust height as needed
                                className="rounded-lg shadow-md"
                                unoptimized={true}
                            />
                        </div>
                    </div>

                    {/* Introduction */}
                    <div className="my-12">
                        <h2 className="text-3xl font-semibold mt-12 mb-6">Introduction</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            The rapid advancements in artificial intelligence (AI) have paved the way for smarter business solutions, with AI-powered assistants leading the charge in transforming customer engagement.
                            These intelligent virtual assistants can perform tasks ranging from answering customer queries to automating repetitive workflows. This not only improves operational efficiency but also
                            helps businesses offer more personalized and responsive customer support.
                        </p>
                    </div>

                    {/* Key Benefits Section */}
                    <div className="my-12">
                        <h2 className="text-3xl font-semibold mt-12 mb-6">Why Businesses Are Turning to AI Assistants</h2>
                        <ul className="list-disc list-inside text-lg text-gray-600">
                            <li className="mb-4">
                                <span className="font-semibold text-darkblue">24/7 Availability:</span> Unlike human agents, AI assistants are available round-the-clock, ensuring that customers always have access to support.
                            </li>
                            <li className="mb-4">
                                <span className="font-semibold text-darkblue">Cost-Effective Scaling:</span> Businesses can handle a large volume of interactions without needing to hire and train additional staff.
                            </li>
                            <li className="mb-4">
                                <span className="font-semibold text-darkblue">Personalized Customer Experiences:</span> AI assistants can be tailored to provide personalized recommendations and responses based on customer data and preferences.
                            </li>
                            <li className="mb-4">
                                <span className="font-semibold text-darkblue">Improved Productivity:</span> By handling routine inquiries and automating workflows, AI-powered assistants free up human agents to focus on more complex tasks.
                            </li>
                        </ul>
                    </div>

                    {/* AI assistant-related illustration */}
                    <div className="my-8 flex justify-center">
                        <div className="w-full max-w-3xl">
                            <Image
                                src="https://static.hiversoft.com/ai2.jpg" // Update this with the correct path to your image
                                alt="AI Assistant Illustration"
                                width={800} // Adjust width as needed
                                height={300} // Adjust height as needed
                                className="rounded-lg shadow-md"
                                unoptimized={true}
                                
                            />
                        </div>
                    </div>

                    {/* Real-World Use Cases Section */}
                    <div className="my-12">
                        <h2 className="text-3xl font-semibold mt-12 mb-6">Real-World Use Cases</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            AI-powered assistants are being implemented across a variety of industries. Here are some notable use cases:
                        </p>
                        <ul className="list-disc list-inside text-lg text-gray-600 mt-4">
                            <li className="mb-4">
                                <span className="font-semibold text-darkblue">E-commerce Support:</span> Online stores use chatbots to provide instant responses to product inquiries, offer personalized discounts, and assist with order tracking.
                            </li>
                            <li className="mb-4">
                                <span className="font-semibold text-darkblue">Healthcare:</span> AI assistants help schedule appointments, provide medication reminders, and answer general health-related questions.
                            </li>
                            <li className="mb-4">
                                <span className="font-semibold text-darkblue">Financial Services:</span> Banks and fintech companies leverage AI assistants for account balance inquiries, fraud alerts, and financial advice.
                            </li>
                            <li className="mb-4">
                                <span className="font-semibold text-darkblue">Education:</span> Educational institutions use virtual assistants to assist students with administrative tasks, course queries, and personalized study support.
                            </li>
                        </ul>
                    </div>

                    {/* Challenges Section */}
                    <div className="my-12">
                        <h2 className="text-3xl font-semibold mt-12 mb-6">Challenges and Considerations</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            While AI-powered assistants offer numerous benefits, they also present certain challenges. Data privacy and security are critical concerns when implementing AI solutions. Additionally, businesses
                            must invest in training models to ensure that the AI assistant can handle complex queries and maintain a consistent brand voice. However, with proper planning and regular updates, these
                            challenges can be mitigated.
                        </p>
                    </div>

                    {/* Conclusion Section */}
                    <div className="my-12">
                        <h2 className="text-3xl font-semibold mt-12 mb-6">Conclusion</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            AI-powered assistants have redefined how businesses interact with their customers by delivering smarter, faster, and personalized services. As this technology continues to evolve, it offers
                            exciting opportunities for businesses across industries to elevate their customer support, streamline operations, and enhance user experiences.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mt-4">
                            Whether you are looking to implement an AI-powered assistant or explore its potential for your business, partnering with the right technology experts can make all the difference.
                        </p>
                        <div className="text-center mt-12">
                            <button
                                className="px-8 py-4 bg-blue text-white rounded-full text-lg hover:bg-darkblue"
                                onClick={handleOpenContactForm} // Open Contact Us modal
                            >
                                Learn More or Schedule a Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Us Modal */}
            <Contactusform 
                    showTriggerButton={false}
                    isControlled={true}
                    externalIsOpen={isModalOpen}
                    onExternalClose={handleCloseContactForm}
                />
        </div>
    );
};

export default AIPoweredAssistantsBlog;
