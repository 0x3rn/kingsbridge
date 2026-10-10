import assert from "node:assert/strict";

const origin = new URL(process.argv[2] || "http://localhost:3000");
const queue = ["/"];
const pages = new Map();
const fragments = [];
const files = new Set();

for (let index = 0; index < queue.length; index++) {
	const path = queue[index];
	const response = await fetch(new URL(path, origin));
	assert.equal(response.status, 200, `${path}: HTTP ${response.status}`);
	const html = await response.text();
	assert.equal(
		(html.match(/<h1(?:\s|>)/g) || []).length,
		1,
		`${path}: expected one h1`,
	);
	assert.match(html, /id="main"/, `${path}: missing skip-link target`);
	pages.set(path, html);
	for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
		const url = new URL(href.replaceAll("&amp;", "&"), new URL(path, origin));
		if (url.origin !== origin.origin || url.pathname.startsWith("/_next/"))
			continue;
		if (url.hash)
			fragments.push({
				path: url.pathname,
				hash: decodeURIComponent(url.hash.slice(1)),
			});
		if (/\.[a-z0-9]+$/i.test(url.pathname)) files.add(url.pathname);
		else if (!queue.includes(url.pathname)) queue.push(url.pathname);
	}
}

for (const { path, hash } of fragments) {
	assert.ok(
		pages.get(path)?.includes(`id="${hash}"`),
		`${path}#${hash}: missing anchor`,
	);
}
for (const path of [
	...files,
	"/images/campus.webp",
	"/images/science.webp",
	"/images/library.webp",
	"/images/sports.webp",
]) {
	const response = await fetch(new URL(path, origin));
	assert.equal(response.status, 200, `${path}: missing asset`);
}
const calendar = await (
	await fetch(new URL("/downloads/kingsbridge-term-dates.ics", origin))
).text();
assert.equal(
	(calendar.match(/BEGIN:VEVENT/g) || []).length,
	6,
	"Calendar should contain six events",
);
const missing = await fetch(new URL("/this-page-does-not-exist", origin));
assert.equal(missing.status, 404, "Missing route must return HTTP 404");
assert.match(
	await missing.text(),
	/<h1[\s>]/,
	"Missing route needs a visible page heading",
);
assert.equal(pages.size, 18, "Expected all 18 content pages to be reachable");
console.log(
	`Passed: ${pages.size} pages, ${fragments.length} anchors, linked assets, calendar and 404.`,
);
