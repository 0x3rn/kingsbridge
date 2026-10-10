import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Serve the generated site with Cloudflare Workers Assets.
	output: "export",
	images: { unoptimized: true },
	turbopack: {
		rules: {
			"*.css": {
				loaders: ["@tailwindcss/turbopack"],
				as: "*.css",
			},
		},
	},
};

export default nextConfig;
