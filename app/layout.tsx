import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import { ReactNode } from "react";
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Hiversoft | AI-Powered Web & Mobile App Development",
  description: "Hiversoft specializes in AI-driven web & mobile app development, cloud infrastructure, and automation. Build scalable digital solutions today!",
  keywords: [
    "Web Development",
    "Mobile App Development",
    "Cloud Infrastructure",
    "AI Applications",
    "SEO Optimization",
    "Automation",
  ],
  robots: "index, follow",

  openGraph: {
    title: "Hiversoft | AI-Powered Digital Solutions",
    description:
      "Boost your business with AI-driven web & mobile applications, cloud solutions, and automation. Get started with Hiversoft today!",
    url: "https://hiversoft.com",
    siteName: "Hiversoft",
    images: [
      {
        url: "https://static.hiversoft.com/logo2.png",
        width: 1200,
        height: 630,
        alt: "Hiversoft Logo",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hiversoft | AI-Powered Digital Solutions",
    description:
      "Accelerate your business with Hiversoft's AI-powered web & mobile solutions. 🚀 Get in touch today!",
    images: ["https://static.hiversoft.com/logo2.png"],
  },
};


interface Props {
  children: ReactNode;
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}

