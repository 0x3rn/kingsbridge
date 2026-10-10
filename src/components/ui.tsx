import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export type IconName =
	| "arrow"
	| "diagonal"
	| "search"
	| "menu"
	| "close"
	| "plus"
	| "check"
	| "book"
	| "sun"
	| "leaf"
	| "calendar"
	| "download"
	| "location"
	| "mail"
	| "clock";
const paths: Record<IconName, string> = {
	arrow: "M4 12h15m-6-6 6 6-6 6",
	diagonal: "M6 18 18 6M6 6h12v12",
	search: "M21 21l-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0",
	menu: "M4 6h16M4 12h16M4 18h16",
	close: "m6 6 12 12M6 18 18 6",
	plus: "M12 5v14M5 12h14",
	check: "m5 12 4 4L19 6",
	book: "M12 5v15M12 5C9 3 5 3 2 4v15c3-1 7-1 10 1 3-2 7-2 10-1V4c-3-1-7-1-10 1",
	sun: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1 1M18 18l1 1M5 19l1-1M18 6l1-1",
	leaf: "M19 3C6 3 3 9 6 16s15 5 13-13ZM5 21 16 10",
	calendar: "M4 6h16v15H4ZM8 3v6M16 3v6M4 11h16",
	download: "M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5",
	location:
		"M12 22s8-8 8-14a8 8 0 0 0-16 0c0 6 8 14 8 14ZM12 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6",
	mail: "M3 5h18v14H3ZM3 5l9 7 9-7",
	clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M12 7v5l4 2",
};
export function Icon({
	name = "arrow",
	className = "",
}: {
	name?: IconName;
	className?: string;
}) {
	return (
		<svg
			className={`icon ${className}`}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
		>
			<path d={paths[name]} />
		</svg>
	);
}
export function Crest({ className = "" }: { className?: string }) {
	return (
		<svg
			className={`crest ${className}`}
			viewBox="0 0 48 56"
			fill="none"
			aria-hidden="true"
		>
			<path
				d="M4 4h40v27c0 11-20 21-20 21S4 42 4 31V4Z"
				stroke="currentColor"
				strokeWidth="1.8"
			/>
			<path
				d="M8 8h32v22c0 8-16 17-16 17S8 38 8 30V8Z"
				stroke="currentColor"
				strokeWidth=".6"
			/>
			<path
				d="M14 16v21m0-10 14-11m-14 11 15 10M32 17v20"
				stroke="currentColor"
				strokeWidth="2"
			/>
			<path d="M20 42h8" stroke="currentColor" />
		</svg>
	);
}
export function Brand({ light = false }: { light?: boolean }) {
	return (
		<Link
			href="/"
			className={`brand ${light ? "brand-light" : ""}`}
			aria-label="Kingsbridge College home"
		>
			<Crest />
			<span>
				Kingsbridge<small>College</small>
			</span>
		</Link>
	);
}
export function ButtonLink({
	href,
	children,
	variant = "primary",
	icon = "arrow",
	className = "",
}: {
	href: string;
	children: ReactNode;
	variant?: "primary" | "outline" | "light" | "gold";
	icon?: IconName;
	className?: string;
}) {
	return (
		<Link className={`button button-${variant} ${className}`} href={href}>
			{children}
			<Icon name={icon} />
		</Link>
	);
}
export function TextLink({
	href,
	children,
	light = false,
}: {
	href: string;
	children: ReactNode;
	light?: boolean;
}) {
	return (
		<Link href={href} className={`text-link ${light ? "text-link-light" : ""}`}>
			{children}
			<Icon />
		</Link>
	);
}
export function Eyebrow({
	children,
	light = false,
}: {
	children: ReactNode;
	light?: boolean;
}) {
	return (
		<p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
			<span />
			{children}
		</p>
	);
}
export function Photo({
	name,
	alt,
	className = "",
	eager = false,
	sizes = "(max-width: 760px) 100vw, 50vw",
}: {
	name: string;
	alt: string;
	className?: string;
	eager?: boolean;
	sizes?: string;
}) {
	return (
		<div className={`photo ${className}`}>
			<Image
				src={`/images/${name}.webp`}
				alt={alt}
				fill
				sizes={sizes}
				loading={eager ? "eager" : "lazy"}
			/>
		</div>
	);
}
export function SectionHeading({
	eyebrow,
	title,
	text,
	children,
	light = false,
}: {
	eyebrow: string;
	title: ReactNode;
	text?: string;
	children?: ReactNode;
	light?: boolean;
}) {
	return (
		<div className={`section-heading ${light ? "light" : ""}`}>
			<div>
				<Eyebrow light={light}>{eyebrow}</Eyebrow>
				<h2>{title}</h2>
				{text && <p className="section-intro">{text}</p>}
			</div>
			{children}
		</div>
	);
}
export function PageHero({
	eyebrow,
	title,
	description,
	image,
	alt,
	children,
}: {
	eyebrow: string;
	title: ReactNode;
	description: string;
	image?: string;
	alt?: string;
	children?: ReactNode;
}) {
	return (
		<section className={`page-hero ${image ? "page-hero-image" : ""}`}>
			<div className="container">
				<div className="page-hero-copy">
					<div className="breadcrumb">
						<Link href="/">Home</Link>
						<span>/</span>
						<span>{eyebrow}</span>
					</div>
					<Eyebrow>{eyebrow}</Eyebrow>
					<h1>{title}</h1>
					<p>{description}</p>
					{children && <div className="button-row">{children}</div>}
				</div>
				{image && (
					<Photo
						name={image}
						alt={alt || "Life at Kingsbridge College"}
						eager
						className="page-hero-photo"
					/>
				)}
			</div>
		</section>
	);
}
export function NewsCard({
	article,
}: {
	article: {
		slug: string;
		category: string;
		date: string;
		title: string;
		image: string;
		alt: string;
		excerpt: string;
	};
}) {
	return (
		<article className="news-card">
			<Link
				className="news-image-link"
				href={`/news/${article.slug}`}
				aria-label={article.title}
			>
				<Photo
					name={article.image}
					alt={article.alt}
					sizes="(max-width: 760px) 100vw, 33vw"
				/>
				<span className="round-arrow">
					<Icon name="diagonal" />
				</span>
			</Link>
			<div className="news-meta">
				<span>{article.category}</span>
				<time>Published {article.date}</time>
			</div>
			<h3>
				<Link href={`/news/${article.slug}`}>{article.title}</Link>
			</h3>
			<p>{article.excerpt}</p>
			<TextLink href={`/news/${article.slug}`}>Read More</TextLink>
		</article>
	);
}
