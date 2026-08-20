const fs = require("fs");
const path = require("path");

const { loadEnvConfig } = require("@next/env");

loadEnvConfig(process.cwd());

const BASE_URL = "https://www.patcharadol-portfolio.com";

async function generateSitemap() {
  try {
    console.log("Generating sitemap...");

    const response = await fetch(
      `${process.env.BACKEND_API_URL}/api/projects`,
      {
        headers: {
          Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Backend returned ${response.status} ${response.statusText}`
      );
    }

    const result = await response.json();

    const projects = Array.isArray(result)
      ? result
      : result.data ?? [];

    console.log(`Found ${projects.length} projects`);

    // Static pages
    const urls = [
      {
        loc: BASE_URL,
        priority: "1.0",
        changefreq: "monthly",
      },
      {
        loc: `${BASE_URL}/projects`,
        priority: "0.9",
        changefreq: "weekly",
      },
      {
        loc: `${BASE_URL}/about`,
        priority: "0.8",
        changefreq: "monthly",
      },
      {
        loc: `${BASE_URL}/contact`,
        priority: "0.8",
        changefreq: "monthly",
      },
      {
        loc: `${BASE_URL}/privacy-policy`,
        priority: "0.8",
        changefreq: "monthly",
      },

      // Dynamic project pages
      ...projects
        .filter((project) => project?.slug)
        .map((project) => ({
          loc: `${BASE_URL}/projects/${encodeURIComponent(project.slug)}`,
          priority: "0.8",
          changefreq: "monthly",
        })),
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, priority, changefreq }) => `  <url>
    <loc>${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

    const outputPath = path.join(
      process.cwd(),
      "public",
      "sitemap.xml"
    );

    fs.writeFileSync(outputPath, xml, "utf8");

    console.log(`Sitemap generated: ${outputPath}`);
    console.log(`Total URLs: ${urls.length}`);
  } catch (error) {
    console.error("Sitemap generation failed:");
    console.error(error);

    process.exit(1);
  }
}

generateSitemap();