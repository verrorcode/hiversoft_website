"use client;";

import Image from "next/image";
import { useState } from "react";
import Contactusform from "@/app/components/Navbar/Contactus";

const PredictiveAnalytics = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const handleOpenContactForm = () => {
        setIsContactModalOpen(true);
    };

    const handleCloseContactForm = () => {
        setIsContactModalOpen(false);
    };

    return (
        <div className="bg-white pb-32 mt-20">
            <div className="max-w-5xl mx-auto px-6 py-10">
                <h1 className="text-4xl font-bold text-center mb-8">
                    From Data to Insights: Leveraging AI for Predictive Analytics and Smarter Decision-Making
                </h1>

                <div className="mb-8 flex justify-center">
                    <Image
                        src="https://static.hiversoft.com/ai9.jpg"
                        alt="AI Dashboard Displaying Data Insights"
                        width={600}
                        height={300}
                        className="rounded-lg shadow-lg"
                    />
                </div>

                <p className="text-lg leading-relaxed">
                    In a fast-paced world where data drives success, businesses need to stay ahead of the curve. Predictive analytics is revolutionizing how organizations make decisions by turning complex datasets into meaningful insights. By using AI to detect patterns, predict trends, and recommend actions, companies can improve their operational efficiency, anticipate customer needs, and create stronger growth strategies.
                </p>

                <p className="text-lg leading-relaxed mt-6">
                    Imagine knowing what your customers need before they ask or predicting operational issues before they happen. This is not science fiction—it’s the power of predictive analytics in action.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-4">The Evolution of Data-Driven Insights</h2>
                <p className="text-lg leading-relaxed">
                    Predictive analytics has evolved from simple statistical models to complex AI-driven algorithms capable of analyzing massive amounts of structured and unstructured data in real-time. Today’s systems not only predict what might happen but also offer prescriptive insights to guide decision-making. These advanced models provide businesses with a roadmap to anticipate future events and prepare proactive strategies.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-4">Real-Life Applications of Predictive Analytics</h2>
                <p className="text-lg leading-relaxed">
                    Predictive analytics is not limited to tech giants—it’s being adopted across industries. Here are some real-world applications that highlight its transformative power:
                </p>

                <ul className="list-disc pl-6 space-y-4 mt-4">
                    <li>
                        <span className="font-semibold">Retail and E-commerce:</span> Personalized product recommendations, optimized pricing, and inventory management ensure businesses can meet demand without overstocking. For example, online retailers like Amazon use predictive models to suggest products based on browsing behavior.
                    </li>
                    <li>
                        <span className="font-semibold">Healthcare:</span> Hospitals use predictive models to identify patients at risk of complications and optimize resource allocation. By detecting early signs of chronic illnesses, healthcare providers can improve patient outcomes and reduce readmission rates.
                    </li>
                    <li>
                        <span className="font-semibold">Financial Services:</span> Predictive models analyze spending patterns to detect fraudulent transactions and assess creditworthiness. Fintech companies and banks use these insights to offer tailored financial products and strengthen fraud prevention systems.
                    </li>
                    <li>
                        <span className="font-semibold">Manufacturing:</span> Predictive maintenance helps factories prevent costly downtimes by identifying signs of wear and tear in equipment. This proactive approach reduces operational costs and increases productivity.
                    </li>
                    <li>
                        <span className="font-semibold">Logistics and Supply Chain:</span> Companies leverage predictive analytics to forecast demand, optimize delivery routes, and reduce delays. Real-time data analysis helps avoid supply chain bottlenecks and ensures timely deliveries.
                    </li>
                </ul>

                {/* <div className="my-8 flex justify-center">
                    <Image
                        src="https://static.hiversoft.com/ai6.jpg"
                        alt="Predictive Analytics in Action"
                        width={600}
                        height={300}
                        className="rounded-lg shadow-lg"
                    />
                </div> */}

                <h2 className="text-2xl font-semibold mt-10 mb-4">The Human Touch in Predictive Analytics</h2>
                <p className="text-lg leading-relaxed">
                    While AI algorithms do the heavy lifting, human expertise remains invaluable. Business leaders must align AI-driven predictions with their goals, using their domain knowledge to ensure actionable insights lead to the best outcomes. The synergy between machine intelligence and human decision-making is key to unlocking the true value of predictive analytics.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-4">Why Predictive Analytics is a Game-Changer</h2>
                <p className="text-lg leading-relaxed">
                    Predictive analytics empowers businesses to make data-driven decisions instead of relying solely on intuition. By anticipating trends and customer behaviors, organizations can:
                </p>
                <ul className="list-disc pl-6 space-y-4 mt-4">
                    <li>Enhance customer satisfaction through personalized engagement and targeted marketing.</li>
                    <li>Optimize inventory to meet customer demand and avoid overstocking or stockouts.</li>
                    <li>Reduce operational downtime by identifying potential issues before they arise.</li>
                    <li>Mitigate financial risks by spotting fraudulent activities and credit defaults early.</li>
                </ul>

                <p className="text-lg leading-relaxed mt-6">
                    Companies that invest in predictive analytics gain a significant competitive advantage by staying ahead of trends and proactively adapting to market changes. The ability to anticipate shifts and act with precision makes predictive analytics a game-changing tool for modern businesses.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-4">A Future Driven by Insights</h2>
                <p className="text-lg leading-relaxed">
                    As predictive analytics technology continues to evolve, we can expect even more accurate and actionable insights. The combination of machine learning, cloud computing, and big data processing will unlock unprecedented potential for businesses, empowering them to achieve sustainable growth and resilience.
                </p>

                <p className="text-lg leading-relaxed mt-6">
                    At Hiversoft, we specialize in helping organizations harness the power of predictive analytics to drive smarter decision-making. Our AI-powered solutions transform your data into a strategic asset, providing you with the insights needed to stay ahead in a competitive landscape.
                </p>

                {/* Schedule a Consultation Section */}
                <div className="relative z-10 text-center my-10 py-4">
                    <button
                        className="text-black font-semibold py-3 px-8 border-2 border-black rounded-full transition-transform duration-300 ease-in-out transform hover:bg-black hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                        onClick={handleOpenContactForm}
                    >
                        Schedule a Consultation
                    </button>
                </div>

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

export default PredictiveAnalytics;
