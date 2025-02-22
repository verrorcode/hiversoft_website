"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const faqs = [
  {
    question: "What is Hiversoft, and what services do you provide?",
    answer:
      "Hiversoft is a leading technology company specializing in IT services, custom software development, and AI/ML-based solutions. Our expertise spans mobile and web application development, IT infrastructure, and cutting-edge artificial intelligence solutions such as machine learning models, intelligent automation, and data-driven applications. We help clients across industries transform their business operations and scale their digital presence.",
  },
  {
    question: "Do you provide AI-based solutions?",
    answer:
      "Yes! We specialize in AI-based solutions, including predictive analytics, recommendation systems, and natural language processing to drive innovation for your business.",
  },
  {
    question: "Can you integrate AI into my existing software?",
    answer:
      "Absolutely! We can seamlessly integrate AI components such as chatbots, machine learning models, and intelligent automation into your existing software for improved performance.",
  },
  {
    question: "Do you offer custom AI model development?",
    answer:
      "Yes, we can create custom AI models tailored to your business needs, whether it is for sentiment analysis, predictive analytics, or computer vision tasks.",
  },
  {
    question: "Can you build AI chatbots for my website?",
    answer:
      "Yes, our team can develop AI-powered chatbots that provide personalized customer interactions, automate support, and increase engagement on your website.",
  },
  {
    question: "Do you offer training on AI tools?",
    answer:
      "Yes, we provide training sessions on AI tools and platforms, helping your team understand and utilize machine learning models, APIs, and data pipelines.",
  },
  {
    question: "How do you ensure data privacy in AI projects?",
    answer:
      "We follow strict data privacy protocols, ensuring that all personal data is anonymized and handled securely. We comply with global regulations such as GDPR and CCPA.",
  },
];

const FAQContent = () => {
  return (
    <div className="w-full px-4 pt-10">
      {/* FAQ Heading */}
      <h3 className="text-xl font-light text-gray-200 text-center mb-4 uppercase tracking-widest">
        FAQ
      </h3>
      <h2 className="text-5xl lg:text-6xl font-bold text-center text-white mb-12">
        Frequently Asked <br /> Questions
      </h2>

      {/* FAQ Accordions */}
      <div className="mx-auto w-full max-w-4xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white shadow-lg py-6 px-6 mb-6 transition-all duration-300 hover:shadow-2xl"
          >
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between px-4 py-3 text-left text-2xl font-medium text-hoblue">
                    <span>{faq.question}</span>
                    <ChevronUpIcon
                      className={`h-6 w-6 text-blue-600 transform transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQContent;
