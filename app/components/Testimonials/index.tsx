import TestimonialClient from "./Testimonial.client";

const postData = [
    {
        name: "David Carter",
        profession: "Product Manager, Basecamp",
        comment: "Hiversoft transformed our operations with their intelligent automation and IT solutions. Our productivity has increased dramatically.",
        imgSrc: "https://static.hiversoft.com/user1.svg",
    },
    {
        name: "Sophia Bennett",
        profession: "Data Analyst, Buffer",
        comment: "Partnering with Hiversoft was a game-changer. Their expertise in custom software and AI made our workflow more efficient and scalable.",
        imgSrc: "https://static.hiversoft.com/user2.svg",
    },
    {
        name: "Michael Reynolds",
        profession: "AI Specialist, FreshBooks",
        comment: "The Hiversoft team exceeded our expectations. Their machine learning insights empowered us to deliver smarter and faster solutions to our clients.",
        imgSrc: "https://static.hiversoft.com/user3.svg",
    },
    {
        name: "David Johnson",
        profession: "Project Lead, Mailchimp",
        comment: "We’ve seen remarkable improvements in data analysis and customer insights, thanks to Hiversoft’s IT solutions. Their support has been outstanding.",
        imgSrc: "https://static.hiversoft.com/user1.svg",
    },
    {
        name: "Laura Thompson",
        profession: "Software Engineer, Typeform",
        comment: "Hiversoft’s expertise in digital transformation has modernized our platform. Their team’s dedication and knowledge are unmatched.",
        imgSrc: "https://static.hiversoft.com/user2.svg",
    },
    {
        name: "James Lee",
        profession: "Product Lead, Zapier",
        comment: "Hiversoft provided an exceptional level of service and expertise. Their custom AI models and IT solutions have helped us stay ahead of the curve.",
        imgSrc: "https://static.hiversoft.com/user3.svg",
    },
];

export default function Testimonial() {
    return <TestimonialClient postData={postData} />;
}
