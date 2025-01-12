"use client;";
import { useState } from "react";
import Image from "next/image";
import Contactusform from "../Navbar/Contactus"; // Import Contactusform component

const services = [
    {
        heading: "Web App Development",
        description: "Custom web solutions tailored for your business needs.",
        duration: "2 - 4 Months (depending on complexity)",
        scope: "Fully Responsive Websites & Web Applications",
        features: [
            "Custom UI/UX Design",
            "Full-stack Development",
            "SEO Optimization",
            "3 Months Free Support"
        ],
        category: "enterprise"
    },
    {
        heading: "Mobile App Development",
        description: "Cross-platform mobile apps that drive user engagement.",
        duration: "3 - 6 Months (depending on scope)",
        scope: "iOS and Android Apps",
        features: [
            "Custom Mobile App Design",
            "API Integration",
            "Push Notifications",
            "Maintenance & Updates"
        ],
        category: "enterprise"
    },
    {
        heading: "AI & Machine Learning Solutions",
        description: "Data-driven AI models to improve your business intelligence.",
        duration: "Depends on the project",
        scope: "AI/ML Models & AI Agents",
        features: [
            "Predictive Analytics",
            "Custom AI Agents & Assistants",
            "Data Preprocessing",
            "Deployment & Optimization"
        ],
        category: "enterprise"
    },
    {
        heading: "Cloud Infrastructure Management",
        description: "Fully managed cloud services with 24/7 monitoring.",
        duration: "Ongoing Support",
        scope: "Cloud Hosting & DevOps",
        features: [
            "Cloud Setup & Migration",
            "Server Management",
            "CI/CD Pipelines",
            "Cost Optimization"
        ],
        category: "monthly"
    },
    {
        heading: "UI/UX Design Services",
        description: "Intuitive and user-friendly designs to enhance user experience.",
        duration: "1 - 2 Months",
        scope: "Website & Mobile App Designs",
        features: [
            "Custom Wireframes & Mockups",
            "Interactive Prototypes",
            "User Testing",
            "Revisions & Final Delivery"
        ],
        category: "monthly"
    }
];

const categories = ["enterprise", "monthly"];

const Manage = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const handlePrevious = () => {
        setSelectedCategoryIndex((prevIndex) =>
            prevIndex === 0 ? categories.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setSelectedCategoryIndex((prevIndex) =>
            prevIndex === categories.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleOpenContactForm = () => {
        setIsContactModalOpen(true);
    };

    const handleCloseContactForm = () => {
        setIsContactModalOpen(false);
    };

    const selectedCategory = categories[selectedCategoryIndex];
    const filteredData = services.filter((service) => service.category === selectedCategory);

    return (
        <div id="services-section">
            <div className="relative mx-auto max-w-7xl sm:py-20 lg:px-8 my-16">
                <h3 className="text-center text-4xl sm:text-6xl font-black">Explore Our Comprehensive IT Services</h3>

                <div className="md:flex md:justify-around mt-20">
                    <div className="flex gap-5 justify-center md:justify-start">
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className="text-lg font-semibold">Custom Solutions</h4>
                    </div>
                    <div className="flex gap-5 justify-center md:justify-start">
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className="text-lg font-semibold">Expert Team</h4>
                    </div>
                    <div className="flex gap-5 justify-center md:justify-start">
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className="text-lg font-semibold">24/7 Client Support</h4>
                    </div>
                </div>

                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-darkpurple text-white rounded-full p-4 hover:bg-opacity-80"
                    onClick={handlePrevious}
                >
                    <span className="text-2xl font-bold">←</span>
                </button>
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-darkpurple text-white rounded-full p-4 hover:bg-opacity-80"
                    onClick={handleNext}
                >
                    <span className="text-2xl font-bold">→</span>
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14 manage px-4">
                    {filteredData.map((items, i) => (
                        <div className="manageTabs flex flex-col justify-between text-center p-10 shadow-lg rounded-xl h-full" key={i}>
                            <div>
                                <h4 className="text-2xl font-bold mb-3">{items.heading}</h4>
                                <p className="text-base font-medium text-darkgrey mb-6">{items.description}</p>
                                <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
                                <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">Scope: {items.scope}</h3>
                                <h3 className="text-sm font-medium text-darkgrey mb-3">Duration: {items.duration}</h3>
                                <div className="text-sm font-medium text-darkgrey mb-3">
                                    <h3 className="font-semibold mb-2">Features:</h3>
                                    <ul className="list-disc list-inside">
                                        {items.features.map((feature, index) => (
                                            <li key={index} className="text-darkgrey">
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-6">
                                <button
                                    className="text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-4 px-12"
                                    onClick={handleOpenContactForm}
                                >
                                    Request a Consultation
                                </button>
                            </div>
                        </div>
                    ))}
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

export default Manage;
