import Head from "next/head";
import dynamic from "next/dynamic";

// Lazy-load Contactusform for CSR
const JoinClient = dynamic(() => import("./JoinClient"), { ssr: false });

const Join = () => {
    return (
        <>
            <Head>
                <title>Join Us - Hiversoft</title>
                <meta name="description" content="Elevate your business with Hiversoft’s AI-powered solutions. Connect with us today!" />
                <meta name="keywords" content="AI solutions, business growth, Hiversoft, automation" />
            </Head>
            
            {/* Render JoinClient for CSR */}
            <JoinClient />
        </>
    );
};

export default Join;
