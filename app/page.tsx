import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Dedicated from './components/Dedicated/index';
import Digital from './components/Digital/index';
import Beliefs from './components/Beliefs/index';
import Wework from './components/Wework/index';
import Ourteam from './components/Ourteam/index';
import Featured from './components/Featured/index';
import Manage from './components/Manage/index';
import FAQ from './components/FAQ/index';
import Testimonials from './components/Testimonials/index';
import Articles from './components/Articles/index';
import Joinus from './components/Joinus/index';
import Insta from './components/Insta/index';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import NewAnnouncement from './components/newannouncements/page';
import { Metadata } from "next";
import Script from "next/script"; // Import Next.js Script

export const metadata: Metadata = {
  title: "Hiversoft - AI-Powered Digital Solutions",
  description: "Hiversoft offers expert web & mobile app development, AI solutions, and cloud infrastructure to scale businesses.",
  alternates: {
    canonical: "https://hiversoft.com",
  },
  openGraph: {
    title: "Hiversoft - AI-Powered Digital Solutions",
    description: "We build scalable, SEO-optimized digital solutions using AI and automation.",
    url: "https://hiversoft.com",
    siteName: "Hiversoft",
    images: [
      {
        url: "https://static.hiversoft.com/logo2.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiversoft - AI-Powered Digital Solutions",
    description: "We offer cutting-edge AI solutions and digital development services.",
    images: ["https://static.hiversoft.com/logo2.png"],
  },
};

export default function Home() {
  return (
    <main>
      {/* JSON-LD Structured Data for SEO */}
      <Script type="application/ld+json" id="json-ld">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Hiversoft",
          "url": "https://hiversoft.com",
          "logo": "https://static.hiversoft.com/logo2.png",
          "description": "Hiversoft specializes in AI-powered digital solutions, web and mobile app development, and cloud infrastructure.",
          "sameAs": [
            "https://www.linkedin.com/company/hiversoft",
            "https://twitter.com/hiversoft",
            "https://www.facebook.com/hiversoft"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-XXXXXXXXXX",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi"]
          }
        })}
      </Script>

      <NewAnnouncement />
      <Navbar />
      <Banner />
      <Aboutus />
      <Dedicated />
      <Digital />
      <Beliefs />
      <Wework />
      <Ourteam />
      <Featured />
      <Manage />
      <Testimonials />
      <Articles />
      <FAQ />
      <Joinus />
      <Insta />
      <Footer />
    </main>
  );
}
