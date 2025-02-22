// ServicesContent.tsx
import Image from 'next/image'
import { ServicesList } from './ManageCSR'

// Static data that can be server-rendered
export const services = [
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
] as const;

export const categories = ["enterprise", "monthly"] as const;

// Server Component
export default function ServicesContent() {
    return (
        <section id="services-section" className="py-16" aria-label="Our Services">
            <div className="relative mx-auto max-w-7xl sm:py-20 lg:px-8 my-16">
                <h1 className="text-center text-4xl sm:text-6xl font-black">
                    Explore Our Comprehensive IT Services
                </h1>

                {/* Static features section */}
                <div className="md:flex md:justify-around mt-20">
                    {['Custom Solutions', 'Expert Team', '24/7 Client Support'].map((feature) => (
                        <div key={feature} className="flex gap-5 justify-center md:justify-start">
                            <Image 
                                src="/images/manage/right.svg" 
                                alt="" 
                                width={21} 
                                height={14}
                                aria-hidden="true"
                                priority
                            />
                            <h2 className="text-lg font-semibold">{feature}</h2>
                        </div>
                    ))}
                </div>

                {/* Client-side interactive components */}
                <ServicesList services={services} categories={categories} />
            </div>
        </section>
    )
}