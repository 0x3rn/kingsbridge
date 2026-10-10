const canonicalHost = "kingsbridgecollege.corstack.dev";
export default {
	async fetch(request, env) {
		const url = new URL(request.url);
		const local = ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);
		if (
			!local &&
			(url.protocol !== "https:" || url.hostname !== canonicalHost)
		) {
			url.protocol = "https:";
			url.hostname = canonicalHost;
			url.port = "";
			return Response.redirect(url.href, 301);
		}
		if (!["GET", "HEAD"].includes(request.method)) {
			return new Response(null, {
				status: 405,
				headers: { Allow: "GET, HEAD" },
			});
		}
		// Next exports HTML alongside .txt payloads used by client navigation.
		// Normalize HTML aliases only; pass those payloads and assets through intact.
		const pagePath =
			url.pathname
				.replace(/\/index(?:\.html)?$/, "")
				.replace(/\.html$/, "")
				.replace(/\/$/, "") || "/";
		const htmlRequest =
			!/\.[^/]+$/.test(url.pathname) || url.pathname.endsWith(".html");
		const errorPage = ["/404", "/_not-found"].includes(pagePath);
		if (htmlRequest && !errorPage) {
			const assetURL = new URL(url);
			assetURL.pathname = pagePath === "/" ? "/index.html" : `${pagePath}.html`;
			const response = await env.ASSETS.fetch(new Request(assetURL, request));
			if (response.status === 200) {
				if (url.pathname !== pagePath) {
					url.pathname = pagePath;
					return Response.redirect(url.href, 301);
				}
				return response;
			}
			return response.status === 404 ? noindex(response) : response;
		}
		const response = await env.ASSETS.fetch(request);
		return response.status === 404 || errorPage ? noindex(response) : response;
	},
};
function noindex(response) {
	const result = new Response(response.body, {
		status: 404,
		headers: response.headers,
	});
	result.headers.set("X-Robots-Tag", "noindex");
	return result;
}
