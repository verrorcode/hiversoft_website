// app/articles/layout.tsx
import { ReactNode } from "react";
import { Metadata } from 'next';
import Customnavbar from '@/app/components/Navbar/Customnavbar';
import Footer from '@/app/components/Footer/index';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Articles section'
};

interface Props {
    children: ReactNode;
}

const ArticlesLayout = ({ children }: Props) => {
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

export default ArticlesLayout;
