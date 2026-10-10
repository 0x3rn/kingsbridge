import Link from "next/link";
import type { ReactNode } from "react";
import { ButtonLink, Eyebrow, Photo, TextLink } from "./ui";

export function PageOpening({
	title,
	intro,
	label,
	eyebrow,
	image,
	compact = false,
	children,
}: {
	title: string;
	intro: string;
	label: string;
	eyebrow?: string;
	image?: string;
	compact?: boolean;
	children?: ReactNode;
}) {
	return (
		<header
			className={`page-hero ${image ? "page-hero-image" : ""} ${compact ? "compact-opening" : ""}`}
		>
			<div className="container">
				<div className="page-hero-copy">
					<div className="breadcrumb">
						<Link href="/">Home</Link>
						<span>/</span>
						<span>{label}</span>
					</div>
					{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
					<h1>{title}</h1>
					<p>{intro}</p>
					{children}
				</div>
				{image && (
					<figure>
						<Photo
							name={image}
							alt={
								image === "campus"
									? "Students walking through the school grounds."
									: image === "science"
										? "Students taking part in practical science."
										: image === "sports"
											? "Students playing basketball."
											: "Students reading and discussing a book in the library."
							}
							className="page-hero-photo"
							eager
						/>
						<figcaption>
							{image === "campus"
								? "Our school grounds"
								: image === "science"
									? "Practical science"
									: image === "sports"
										? "Sports and teamwork"
										: "Learning in the library"}
						</figcaption>
					</figure>
				)}
			</div>
		</header>
	);
}
export function Section({
	id,
	title,
	intro,
	soft = false,
	children,
}: {
	id?: string;
	title: string;
	intro?: string;
	soft?: boolean;
	children?: ReactNode;
}) {
	return (
		<section id={id} className={`section ${soft ? "soft-section" : ""}`}>
			<div className="container">
				<div className="section-heading">
					<div>
						<h2>{title}</h2>
						{intro && <p className="section-intro">{intro}</p>}
					</div>
				</div>
				{children}
			</div>
		</section>
	);
}
export function Cards({
	items,
	columns = 3,
}: {
	items: { title: string; text: string }[];
	columns?: number;
}) {
	return (
		<div className={`info-grid columns-${columns}`}>
			{items.map((item) => (
				<article className="editorial-card" key={item.title}>
					<h3>{item.title}</h3>
					<p>{item.text}</p>
				</article>
			))}
		</div>
	);
}
export function JumpLinks({
	links,
	label = "On this page",
}: {
	links: { href: string; label: string }[];
	label?: string;
}) {
	return (
		<nav className="page-anchor-nav container" aria-label={label}>
			{links.map((link) => (
				<Link key={link.href} href={link.href}>
					{link.label}
				</Link>
			))}
		</nav>
	);
}
export function SchoolFacts() {
	return (
		<dl className="school-facts">
			{[
				["School type", "Co-educational day school"],
				["Classes", "JSS1–JSS3 and SS1–SS3"],
				["Location", "Lagos, Nigeria"],
				["Programme", "Junior and Senior Secondary Education"],
			].map(([label, text]) => (
				<div key={label}>
					<dt>{label}</dt>
					<dd>{text}</dd>
				</div>
			))}
		</dl>
	);
}
export function StageCards() {
	return (
		<div className="programme-grid">
			{[
				{
					title: "Junior Secondary",
					years: "JSS1–JSS3",
					href: "/academics/junior-secondary",
					image: "science",
					text: "Our junior classes strengthen students’ understanding of core subjects while introducing a wider range of learning. Students also develop the organisation, study habits and confidence needed for secondary school.",
				},
				{
					title: "Senior Secondary",
					years: "SS1–SS3",
					href: "/academics/senior-secondary",
					image: "library",
					text: "Our senior classes provide more focused subject study, examination preparation and guidance on further education. Students receive support in choosing subjects that suit their strengths and future plans.",
				},
			].map((stage) => (
				<Link href={stage.href} className="programme-card" key={stage.title}>
					<Photo
						name={stage.image}
						alt={
							stage.image === "science"
								? "Practical science in Junior Secondary."
								: "Library learning in Senior Secondary."
						}
					/>
					<div className="programme-content">
						<span className="stage-label">{stage.years}</span>
						<h3>{stage.title}</h3>
						<p className="programme-description">{stage.text}</p>
						<span className="programme-link">{stage.title} Programme</span>
					</div>
				</Link>
			))}
		</div>
	);
}
const closing = {
	joining: {
		title: "Get to know Kingsbridge.",
		text: "Speak with our admissions team about your child’s education or arrange a visit to see the school.",
		primary: ["Arrange a Visit", "/visit"],
		secondary: ["Contact Us", "/contact"],
	},
	about: {
		title: "Learn more about studying at Kingsbridge.",
		text: "Explore our academic programmes or contact us about admission.",
		primary: ["Our Academic Programmes", "/academics"],
		secondary: ["Admissions", "/admissions"],
	},
	learning: {
		title: "Find out more about our programmes.",
		text: "Explore the Junior and Senior Secondary pages or contact us with questions about your child’s education.",
		primary: ["Junior Secondary", "/academics/junior-secondary"],
		secondary: ["Senior Secondary", "/academics/senior-secondary"],
	},
	junior: {
		title: "Admission into Junior Secondary",
		text: "Find out about admission into JSS1 and the requirements for transfer into other junior classes.",
		primary: ["View Admission Requirements", "/admissions#junior-entry"],
		secondary: ["Contact Admissions", "/contact"],
	},
	senior: {
		title: "Admission into Senior Secondary",
		text: "View the requirements for admission into SS1 and transfer into eligible senior classes.",
		primary: ["View Admission Requirements", "/admissions#senior-entry"],
		secondary: ["Contact Admissions", "/contact"],
	},
	life: {
		title: "Get to know Kingsbridge.",
		text: "Arrange a school visit or find everyday school information for parents.",
		primary: ["Arrange a Visit", "/visit"],
		secondary: ["Parents’ Information", "/parents"],
	},
	admissions: {
		title: "Speak with our admissions team.",
		text: "Contact us about admission, school fees or arranging a visit.",
		primary: ["Admission Enquiry", "/apply"],
		secondary: ["Arrange a Visit", "/visit"],
	},
	parents: {
		title: "Stay connected with Kingsbridge.",
		text: "Read our prospectus or contact us with your questions.",
		primary: ["View Prospectus", "/prospectus"],
		secondary: ["Contact Us", "/contact"],
	},
	news: {
		title: "Learn more about Kingsbridge.",
		text: "Discover our academic programmes and opportunities beyond the classroom.",
		primary: ["Academics", "/academics"],
		secondary: ["School Life", "/school-life"],
	},
};
export function NextAction({ context }: { context: keyof typeof closing }) {
	const item = closing[context];
	return (
		<section className="visit-cta contextual-cta">
			<div className="container">
				<div>
					<h2>{item.title}</h2>
					<p>{item.text}</p>
				</div>
				<div className="button-row">
					<ButtonLink href={item.primary[1]} variant="gold">
						{item.primary[0]}
					</ButtonLink>
					<TextLink href={item.secondary[1]} light>
						{item.secondary[0]}
					</TextLink>
				</div>
			</div>
		</section>
	);
}
