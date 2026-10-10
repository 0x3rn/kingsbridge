import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { test } from "node:test";
import worker from "../worker/index.mjs";

const output = path.resolve(import.meta.dirname, "../out");
const origin = "https://kingsbridgecollege.corstack.dev";
const sitemap = await fs.readFile(path.join(output, "sitemap.xml"), "utf8");
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
	(match) => match[1],
);
const pages = locations.map((location) => new URL(location).pathname);
const read = (pathname) =>
	fs.readFile(
		path.join(output, pathname === "/" ? "index.html" : `${pathname}.html`),
		"utf8",
	);
const assetResponse = async (request) => {
	const pathname = new URL(request.url).pathname;
	const file = path.resolve(output, `.${decodeURIComponent(pathname)}`);
	assert.ok(file.startsWith(output + path.sep));
	try {
		const data = await fs.readFile(file);
		return new Response(request.method === "HEAD" ? null : data, {
			headers: {
				"Content-Type": file.endsWith(".html") ? "text/html" : "text/plain",
			},
		});
	} catch {
		const data = await fs.readFile(path.join(output, "404.html"));
		return new Response(request.method === "HEAD" ? null : data, {
			status: 404,
			headers: { "Content-Type": "text/html" },
		});
	}
};
const env = { ASSETS: { fetch: assetResponse } };
const request = (pathname, options = {}) =>
	worker.fetch(new Request(origin + pathname, options), env);

test("sitemap lists exactly the 18 public pages and robots advertises it", async () => {
	assert.equal(locations.length, 18);
	assert.equal(new Set(locations).size, 18);
	assert.ok(pages.includes("/academics/junior-secondary"));
	assert.equal(pages.filter((page) => page.startsWith("/news/")).length, 4);
	for (const location of locations)
		assert.equal(new URL(location).origin, origin);
	assert.doesNotMatch(sitemap, /404|_not-found|localhost|#/);
	const robots = await fs.readFile(path.join(output, "robots.txt"), "utf8");
	assert.ok(robots.includes("Allow: /"));
	assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
});

test("every page contains its own canonical, rendered heading and public social image", async () => {
	const titles = new Set();
	for (const pathname of pages) {
		const html = await read(pathname);
		const canonicals = [
			...html.matchAll(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/g),
		];
		assert.equal(canonicals.length, 1, pathname);
		assert.equal(new URL(canonicals[0][1]).href, origin + pathname, pathname);
		assert.match(html, /<h1[ >]/, pathname);
		assert.doesNotMatch(
			html,
			/name="robots" content="noindex"|http:\/\/localhost:3000/,
		);
		assert.ok(
			html.includes(
				`property="og:image" content="${origin}/images/campus.webp"`,
			),
			pathname,
		);
		const title = html.match(/<title>(.*?)<\/title>/)?.[1];
		assert.ok(title, pathname);
		titles.add(title);
	}
	assert.equal(titles.size, 18, "Public page titles should be distinct");
});

test("HTTP and alternate hosts permanently redirect while preserving queries", async () => {
	for (const url of [
		"http://kingsbridgecollege.corstack.dev/about?source=test",
		"https://preview.workers.dev/about?source=test",
	]) {
		const response = await worker.fetch(new Request(url), env);
		assert.equal(response.status, 301);
		assert.equal(
			response.headers.get("location"),
			`${origin}/about?source=test`,
		);
	}
});

test("page routes and HTML aliases retain the exported content", async () => {
	for (const pathname of pages) {
		const response = await request(pathname);
		assert.equal(response.status, 200, pathname);
		assert.equal(await response.text(), await read(pathname));
		for (const alias of pathname === "/"
			? ["/index.html", "/index"]
			: [`${pathname}/`, `${pathname}.html`, `${pathname}/index.html`]) {
			const redirected = await request(`${alias}?source=test`);
			assert.equal(redirected.status, 301, alias);
			assert.equal(
				redirected.headers.get("location"),
				`${origin + pathname}?source=test`,
			);
		}
	}
});

test("Next client navigation payloads pass through unchanged", async () => {
	for (const pathname of pages) {
		const payload = pathname === "/" ? "/index.txt" : `${pathname}.txt`;
		const expected = await fs.readFile(path.join(output, payload));
		const response = await request(`${payload}?_rsc=test`);
		assert.equal(response.status, 200, payload);
		assert.deepEqual(Buffer.from(await response.arrayBuffer()), expected);
	}
});

test("missing routes and assets return the custom noindex 404", async () => {
	for (const pathname of [
		"/missing-page",
		"/news/missing-story",
		"/academics/missing-stage",
		"/_next/static/missing.js",
		"/404.html",
		"/_not-found.html",
	]) {
		const response = await request(pathname);
		assert.equal(response.status, 404, pathname);
		assert.equal(response.headers.get("x-robots-tag"), "noindex");
		assert.match(await response.text(), /We couldn’t find that page/);
	}
	const head = await request("/missing-page", { method: "HEAD" });
	assert.equal(head.status, 404);
	assert.equal(await head.text(), "");
});

test("HEAD and unsupported methods keep their HTTP semantics", async () => {
	const head = await request("/about", { method: "HEAD" });
	assert.equal(head.status, 200);
	assert.equal(await head.text(), "");
	const post = await request("/about", { method: "POST" });
	assert.equal(post.status, 405);
	assert.equal(post.headers.get("allow"), "GET, HEAD");
});

test("asset service failures keep their server error status", async () => {
	const response = await worker.fetch(new Request(`${origin}/about`), {
		ASSETS: {
			fetch: async () =>
				new Response("Temporarily unavailable", { status: 503 }),
		},
	});
	assert.equal(response.status, 503);
	assert.equal(await response.text(), "Temporarily unavailable");
});
