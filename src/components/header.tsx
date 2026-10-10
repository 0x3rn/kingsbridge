"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { navigation, news, searchPages } from "@/lib/content";
import { Brand, Icon } from "./ui";

export function Header() {
	const pathname = usePathname();
	const menuRef = useRef<HTMLDialogElement>(null);
	const searchRef = useRef<HTMLDialogElement>(null);
	const searchInput = useRef<HTMLInputElement>(null);
	const [query, setQuery] = useState("");
	const pages = [
		...searchPages,
		...news.map((story) => ({
			title: story.title,
			href: `/news/${story.slug}`,
			description: story.excerpt,
		})),
	];
	const results = pages.filter((page) =>
		`${page.title} ${page.description}`
			.toLowerCase()
			.includes(query.trim().toLowerCase()),
	);
	function openSearch() {
		searchRef.current?.showModal();
		searchInput.current?.focus();
	}
	return (
		<>
			<div className="utility-bar">
				<div className="container">
					<span>A place to learn. A life to shape.</span>
					<div>
						<Link href="/parents">For our families</Link>
						<Link href="/news">News & stories</Link>
						<Link href="/contact">
							Get in touch <Icon name="diagonal" />
						</Link>
					</div>
				</div>
			</div>
			<header className="site-header">
				<div className="container header-inner">
					<Brand />
					<nav className="desktop-nav" aria-label="Main navigation">
						{navigation.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								aria-current={
									pathname.startsWith(item.href) ? "page" : undefined
								}
							>
								{item.label}
							</Link>
						))}
					</nav>
					<div className="header-actions">
						<button
							className="icon-button search-button"
							type="button"
							aria-label="Search the website"
							onClick={openSearch}
						>
							<Icon name="search" />
						</button>
						<Link className="button button-primary header-visit" href="/visit">
							Visit Kingsbridge <Icon name="diagonal" />
						</Link>
						<button
							className="icon-button mobile-menu-button"
							type="button"
							aria-label="Open navigation menu"
							onClick={() => menuRef.current?.showModal()}
						>
							<Icon name="menu" />
						</button>
					</div>
				</div>
			</header>
			<dialog
				ref={menuRef}
				className="mobile-dialog"
				aria-label="Navigation menu"
			>
				<div className="dialog-top">
					<Brand />
					<button
						type="button"
						className="icon-button"
						aria-label="Close navigation"
						onClick={() => menuRef.current?.close()}
					>
						<Icon name="close" />
					</button>
				</div>
				<nav aria-label="Mobile navigation">
					{[
						...navigation,
						{ label: "News & stories", href: "/news" },
						{ label: "For our families", href: "/parents" },
						{ label: "Get in touch", href: "/contact" },
					].map((item) => (
						<Link
							key={item.href}
							href={item.href}
							onClick={() => menuRef.current?.close()}
						>
							{item.label}
							<Icon name="diagonal" />
						</Link>
					))}
				</nav>
				<Link
					href="/visit"
					className="button button-primary"
					onClick={() => menuRef.current?.close()}
				>
					Plan your visit <Icon />
				</Link>
				<p className="small-copy">Curiosity. Character. Possibility.</p>
			</dialog>
			<dialog
				ref={searchRef}
				className="search-dialog"
				aria-labelledby="search-title"
			>
				<div className="dialog-top">
					<h2 id="search-title">What would you like to discover?</h2>
					<button
						type="button"
						className="icon-button"
						aria-label="Close search"
						onClick={() => searchRef.current?.close()}
					>
						<Icon name="close" />
					</button>
				</div>
				<label className="search-field">
					<Icon name="search" />
					<span className="sr-only">Search pages and stories</span>
					<input
						ref={searchInput}
						type="search"
						value={query}
						onChange={(event) => setQuery(event.target.value)}
						placeholder="Try curriculum, admissions or term dates…"
					/>
				</label>
				<p className="small-copy" role="status">
					{query ? `${results.length} results` : "Explore Kingsbridge"}
				</p>
				<div className="search-results">
					{results.length ? (
						results.map((page) => (
							<Link
								key={page.href}
								href={page.href}
								onClick={() => searchRef.current?.close()}
							>
								<div>
									<strong>{page.title}</strong>
									<p>{page.description}</p>
								</div>
								<Icon />
							</Link>
						))
					) : (
						<p>
							No matches yet. Try a different word, or{" "}
							<Link href="/contact" onClick={() => searchRef.current?.close()}>
								get in touch
							</Link>
							.
						</p>
					)}
				</div>
			</dialog>
		</>
	);
}
