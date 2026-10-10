import type { MetadataRoute } from "next";
import { news, searchPages } from "@/lib/content";
import { siteURL } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
	// Search includes shortcuts to sections; the sitemap lists each page once.
	const pages = new Set([
		"/",
		...searchPages.map((page) => new URL(page.href, siteURL).pathname),
		...news.map((article) => `/news/${article.slug}`),
	]);
	return [...pages].map((pathname) => ({ url: new URL(pathname, siteURL).href }));
}
