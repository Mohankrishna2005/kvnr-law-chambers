import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kvnr-law.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/bns`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/consult`,
      lastModified: new Date(),
    },
  ];
}
