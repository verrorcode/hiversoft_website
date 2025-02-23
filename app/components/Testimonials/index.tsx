import TestimonialClient from "./Testimonial.client";

interface DataType {
    name: string;
    profession: string;
    comment: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        name: "David Carter",
        profession: 'Product Manager, Admirian',
        comment: 'Hiversoft streamlined our development with their backend & frontend expertise. The MVP they delivered helped us secure key clients, all while staying on schedule.',
        imgSrc: 'https://static.hiversoft.com/user1.svg',
    },
    {
        name: "Sophia Bennett",
        profession: 'Data Analyst, InsightWave Analytics',
        comment: "Hiversoft’s data dashboards and BI tools gave us actionable insights, and their UI/UX design made our analytics tools intuitive and efficient.",
        imgSrc: 'https://static.hiversoft.com/user2_4.png',
    },
    {
        name: "Michael Reynolds",
        profession: 'Innovation Director, ST Ventures',
        comment: "Hiversoft team's custom software and AI workflows reduced inefficiencies and sped up delivery. Their technical expertise stood out.",
        imgSrc: 'https://static.hiversoft.com/user3_4.png',
    },
    {
        name: "Maria Johnson",
        profession: 'Project Lead, BlueCore Systems',
        comment: "Hiversoft’s scalable software and insightful dashboards helped us make data-driven decisions faster. Their support is exceptional.",
        imgSrc: 'https://static.hiversoft.com/user1_3.png',
    },
    // {
    //     name: "Laura Thompson",
    //     profession: 'Software Engineer, Typeform',
    //     comment: 'Hiversoft’s expertise in digital transformation has modernized our platform. Their team’s dedication and knowledge are unmatched.',
    //     imgSrc: 'https://static.hiversoft.com/user2.svg',
    // },
    {
        name: "Alex Monroe",
        profession: 'Technology Manager, Kontra AI',
        comment: "Hiversoft provided us with custom workflows and sleek UI/UX. Their solutions are tailored and were highly effective in giving us a competitive edge.",
        imgSrc: 'https://static.hiversoft.com/user3.svg',
    },
];

export default function Testimonial() {
    return <TestimonialClient postData={postData} />;
}
