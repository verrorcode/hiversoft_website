"use client;"
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Link from 'next/link';

interface ContactusformProps {
    showTriggerButton?: boolean;
    isControlled?: boolean;  // New prop to determine if modal is externally controlled
    externalIsOpen?: boolean;  // External open state
    onExternalClose?: () => void;  // External close handler
}

const Contactusform = ({ 
    showTriggerButton = true,
    isControlled = false,
    externalIsOpen = false,
    onExternalClose
}: ContactusformProps) => {
    // Internal state for standalone usage (navbar)
    const [internalIsOpen, setInternalIsOpen] = useState(false);

    // Use either internal or external state based on isControlled prop
    const isOpen = isControlled ? externalIsOpen : internalIsOpen;
    const closeModal = isControlled ? onExternalClose : () => setInternalIsOpen(false);

    const [inputValues, setInputValues] = useState({
        input1: '',
        input2: '',
        input3: ''
    });

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setInputValues(prevState => ({ ...prevState, [name]: value }));
    }

    const handleClick = () => {
        alert(`Name: ${inputValues.input1}, Email-address: ${inputValues.input2}, Message: ${inputValues.input3}`);
        closeModal?.();
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
        try {
            // Create form data
            const params = new URLSearchParams({
                name: inputValues.input1.trim(),
                email: inputValues.input2.trim(),
                message: inputValues.input3.trim()
            });
    
            // Create the URL with parameters
            const url = `https://script.google.com/macros/s/AKfycbxU9Akyq-3Xnv_wSL2lsYLG9GNNCXY4yg6jLmUPgfBmQfBVHUXqyPdBQr8cKkRWXyxr1A/exec?${params.toString()}`;
    
            // Make the request
            const response = await fetch(url, {
                method: 'GET',
                mode: 'no-cors'
            });
    
            // Since we're using no-cors, we can't read the response
            // So we'll assume success if there's no error
            alert("Message sent successfully!");
            setInputValues({ input1: '', input2: '', input3: '' });
            closeModal?.();
            
        } catch (error) {
            console.error("Error:", error);
            alert("Error submitting form. Please check your internet connection.");
        }
    };
    
    

    const isDisabled = Object.values(inputValues).some((value) => value === '');

    return (
        <>
            {showTriggerButton && (
                <div className="hidden lg:block">
                    <button 
                        type="button" 
                        className='justify-end text-xl font-semibold bg-transparent py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-navyblue hover:text-white' 
                        onClick={() => setInternalIsOpen(true)}
                    >
                        Contact Us
                    </button>
                </div>
            )}

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal ?? (() => {})}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
                                        <h2 className="text-2xl font-semibold text-center">Contact Us</h2>
                                        <p className="mb-8 lg:mb-16 mt-4 font-light text-center text-gray-500 sm:text-xl">Request a consultation or send us your feedback.</p>
                                        <form action="#" className="space-y-8" onSubmit={handleSubmit}>
                                            <div>
                                                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                                                <input
                                                    id="text"
                                                    name="input1"
                                                    value={inputValues.input1}
                                                    onChange={handleChange}
                                                    type="text"
                                                    required
                                                    className="w-full rounded-md border border-linegrey px-3 py-2"
                                                    placeholder="Enter your name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                                                <input
                                                    id="email"
                                                    name="input2"
                                                    value={inputValues.input2}
                                                    onChange={handleChange}
                                                    type="email"
                                                    required
                                                    className="w-full rounded-md border border-linegrey px-3 py-2"
                                                    placeholder="Enter your email"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your Message</label>
                                                <textarea
                                                    id="message"
                                                    name="input3"
                                                    value={inputValues.input3}
                                                    onChange={handleChange}
                                                    className="w-full rounded-md border border-linegrey px-3 py-2"
                                                    placeholder="Enter your message"
                                                    rows={4}
                                                    required
                                                ></textarea>
                                            </div>
                                            <button
                                                type="submit"
                                                onClick={handleClick}
                                                disabled={isDisabled}
                                                className="w-full py-3 px-5 text-sm font-medium text-white bg-blue rounded-lg disabled:opacity-50"
                                            >
                                                Send Message
                                            </button>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

export default Contactusform;