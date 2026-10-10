"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { navigation, news, searchPages } from "@/lib/content";
import { Brand, Icon } from "./ui";

export function SiteSearchButton() {
	return (
		<button
			type="button"
			className="text-button"
			onClick={() => {
				const dialog = document.getElementById("site-search");
				if (dialog instanceof HTMLDialogElement) {
					dialog.showModal();
					dialog.querySelector("input")?.focus();
				}
			}}
		>
			Search the Website <Icon name="search" />
		</button>
	);
}
export function Header() {
	const pathname = usePathname();
	const menuRef = useRef<HTMLDialogElement>(null);
	const searchRef = useRef<HTMLDialogElement>(null);
	const searchInput = useRef<HTMLInputElement>(null);
	const menuButton = useRef<HTMLButtonElement>(null);
	const [menuOpen, setMenuOpen] = useState(false);
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
	const academicLinks = [
		{ label: "Our Curriculum", href: "/academics" },
		{ label: "Junior Secondary", href: "/academics/junior-secondary" },
		{ label: "Senior Secondary", href: "/academics/senior-secondary" },
	];
	function openSearch() {
		searchRef.current?.showModal();
		searchInput.current?.focus();
	}
	return (
		<>
			<div className="concept-notice">
				<div className="container">
					Portfolio preview: Kingsbridge College is a fictional school. Forms
					and subscriptions are for demonstration only and do not send
					information or confirm bookings.
				</div>
			</div>
			<div className="utility-bar">
				<div className="container">
					<span>Junior and Senior Secondary School · Lagos, Nigeria</span>
					<div>
						<Link href="/parents">Parents</Link>
						<Link href="/news">School News</Link>
						<Link href="/contact">
							Contact Us <Icon name="diagonal" />
						</Link>
					</div>
				</div>
			</div>
			<header className="site-header">
				<div className="container header-inner">
					<Brand />
					<nav className="desktop-nav" aria-label="Main navigation">
						{navigation.map((item) =>
							item.href === "/academics" ? (
								<details className="academic-menu" key={item.href}>
									<summary>Academics</summary>
									<div>
										{academicLinks.map((link) => (
											<Link
												href={link.href}
												key={link.href}
												aria-current={
													pathname === link.href ? "page" : undefined
												}
												onClick={(event) =>
													event.currentTarget
														.closest("details")
														?.removeAttribute("open")
												}
											>
												{link.label}
											</Link>
										))}
									</div>
								</details>
							) : (
								<Link
									key={item.href}
									href={item.href}
									aria-current={pathname === item.href ? "page" : undefined}
								>
									{item.label}
								</Link>
							),
						)}
					</nav>
					<div className="header-actions">
						<button
							className="icon-button search-button"
							type="button"
							aria-label="Search the website"
							aria-haspopup="dialog"
							aria-controls="site-search"
							onClick={openSearch}
						>
							<Icon name="search" />
						</button>
						<Link className="button button-primary header-visit" href="/visit">
							Arrange a Visit <Icon name="diagonal" />
						</Link>
						<button
							ref={menuButton}
							className="mobile-menu-button"
							type="button"
							aria-expanded={menuOpen}
							aria-controls="mobile-menu"
							aria-haspopup="dialog"
							onClick={() => {
								menuRef.current?.showModal();
								setMenuOpen(true);
							}}
						>
							<Icon name="menu" />
							Menu
						</button>
					</div>
				</div>
			</header>
			<dialog
				ref={menuRef}
				id="mobile-menu"
				className="mobile-dialog"
				aria-label="Navigation menu"
				onClose={() => {
					setMenuOpen(false);
					menuButton.current?.focus();
				}}
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
						navigation[0],
						...academicLinks,
						...navigation.slice(2),
						{ label: "Arrange a Visit", href: "/visit" },
						{ label: "Parents", href: "/parents" },
						{ label: "School News", href: "/news" },
						{ label: "Contact Us", href: "/contact" },
					].map((item) => (
						<Link
							key={item.href}
							href={item.href}
							aria-current={pathname === item.href ? "page" : undefined}
							onClick={() => menuRef.current?.close()}
						>
							{item.label}
							<Icon name="diagonal" />
						</Link>
					))}
				</nav>
			</dialog>
			<dialog
				ref={searchRef}
				id="site-search"
				className="search-dialog"
				aria-labelledby="search-title"
			>
				<div className="dialog-top">
					<h2 id="search-title">Search Kingsbridge</h2>
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
					<span className="sr-only">Search the website</span>
					<input
						ref={searchInput}
						type="search"
						value={query}
						onChange={(event) => setQuery(event.target.value)}
						placeholder="Search admissions, subjects or term dates"
					/>
				</label>
				<div className="search-status">
					<p className="small-copy" role="status">
						{query.trim()
							? `${results.length} ${results.length === 1 ? "result" : "results"}`
							: "Browse Pages"}
					</p>
					{query && (
						<button
							type="button"
							className="text-button"
							onClick={() => {
								setQuery("");
								searchInput.current?.focus();
							}}
						>
							Clear Search
						</button>
					)}
				</div>
				{!results.length && (
					<div className="search-empty">
						<h3>No matching pages found.</h3>
						<p>Try another search or browse the pages below.</p>
					</div>
				)}
				<div className="search-results">
					{(results.length ? results : searchPages).map((page) => (
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
					))}
				</div>
			</dialog>
		</>
	);
}
