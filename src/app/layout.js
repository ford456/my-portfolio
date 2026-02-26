import { IBM_Plex_Sans_Thai, IBM_Plex_Sans_Thai_Looped } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Particles from "../components/Particles";
import { Analytics } from '@vercel/analytics/react';



const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  weight: ["400"],
  variable: "--font-geist-sans",
  subsets: ["thai"],
});

const ibmPlexSansThaiLooped = IBM_Plex_Sans_Thai_Looped({
  weight: ["400"],
  variable: "--font-geist-mono",
  subsets: ["thai"],
});

export const metadata = {
  title: "Patcharadol | Portfolio",
  description: "Patcharadol Portfolio Website for Graphic Designer, Motion Designer, 3D Modeler and Web Developer Freelance",
  icons: { 
    icon: "/PortLogoWhite.svg",
    shortcut: "/PortLogoWhite.svg",
    apple: "/PortLogoWhite.svg",
    other: { rel: "apple-touch-icon", url: "/PortLogoWhite.svg" }
  },
  keywords: [
    "Patcharadol",
    "Portfolio",
    "Developer",
    "Web Developer",
    "Graphic Designer",
    "motion designer",
    "3D Artist",
    "3D Modeler","Freelance",],
  authors: [{ name: "Patcharadol", url: "https://patcharadol-portfolio.vercel.app" }],
  creator: "Patcharadol",
  publisher: "Patcharadol",
  openGraph: {
    title: "Patcharadol | Portfolio",
    description: "Patcharadol Portfolio Website for Graphic Designer, Motion Designer, 3D Modeler and Web Developer Freelance",
    url: "https://patcharadol-portfolio.vercel.app",
    siteName: "Patcharadol Portfolio",},
};

export const Viewport = {
  
    themeColor: 'black',
    width: 'device-width',
    initialScale: 1.0,
    maximumScale: 1.0,
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

export const unstable_runtimeJS = false; // this page will not include runtime JavaScript

export const unstable_isr = false; // this page does not support Incremental Static Regeneration

export const unstable_preload = true; // this page will be preloaded for better performance

export const unstable_prefetch = {
  mode: "static"
}

export const unstable_static = false; // this page is not static and will be dynamically rendered

export const unstable_staticParams = []; // this page does not have any static params

export const unstable_staticPaths = []; // this page does not have any static paths

export const unstable_staticProps = {}; // this page does not have any static props

export const unstable_staticPropsGlobs = []; // this page does not have any static props globs

export const unstable_staticPropsPaths = []; // this page does not have any static props paths

export const unstable_staticPropsParams = []; // this page does not have any static props params

export const unstable_staticPropsParamsGlobs = []; // this page does not have any static props params globs

export const unstable_staticPropsParamsPaths = []; // this page does not have any static props params paths

export const unstable_staticPropsParamsPathsGlobs = []; // this page does not have any static props params paths globs

export const unstable_staticPropsParamsPathsGlobsCache = 'no-store'; // this page will not be cached and will always fetch fresh data

export const unstable_staticPropsParamsPathsGlobsRevalidate = 3600; // revalidate this page every hour

export const unstable_staticPropsParamsPathsGlobsRuntime = 'edge'; // this page will be rendered at the edge for better performance

export const unstable_staticPropsParamsPathsGlobsPreferredRegion = 'auto'; // this page can be rendered in any region 

export const unstable_staticPropsParamsPathsGlobsDynamic = 'force-dynamic'; // this page will be dynamically rendered at runtime

export default function RootLayout({ children }) {


  return (
    <html lang='en'>
      <body
        className={`${ibmPlexSansThai.variable} ${ibmPlexSansThaiLooped.variable} antialiased`}
      >
        
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

        {children}
        <SpeedInsights />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
