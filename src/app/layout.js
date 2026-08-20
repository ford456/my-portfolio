import { IBM_Plex_Sans_Thai, } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import { Suspense } from "react";
// import {headers} from "next/headers";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Particles from "../components/Particles";
import { Analytics } from '@vercel/analytics/react';

import PrivacyNotice from "../components/PrivacyNotice";



const ibm = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Patcharadol | Portfolio",
  description: "Patcharadol Portfolio Website for Graphic Designer, Motion Designer, 3D Modeler and Web Developer Freelance",
  keywords: [
    "พัชรดล",
    "สร้อยมะณี",
    "Patcharadol",
    "Soimanee",
    "Portfolio",
    "Developer",
    "motion",
    "Graphic",
    "Web Developer",
    "Graphic Designer",
    "motion designer",
    "3D Artist",
    "3D Modeler", "Freelance",],
  authors: [{ name: "Patcharadol", url: "https://patcharadol-portfolio.vercel.app" }],
  creator: "Patcharadol",
  publisher: "Patcharadol",
  openGraph: {
    type: "website",
    title: "Patcharadol | Portfolio",
    description: "Patcharadol Portfolio Website for Graphic Designer, Motion Designer, 3D Modeler and Web Developer Freelance",
    url: "https://patcharadol-portfolio.vercel.app",
    siteName: "Patcharadol Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dlt9egtdv/image/upload/v1783119848/%E0%B8%9B%E0%B8%81cover_qeeizc.png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patcharadol | Portfolio",
    description: "Patcharadol Portfolio Website for Graphic Designer, Motion Designer, 3D Modeler and Web Developer Freelance",
    creator: "@Patcharadol",
    images: [
      "https://res.cloudinary.com/dlt9egtdv/image/upload/v1783119848/%E0%B8%9B%E0%B8%81cover_qeeizc.png",
    ],
  },
};

export const viewport = {

  themeColor: 'black',
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
};

export const revalidate = 3600; // revalidate this page every hour


export const fetchCache = 'force-no-store'; // this page will not be cached and will always fetch fresh data

export const dynamicParams = true; // this page does not support dynamic route segments

export const preferredRegion = 'auto'; // this page can be rendered in any region

export const unstable_allowDynamic = [
  '/components/NavBar',
  '/components/Footer',
  '/components/Particles',
];

export const unstable_allowDynamicGlobs = [
  '/components/*',
];

export const unstable_cache = 'no-store'; // this page will not be cached and will always fetch fresh data 

export const unstable_revalidate = 3600; // revalidate this page every hour



export default async function RootLayout({ children }) {

  // const nonce = (await headers()).get("x-nonce");
  return (
    <html lang='en'>
      <body
        className={`${ibm.className} antialiased`}
      >
        {/* <script
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `
              console.log("Hello");
            `,
          }}
        /> */}
        <NavBar />

        <div style={{ width: '100%', height: '100%', position: 'fixed', zIndex: -1 }} >
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={20}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
        {/* <PageLoading className="absolute bg-primary -z-500"></PageLoading> */}
          {children}
        </Suspense>
        <SpeedInsights />
        <Footer />
        <Analytics />
        <PrivacyNotice />
      </body>
    </html>
  );
}
