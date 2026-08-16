import AnimatedContent from "../AnimatedContent";

import HeadingSection from "./section/HeadingSection";
import GallerySection from "./section/GallerySection";
import YoutubeSection from "./section/YoutubeSection";
import SketchfabSection from "./section/SketchfabSection";
import SocialSection from "./section/SocialSection";
import WebsiteSection from "./section/WebsiteSection";

const sectionComponents = {
    heading: HeadingSection,
    gallery: GallerySection,
    youtube: YoutubeSection,
      website: WebsiteSection,
    sketchfab: SketchfabSection,
      socials: SocialSection,
};

export default function SectionRenderer({ section }) {
    const Component = sectionComponents[section.type];

    if (!Component) {
        console.warn(`Unknown section type: ${section.type}`);
        return null;
    }

    return <AnimatedContent
        distance={30}
        direction="vertical"
        reverse={false}
        config={{ tension: 100, friction: 50 }}
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.2}
        delay={300}><Component section={section} />
    </AnimatedContent>;
}