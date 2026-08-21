import AboutClient from "./AboutClient";
import { SEO } from "../lib/seo";

export const metadata = SEO.about;

export default function AboutPage() {
  return <AboutClient />;
}