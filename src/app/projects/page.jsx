import { SEO } from "../lib/seo";
import ProjectsClient from "./ProjectsClient";

export const metadata = SEO.project;

export default function ProjectsPage() {
  return <ProjectsClient />;
}