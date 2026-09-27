// src/lib/seo.js

const siteName = "Patcharadol";
const siteUrl = "https://www.patcharadol-portfolio.com";

// Page keywords replace the root layout's list instead of merging with it,
// so every page repeats the name keywords.
export const baseKeywords = [
  "พัชรดล",
  "สร้อยมะณี",
  "พัชรดล สร้อยมะณี",
  "Patcharadol",
  "Soimanee",
  "Patcharadol Soimanee",
  "Portfolio",
];

export const SEO = {

  project: {
    title: "Projects",
    description:
      "Selected projects by Patcharadol Soimanee: graphic design, motion graphics, 3D modeling and web development work.",
    keywords: [
      ...baseKeywords,
      "Projects",
      "ผลงาน",
      "Graphic Design",
      "Motion Graphic",
      "3D Modeling",
      "Web Development",
      "Line Sticker",
      "UI/UX",
    ],

    alternates: {
      canonical: "/projects",
    },

    openGraph: {
      title: "Projects | Patcharadol",
      url: "/projects",
    },
  },

  about: {
    title: "About",
    description:
      "About Patcharadol Soimanee, a graphic designer, motion designer, 3D modeler and web developer based in Bangkok, Thailand.",
    keywords: [
      ...baseKeywords,
      "About",
      "ประวัติ",
      "Resume",
      "Experience",
      "Certificates",
      "Graphic Designer",
      "Motion Designer",
      "3D Modeler",
      "Web Developer",
      "Bangkok",
    ],

    alternates: {
      canonical: "/about",
    },

    openGraph: {
      title: "About | Patcharadol",
      url: "/about",
    },
  },
  contact: {
    title: "Contact",
    description:
      "Contact Patcharadol Soimanee for freelance graphic design, motion graphics, 3D modeling and web development projects.",
    keywords: [
      ...baseKeywords,
      "Contact",
      "ติดต่อ",
      "Hire",
      "Freelance",
      "ฟรีแลนซ์",
      "Graphic Designer Freelance",
      "Motion Designer Freelance",
      "Bangkok",
    ],

    alternates: {
      canonical: "/contact",
    },

    openGraph: {
      title: "Contact | Patcharadol",
      url: "/contact",
    },
  },
};
