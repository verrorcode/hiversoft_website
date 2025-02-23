import { ReactNode } from 'react';
import { Metadata } from 'next';
import Customnavbar from '@/app/components/Navbar/Customnavbar';
import Footer from '@/app/components/Footer/index';

export const metadata: Metadata = {
  title: 'Hiversoft Privacy Policy',
  description: 'Hiversoft’s privacy policy outlining data collection and usage practices, compatible with LinkedIn and social media advertising.',
  keywords: ['privacy policy', 'data protection', 'Hiversoft', 'social media ads', 'LinkedIn advertising'],
  robots: 'index, follow',

  // Canonical URL for SEO
  alternates: {
    canonical: 'https://hiversoft.com/privacy-policy', // Replace with your actual domain
  },

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: 'Hiversoft Privacy Policy',
    description: 'Learn how Hiversoft handles your data for services and advertising on platforms like LinkedIn.',
    url: 'https://hiversoft.com/privacy-policy', // Kept for social sharing previews
    siteName: 'Hiversoft',
    images: [
      {
        url: 'https://static.hiversoft.com/logo2.png', // Already on CDN; update if needed
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Hiversoft Privacy Policy',
    description: 'Hiversoft’s privacy policy details our data practices for services and social media advertising.',
    images: ['https://static.hiversoft.com/logo2.png'], // Already on CDN; update if needed
  },
};

interface Props {
  children: ReactNode;
}

const PrivacyPolicyLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Customnavbar />
      <div className="flex-grow bg-gray-50">
        <main className="p-4 mb-32">{children}</main> {/* Increased bottom margin as in ebooks layout */}
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyLayout;