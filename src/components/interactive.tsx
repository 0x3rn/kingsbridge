"use client";

import { motion, MotionConfig } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";
import { admissionFaqs, news, subjects } from "@/lib/content";
import { Icon, NewsCard, Photo } from "./ui";

export function Reveal({
	children,
	className = "",
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<MotionConfig reducedMotion="user">
			<motion.div
				className={className}
				initial={{ y: 18 }}
				whileInView={{ y: 0 }}
				viewport={{ once: true, amount: 0.12 }}
				transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
			>
				{children}
			</motion.div>
		</MotionConfig>
	);
}
export function FAQ({
	items = admissionFaqs,
}: {
	items?: { question: string; answer: string }[];
}) {
	return (
		<div className="faq-list">
			{items.map((item, index) => (
				<details key={item.question} className="faq-item">
					<summary>
						<span className="faq-index">
							{String(index + 1).padStart(2, "0")}
						</span>
						<span>{item.question}</span>
						<Icon name="plus" />
					</summary>
					<div className="faq-answer">
						<p>{item.answer}</p>
					</div>
				</details>
			))}
		</div>
	);
}
export function SubjectExplorer() {
	const [group, setGroup] = useState("All subjects");
	const [stage, setStage] = useState("All stages");
	const filtered = subjects.filter(
		(subject) =>
			(group === "All subjects" || subject.group === group) &&
			(stage === "All stages" ||
				subject.stage === stage ||
				subject.stage === "Both"),
	);
	return (
		<>
			<div className="filter-bar">
				<fieldset className="filter-buttons">
					<legend className="sr-only">Filter by subject area</legend>
					{[
						"All subjects",
						"STEM",
						"Languages",
						"Humanities",
						"Creative & practical",
					].map((item) => (
						<button
							type="button"
							className={group === item ? "filter-active" : ""}
							aria-pressed={group === item}
							key={item}
							onClick={() => setGroup(item)}
						>
							{item}
						</button>
					))}
				</fieldset>
				<label className="select-label">
					<span className="sr-only">Filter by school stage</span>
					<select
						value={stage}
						onChange={(event) => setStage(event.target.value)}
					>
						<option>All stages</option>
						<option>Junior</option>
						<option>Senior</option>
					</select>
				</label>
			</div>
			<p className="small-copy results-count" role="status">
				Showing {filtered.length} subject areas
			</p>
			<div className="subject-grid">
				{filtered.map((subject) => (
					<article key={subject.name} className="subject-card">
						<div className="subject-card-top">
							<span>{subject.group}</span>
							<Icon
								name={
									subject.group === "STEM"
										? "sun"
										: subject.group === "Languages"
											? "book"
											: "leaf"
								}
							/>
						</div>
						<h3>{subject.name}</h3>
						<p>{subject.detail}</p>
						<span className="subject-stage">
							{subject.stage === "Both"
								? "Junior & senior secondary"
								: `${subject.stage} secondary`}
						</span>
					</article>
				))}
			</div>
		</>
	);
}
export function Journal() {
	const [category, setCategory] = useState("All stories");
	const [query, setQuery] = useState("");
	const filtered = news.filter(
		(article) =>
			(category === "All stories" || article.category === category) &&
			`${article.title} ${article.excerpt}`
				.toLowerCase()
				.includes(query.toLowerCase()),
	);
	return (
		<>
			<div className="filter-bar">
				<fieldset className="filter-buttons">
					<legend className="sr-only">Filter stories</legend>
					{[
						"All stories",
						"Learning",
						"School life",
						"Sport",
						"College notes",
					].map((item) => (
						<button
							type="button"
							key={item}
							className={category === item ? "filter-active" : ""}
							aria-pressed={category === item}
							onClick={() => setCategory(item)}
						>
							{item}
						</button>
					))}
				</fieldset>
				<label className="journal-search">
					<span className="sr-only">Search stories</span>
					<Icon name="search" />
					<input
						type="search"
						placeholder="Search stories"
						value={query}
						onChange={(event) => setQuery(event.target.value)}
					/>
				</label>
			</div>
			<p className="small-copy results-count" role="status">
				{filtered.length} {filtered.length === 1 ? "story" : "stories"}
			</p>
			{filtered.length ? (
				<div className="news-grid journal-grid">
					{filtered.map((article) => (
						<NewsCard key={article.slug} article={article} />
					))}
				</div>
			) : (
				<div className="empty-state">
					<h3>A new search might help.</h3>
					<p>Try another phrase or explore all our stories.</p>
					<button
						type="button"
						className="button button-primary"
						onClick={() => {
							setCategory("All stories");
							setQuery("");
						}}
					>
						Reset filters <Icon />
					</button>
				</div>
			)}
		</>
	);
}
const tourStops = [
	{
		name: "The grounds",
		image: "campus",
		alt: "A tree-lined school path and warm brick buildings",
		text: "A welcoming place to begin. Open walkways, green spaces and shared gathering points give the campus a sense of calm between the energy of lessons.",
	},
	{
		name: "The laboratory",
		image: "science",
		alt: "A bright science laboratory with students working together",
		text: "A place to test ideas. Practical science spaces help students move from a question to an experiment, with safe routines and equipment suited to their stage of learning.",
	},
	{
		name: "The library",
		image: "library",
		alt: "Students reading and discussing ideas in the library",
		text: "A little room to think. Our library concept brings together reading, research and quiet study, with spaces for both independent work and small-group conversations.",
	},
	{
		name: "The court",
		image: "sports",
		alt: "Students enjoying a game of basketball outdoors",
		text: "Space to move and belong. Outdoor sport gives students a chance to develop skills, find their team and enjoy the school day from a different perspective.",
	},
];
export function CampusTour() {
	const [stop, setStop] = useState(0);
	const dialog = useRef<HTMLDialogElement>(null);
	const active = tourStops[stop];
	return (
		<>
			<button
				type="button"
				className="tour-trigger"
				onClick={() => dialog.current?.showModal()}
			>
				<span className="tour-play">
					<Icon name="diagonal" />
				</span>
				<span>
					Take a closer look<small>Explore our campus</small>
				</span>
			</button>
			<dialog
				ref={dialog}
				className="tour-dialog"
				aria-labelledby="tour-heading"
			>
				<div className="dialog-top">
					<div>
						<span className="eyebrow">A glimpse of Kingsbridge</span>
						<h2 id="tour-heading">A place for possibility.</h2>
					</div>
					<button
						type="button"
						className="icon-button"
						aria-label="Close campus tour"
						onClick={() => dialog.current?.close()}
					>
						<Icon name="close" />
					</button>
				</div>
				<fieldset className="filter-buttons">
					<legend className="sr-only">Campus spaces</legend>
					{tourStops.map((item, index) => (
						<button
							type="button"
							key={item.name}
							aria-pressed={stop === index}
							className={stop === index ? "filter-active" : ""}
							onClick={() => setStop(index)}
						>
							{item.name}
						</button>
					))}
				</fieldset>
				<Photo name={active.image} alt={active.alt} sizes="90vw" />
				<h3>{active.name}</h3>
				<p>{active.text}</p>
				<p className="small-copy">
					Illustrative campus imagery created for this portfolio concept.
				</p>
			</dialog>
		</>
	);
}
export function Newsletter() {
	const [message, setMessage] = useState("");
	return (
		<div className="newsletter">
			<div>
				<span className="eyebrow eyebrow-light">The Kingsbridge letter</span>
				<h3>
					A little inspiration.
					<br />A closer connection.
				</h3>
				<p>Ideas for learning, stories from school and things worth sharing.</p>
			</div>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					setMessage(
						"Thanks for exploring the newsletter. This is a portfolio demo; your email has not been saved or subscribed.",
					);
					event.currentTarget.reset();
				}}
			>
				<label htmlFor="newsletter-email">Your email address</label>
				<div className="newsletter-input">
					<input
						id="newsletter-email"
						type="email"
						required
						placeholder="you@example.com"
					/>
					<button type="submit" aria-label="Try newsletter subscription">
						<Icon />
					</button>
				</div>
				<p className="small-copy">Demo subscription · no emails will be sent</p>
				{message && (
					<p className="form-feedback" role="status">
						{message}
					</p>
				)}
			</form>
		</div>
	);
}
export function PrintButton() {
	return (
		<button
			type="button"
			className="button button-primary"
			onClick={() => window.print()}
		>
			Print or save as PDF <Icon name="download" />
		</button>
	);
}
export function ShareButton({ title }: { title: string }) {
	const [message, setMessage] = useState("");
	return (
		<div className="share-control">
			<button
				type="button"
				className="button button-outline"
				onClick={async () => {
					try {
						if (navigator.share) {
							await navigator.share({ title, url: window.location.href });
						} else {
							await navigator.clipboard.writeText(window.location.href);
							setMessage("Link copied.");
						}
					} catch {
						setMessage(
							"You can share this story by copying the address from your browser.",
						);
					}
				}}
			>
				Share this story <Icon name="diagonal" />
			</button>
			{message && (
				<p className="small-copy" role="status">
					{message}
				</p>
			)}
		</div>
	);
}
