import type { MetadataRoute } from "next";
import { navLinks, siteInfo } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return navLinks.map((link) => ({
    url: `${siteInfo.url}${link.href === "/" ? "" : link.href}`,
    changeFrequency: "weekly",
    priority: link.href === "/" ? 1 : 0.7,
  }));
}