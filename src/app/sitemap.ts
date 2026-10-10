import type { MetadataRoute } from "next";
import { news, searchPages } from "@/lib/content";
import { siteURL } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
	return [
		"/",
		...searchPages.map((page) => page.href),
		...news.map((article) => `/news/${article.slug}`),
	].map((pathname) => ({ url: new URL(pathname, siteURL).href }));
}
