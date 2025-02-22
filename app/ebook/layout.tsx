// app/ebooks/layout.tsx
import { ReactNode } from "react";
import { Metadata } from 'next';
import Customnavbar from '@/app/components/Navbar/Customnavbar';
import Footer from '@/app/components/Footer/index';

export const metadata: Metadata = {
  title: 'Ebooks - Transform Your Business with Our AI Implementation Guide',
  description: 'Explore our comprehensive AI implementation guide and transform your business with insights, strategies, and best practices.',
  keywords: ['AI implementation', 'business transformation', 'AI guide', 'ebooks', 'digital transformation'],
  robots: "index, follow",
  
  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: 'Ebooks - Transform Your Business with Our AI Implementation Guide',
    description: 'Explore our comprehensive AI implementation guide and transform your business with insights, strategies, and best practices.',
    url: 'https://hiversoft.com/ebooks',
    siteName: 'Hiversoft',
    images: [
      {
        url: 'https://static.hiversoft.com/ebook-cover.png', // Update with actual ebook cover image
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Ebooks - Transform Your Business with Our AI Implementation Guide',
    description: 'Explore our comprehensive AI implementation guide to help you transform your business with cutting-edge AI strategies.',
    images: ['https://static.hiversoft.com/ebook-cover.png'], // Update with actual ebook cover image
  },
};

interface Props {
  children: ReactNode;
}

const EbooksLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Customnavbar />
      <div className="flex-grow bg-gray-20">
        <main className="p-4 mb-32">{children}</main> {/* Increased bottom margin */}
      </div>
      <Footer />
    </div>
  );
};

export default EbooksLayout;
