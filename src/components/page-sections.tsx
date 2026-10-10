import Link from "next/link";
import type { ReactNode } from "react";
import { ButtonLink, Eyebrow, Photo, TextLink } from "./ui";

export function PageOpening({
	title,
	intro,
	label,
	image,
	compact = false,
	children,
}: {
	title: string;
	intro: string;
	label: string;
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
					<Eyebrow>{label}</Eyebrow>
					<h1>{title}</h1>
					<p>{intro}</p>
					{children}
				</div>
				{image && (
					<figure>
						<Photo
							name={image}
							alt={`AI-generated illustration of the fictional Kingsbridge ${image === "campus" ? "grounds" : image}.`}
							className="page-hero-photo"
							eager
						/>
						<figcaption>
							Illustrative campus concept · AI-generated image
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
	children: ReactNode;
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
				["School type", "Co-educational day school concept"],
				["Year groups", "JSS1–JSS3 and SS1–SS3"],
				["Location", "Imagined in Lagos, Nigeria"],
				["Learning journey", "Six years of secondary education"],
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
					title: "Junior secondary",
					years: "JSS1–JSS3",
					href: "/academics/junior-secondary",
					image: "science",
					text: "Build foundations in English, mathematics, science and other subject areas while learning new routines and growing in independence.",
				},
				{
					title: "Senior secondary",
					years: "SS1–SS3",
					href: "/academics/senior-secondary",
					image: "library",
					text: "Develop deeper subject knowledge, plan a balanced programme and prepare for examinations and the next stage of education.",
				},
			].map((stage) => (
				<Link href={stage.href} className="programme-card" key={stage.title}>
					<Photo
						name={stage.image}
						alt={`Illustrative ${stage.title} learning space.`}
					/>
					<div className="programme-content">
						<span className="stage-label">{stage.years}</span>
						<h3>{stage.title}</h3>
						<p className="programme-description">{stage.text}</p>
						<span className="programme-link">Explore {stage.title}</span>
					</div>
				</Link>
			))}
		</div>
	);
}
const closing = {
	joining: {
		title: "Explore joining Kingsbridge",
		text: "Read about entry points, assessments and the steps in the model admissions process.",
		primary: ["View admissions", "/admissions"],
		secondary: ["Read the school guide", "/prospectus"],
	},
	learning: {
		title: "Find the right point of entry",
		text: "See the requirements for junior entry, senior entry and transfers.",
		primary: ["View entry requirements", "/admissions#requirements"],
		secondary: ["Explore school life", "/school-life"],
	},
	life: {
		title: "See how the school day fits together",
		text: "Explore the learning spaces and practical arrangements in this school concept.",
		primary: ["View campus gallery", "/school-life#gallery"],
		secondary: ["Parent information", "/parents"],
	},
	admissions: {
		title: "Try the next step",
		text: "Explore the demo form and create a local admissions summary.",
		primary: ["Try the admissions form", "/apply"],
		secondary: ["Try the visit planner", "/visit#planner"],
	},
	parents: {
		title: "Find the information you need",
		text: "Browse the school guide or explore the demo enquiry form.",
		primary: ["Read the school guide", "/prospectus"],
		secondary: ["Try the enquiry form", "/contact"],
	},
	news: {
		title: "Explore learning at Kingsbridge",
		text: "Find out how the curriculum develops from junior to senior secondary.",
		primary: ["View academics", "/academics"],
		secondary: ["More news", "/news"],
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
