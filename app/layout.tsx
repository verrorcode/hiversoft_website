import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';

export const metadata = {
  title: 'Hiversoft',
  description: 'Hiversoft: Crafting AI-driven custom software to elevate businesses and unlock growth',
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

