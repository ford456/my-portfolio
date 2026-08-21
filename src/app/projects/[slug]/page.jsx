import { notFound } from "next/navigation";
import ProjectClient from "./ProjectClient";

function isValidProjectSlug(slug) {
  if (!slug) return false;

  // กัน source map / asset / path แปลก ๆ
  if (
    slug.endsWith(".map") ||
    slug.endsWith(".css") ||
    slug.endsWith(".js") ||
    slug.includes("root-of-the-server") ||
    slug.startsWith("_next")
  ) {
    return false;
  }

  return true;
}

async function getProject(slug) {
  if (!isValidProjectSlug(slug)) {
    return null;
  }

  const response = await fetch(
    `${process.env.BACKEND_API_URL}/api/projects/${encodeURIComponent(slug)}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
      },
      next: {
        revalidate: 3600,
      },
    }
  );

  if (response.status === 404 || response.status === 400) {
    return null;
  }

  if (!response.ok) {
    const error = await response.text();

    console.error("Project API Error:", {
      slug,
      status: response.status,
      error,
    });

    return null;
  }

  const result = await response.json();

  return result.data ?? null;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = await getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const description =
    project.seoDescription ||
    project.description?.slice(0, 160) ||
    `View ${project.title} project.`;

  const image =
    project.img1 ||
    "/og-image.jpg";

  return {
    title: project.seoTitle || project.title,

    description,

    alternates: {
      canonical: `/projects/${project.slug}`,
    },

    openGraph: {
      type: "article",
      title: project.seoTitle || project.title,
      description,

      url: `/projects/${project.slug}`,

      images: [
        {
          url: image,
          alt: project.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: project.seoTitle || project.title,
      description,
      images: [image],
    },
  };
}

export default async function ProjectPages({ params }) {
  const { slug } = await params;
   if (!isValidProjectSlug(slug)) {
    notFound();}

  const project = await getProject(slug);



  return <ProjectClient product={project} />;
}