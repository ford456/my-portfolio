export default function robots() {
  const baseUrl = "https://www.patcharadol-portfolio.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",

      disallow: [
        "/api/",
        "/admin/",
      ],
    },

    sitemap: `${baseUrl}/sitemap.xml`,
  };
}