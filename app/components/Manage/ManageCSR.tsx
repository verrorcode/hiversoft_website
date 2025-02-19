'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the contact form
const ContactUsForm = dynamic(() => import('../Navbar/Contactus'), {
    ssr: false,
    loading: () => <div className="animate-pulse bg-gray-200 h-10 w-32 rounded-full" />
})

interface ServiceCardProps {
    heading: string;
    description: string;
    duration: string;
    scope: string;
    features: string[];
    onContactRequest: () => void;
}

function ServiceCard({ heading, description, duration, scope, features, onContactRequest }: ServiceCardProps) {
    return (
        <div className="manageTabs flex flex-col justify-between text-center p-10 shadow-lg rounded-xl h-full transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div>
                <h3 className="text-2xl font-bold mb-3">{heading}</h3>
                <p className="text-base font-medium text-darkgrey mb-6">{description}</p>
                <hr className="w-1/2 mx-auto text-darkgrey" />
                <p className="text-sm font-medium text-darkgrey mb-3 mt-6">Scope: {scope}</p>
                <p className="text-sm font-medium text-darkgrey mb-3">Duration: {duration}</p>
                <div className="text-sm font-medium text-darkgrey mb-3">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="list-disc list-inside">
                        {features.map((feature, index) => (
                            <li key={index} className="text-darkgrey">{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mt-6">
                <button
                    onClick={onContactRequest}
                    className="text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-4 px-12 transition-colors duration-300"
                    aria-label={`Request consultation for ${heading}`}
                >
                    Request a Consultation
                </button>
            </div>
        </div>
    )
}

interface ServicesListProps {
    services: typeof import('./ServicesContent').services;
    categories: typeof import('./ServicesContent').categories;
}

export function ServicesList({ services, categories }: ServicesListProps) {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0)
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    const handlePrevious = () => {
        setSelectedCategoryIndex(prevIndex =>
            prevIndex === 0 ? categories.length - 1 : prevIndex - 1
        )
    }

    const handleNext = () => {
        setSelectedCategoryIndex(prevIndex =>
            prevIndex === categories.length - 1 ? 0 : prevIndex + 1
        )
    }

    const selectedCategory = categories[selectedCategoryIndex]
    const filteredServices = services.filter(service => service.category === selectedCategory)

    const handleOpenContactForm = () => {
        setIsContactModalOpen(true)
    }

    return (
        <>
            {/* Navigation Buttons */}
            <div className="relative flex items-center justify-center w-full my-10">
                {/* Previous Button */}
                <button
                    className="absolute left-[-3rem] top-1/2 transform -translate-y-1/2 bg-darkpurple text-white rounded-full p-4 hover:bg-opacity-80 transition-opacity shadow-md"
                    onClick={handlePrevious}
                    aria-label="Previous category"
                >
                    <span className="text-2xl font-bold" aria-hidden="true">←</span>
                </button>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14 manage px-4">
                    {filteredServices.map((service, i) => (
                        <ServiceCard
                            key={i}
                            heading={service.heading}
                            description={service.description}
                            duration={service.duration}
                            scope={service.scope}
                            features={service.features}
                            onContactRequest={handleOpenContactForm}
                        />
                    ))}
                </div>

                {/* Next Button */}
                <button
                    className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2 bg-darkpurple text-white rounded-full p-4 hover:bg-opacity-80 transition-opacity shadow-md"
                    onClick={handleNext}
                    aria-label="Next category"
                >
                    <span className="text-2xl font-bold" aria-hidden="true">→</span>
                </button>
            </div>

            {/* Contact Form Modal */}
            <ContactUsForm 
                showTriggerButton={false}
                isControlled={true}
                externalIsOpen={isContactModalOpen}
                onExternalClose={() => setIsContactModalOpen(false)}
            />
        </>
    )
}
