"use client";

import { motion, MotionConfig } from "framer-motion";
import { useId, useRef, useState, type ReactNode } from "react";
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
export function SubjectExplorer({
	initialStage = "All Levels",
}: {
	initialStage?: string;
}) {
	const [group, setGroup] = useState("All Categories");
	const [stage, setStage] = useState(initialStage);
	const filtered = subjects.filter(
		(subject) =>
			(group === "All Categories" || subject.group === group) &&
			(stage === "All Levels" ||
				subject.stage === stage ||
				subject.stage === "Both"),
	);
	return (
		<>
			<div className="filter-bar">
				<fieldset className="filter-buttons">
					<legend>Subject Category</legend>
					{[
						"All Categories",
						"Science and Technology",
						"Languages",
						"Humanities and Social Sciences",
						"Creative and Practical Subjects",
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
					<span>School Level</span>
					<select
						value={stage}
						onChange={(event) => setStage(event.target.value)}
					>
						<option>All Levels</option>
						<option value="Junior">Junior Secondary</option>
						<option value="Senior">Senior Secondary</option>
					</select>
				</label>
			</div>
			<p className="small-copy results-count" role="status">
				Showing {filtered.length} learning areas ·{" "}
				{stage === "All Levels" ? "All Levels" : `${stage} Secondary`} · {group}
			</p>
			<button
				type="button"
				className="text-button filter-reset"
				onClick={() => {
					setGroup("All Categories");
					setStage(initialStage);
				}}
			>
				Clear Filters
			</button>
			{!filtered.length && (
				<p>
					No learning areas match your selection. Choose another category or
					clear the filters.
				</p>
			)}
			<div className="subject-grid">
				{filtered.map((subject) => (
					<article key={subject.name} className="subject-card">
						<div className="subject-card-top">
							<span>{subject.group}</span>
							<Icon
								name={
									subject.group === "Science and Technology"
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
								? "Junior and Senior Secondary"
								: `${subject.stage} Secondary`}
						</span>
					</article>
				))}
			</div>
		</>
	);
}
export function Journal() {
	const [category, setCategory] = useState("All News");
	const [query, setQuery] = useState("");
	const filtered = news.filter(
		(article) =>
			(category === "All News" || article.category === category) &&
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
						"All News",
						"Academics",
						"School Life",
						"Sports",
						"Student Guidance",
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
					<span className="sr-only">Search News</span>
					<Icon name="search" />
					<input
						type="search"
						placeholder="Search by topic or title"
						value={query}
						onChange={(event) => setQuery(event.target.value)}
					/>
				</label>
			</div>
			<button
				type="button"
				className="text-button filter-reset"
				onClick={() => {
					setCategory("All News");
					setQuery("");
				}}
			>
				Clear Filters
			</button>
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
					<h3>No news items found.</h3>
					<p>Try another search or clear your filters.</p>
					<button
						type="button"
						className="button button-primary"
						onClick={() => {
							setCategory("All News");
							setQuery("");
						}}
					>
						Clear Filters <Icon />
					</button>
				</div>
			)}
		</>
	);
}
const galleryViews = [
	{
		name: "School grounds",
		image: "campus",
		alt: "Tree-lined school grounds.",
		text: "Walkways, green spaces and shared areas for students throughout the school day.",
	},
	{
		name: "Science laboratory",
		image: "science",
		alt: "Practical science classroom.",
		text: "A space for practical science, experiments and group investigations.",
	},
	{
		name: "Library",
		image: "library",
		alt: "Students discussing a book in the library.",
		text: "A setting for reading, research and quiet study.",
	},
	{
		name: "Sports court",
		image: "sports",
		alt: "Students playing basketball outdoors.",
		text: "An outdoor space for basketball, physical activity and team practice.",
	},
];
export function CampusTour({
	label = "View Campus Gallery",
}: {
	label?: string;
}) {
	const [stop, setStop] = useState(0);
	const dialog = useRef<HTMLDialogElement>(null);
	const trigger = useRef<HTMLButtonElement>(null);
	const id = useId();
	const active = galleryViews[stop];
	return (
		<>
			<button
				ref={trigger}
				type="button"
				className="tour-trigger"
				aria-haspopup="dialog"
				aria-controls={`gallery-${id}`}
				onClick={() => dialog.current?.showModal()}
			>
				<span className="tour-play">
					<Icon name="diagonal" />
				</span>
				<span>{label}</span>
			</button>
			<dialog
				ref={dialog}
				id={`gallery-${id}`}
				className="tour-dialog"
				aria-labelledby={`gallery-title-${id}`}
				onClose={() => trigger.current?.focus()}
			>
				<div className="dialog-top">
					<h2 id={`gallery-title-${id}`}>Our Campus</h2>
					<button
						type="button"
						className="icon-button"
						aria-label="Close Campus Gallery"
						onClick={() => dialog.current?.close()}
					>
						<Icon name="close" />
					</button>
				</div>
				<fieldset className="gallery-controls">
					<legend>Campus spaces</legend>
					{galleryViews.map((view, index) => (
						<label
							className={stop === index ? "gallery-selected" : ""}
							key={view.name}
						>
							<input
								type="radio"
								name={`gallery-view-${id}`}
								value={index}
								checked={stop === index}
								onChange={() => setStop(index)}
							/>
							{view.name}
						</label>
					))}
				</fieldset>
				<Photo name={active.image} alt={active.alt} sizes="90vw" />
				<div aria-live="polite">
					<h3>{active.name}</h3>
					<p>{active.text}</p>
				</div>
			</dialog>
		</>
	);
}
export function Newsletter() {
	const [message, setMessage] = useState("");
	return (
		<details className="newsletter newsletter-demo">
			<summary>School News and Updates</summary>
			<div className="newsletter-content">
				<p>
					Receive updates on school activities, announcements and upcoming
					events.
				</p>
				<form
					onSubmit={(event) => {
						event.preventDefault();
						setMessage("Preview complete. No subscription has been created.");
						event.currentTarget.reset();
					}}
				>
					<label htmlFor="newsletter-email">Email address</label>
					<div className="newsletter-input">
						<input
							id="newsletter-email"
							type="email"
							required
							placeholder="parent@example.com"
							autoComplete="off"
						/>
						<button type="submit">Subscribe</button>
					</div>
					{message && (
						<p className="form-feedback" role="status">
							{message}
						</p>
					)}
				</form>
			</div>
		</details>
	);
}
export function PrintButton() {
	return (
		<button
			type="button"
			className="button button-primary"
			onClick={() => window.print()}
		>
			Print or Save as PDF <Icon name="download" />
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
						await navigator.clipboard.writeText(window.location.href);
						setMessage(`Link copied: ${title}`);
					} catch {
						setMessage(
							"You can share this story by copying the address from your browser.",
						);
					}
				}}
			>
				Copy Link <Icon name="diagonal" />
			</button>
			{message && (
				<p className="small-copy" role="status">
					{message}
				</p>
			)}
		</div>
	);
}
