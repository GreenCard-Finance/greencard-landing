import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";

const siteUrl = "https://www.greencardfinance.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getBlogPosts();

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAtRaw),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
