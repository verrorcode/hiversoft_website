import dynamic from "next/dynamic";
import Image from "next/image";

interface DataType {
    heading: string;
    description: string;
    imgSrc: string;
}

// Static data for server-side rendering
const postData: DataType[] = [
    {
        heading: 'Admirian: Revolutionizing Influencer Marketing.',
        description: 'A powerful platform that connects brands with influencers, enabling data-driven campaigns and performance tracking.',
        imgSrc: 'https://static.hiversoft.com/Analytics.png',
    },
    {
        heading: 'Kontra AI: Your AI-Powered Business Assistant.',
        description: 'AI agents and virtual assistants that automate customer engagement, scheduling, and intelligent task management.',
        imgSrc: 'https://static.hiversoft.com/Home-Page.svg',
    },
    {
        heading: 'Admirian: Revolutionizing Influencer Marketing.',
        description: 'An advanced analytics dashboard that offers insights into campaign performance and audience engagement.',
        imgSrc: 'https://static.hiversoft.com/Analytics.png',
    },
    {
        heading: 'Kontra AI: Your AI-Powered Business Assistant.',
        description: 'Seamlessly integrates with existing workflows to automate repetitive tasks and enhance productivity.',
        imgSrc: 'https://static.hiversoft.com/Home-Page.svg',
    }
];

// Dynamically import the carousel component (CSR)
const FeaturedCarousel = dynamic(() => import("./FeaturedCarousel"), {
    ssr: false, // Disable SSR for the carousel
});

const FeaturedPlatforms = () => {
    return (
        <div className="bg-bgblue py-20 mt-40 marginFeature bg-featured" id="featured">
            <div className="mx-auto max-w-7xl sm:py-4 lg:px-12">
                <div className="text-center pt-48 pb-10 md:pt-96">
                    <h3 className="text-4xl sm:text-6xl font-bold text-white my-2">Our Featured Platforms.</h3>
                    <h3 className="text-4xl sm:text-6xl font-bold text-white text-opacity-50 lg:mr-48 my-2">Our Featured Platforms.</h3>
                    <h3 className="text-4xl sm:text-6xl font-bold text-white text-opacity-25 lg:-mr-32 my-2">Our Featured Platforms.</h3>
                </div>
                {/* Pass Data to Client-Side Carousel */}
                <FeaturedCarousel postData={postData} />
            </div>
        </div>
    );
};

export default FeaturedPlatforms;
