
export default async function sitemap() {
  const baseUrl = "https://www.patcharadol-portfolio.com";

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  try {
    const response = await fetch(
      `${process.env.BACKEND_API_URL}/projects`,
      {
        headers: {
          Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
        },

        // อัปเดต sitemap ทุก 1 ชั่วโมง
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }

    const result = await response.json();

    // รองรับทั้ง API ที่คืน array ตรง ๆ
    // และ { data: [...] }
    const projects = Array.isArray(result)
      ? result
      : result.data ?? [];

    const projectPages = projects
      .filter((project) => project?.slug)
      .map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,

        lastModified: project.updatedAt
          ? new Date(project.updatedAt)
          : new Date(),

        changeFrequency: "monthly",
        priority: 0.8,
      }));

    return [...staticPages, ...projectPages];
  } catch (error) {
    console.error("Sitemap error:", error);

    // ต่อให้ backend ล่ม sitemap หลักก็ยังทำงาน
    return staticPages;
  }
}