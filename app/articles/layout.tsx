// app/articles/layout.tsx
import { ReactNode } from "react";
import { Metadata } from "next";
import Customnavbar from "@/app/components/Navbar/Customnavbar";
import Footer from "@/app/components/Footer/index";
import Script from "next/script"; // Import Next.js Script component

export const metadata: Metadata = {
  title: "Articles | Hiversoft",
  description: "Explore insightful articles on AI, cloud integration, and digital transformation by Hiversoft.",
  keywords: ["AI", "Cloud Integration", "Digital Transformation", "Hiversoft Articles"],
  openGraph: {
    title: "Articles | Hiversoft",
    description: "Explore insightful articles on AI, cloud integration, and digital transformation by Hiversoft.",
    images: [
      {
        url: "https://static.hiversoft.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hiversoft Articles",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles | Hiversoft",
    description: "Explore insightful articles on AI, cloud integration, and digital transformation by Hiversoft.",
    images: ["https://static.hiversoft.com/og-image.jpg"],
  }
};

interface Props {
  children: ReactNode;
}

const ArticlesLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* JSON-LD Structured Data for Blog Page */}
      <Script type="application/ld+json" id="json-ld-articles">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "headline": "Articles | Hiversoft",
          "description": "Explore insightful articles on AI, cloud integration, and digital transformation by Hiversoft.",
          "publisher": {
            "@type": "Organization",
            "name": "Hiversoft",
            "logo": {
              "@type": "ImageObject",
              "url": "https://static.hiversoft.com/logo2.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.hiversoft.com/articles"
          }
        })}
      </Script>

      <Customnavbar />
      <div className="flex-grow bg-gray-20">
        <main className="p-4 mb-32">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default ArticlesLayout;
