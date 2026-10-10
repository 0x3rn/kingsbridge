import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/interactive";
import { Crest, Photo } from "@/components/ui";
import {
	dailySchedule,
	documents,
	entryRequirements,
	subjects,
	values,
} from "@/lib/content";
export const metadata: Metadata = {
	title: "School guide",
	description:
		"A printable guide to the fictional Kingsbridge school model, curriculum, school day and admissions.",
};
export default function Prospectus() {
	return (
		<main id="main" className="prospectus">
			<div className="prospectus-toolbar container">
				<span>School guide · Version 2 · 10 October 2026</span>
				<PrintButton />
			</div>
			<header className="prospectus-cover container">
				<div>
					<Crest />
					<p className="eyebrow">Kingsbridge College · School guide</p>
					<h1>A guide to Kingsbridge College</h1>
					<p>Junior and senior secondary · JSS1–SS3</p>
					<p>
						A fictional co-educational day school concept in Lagos, Nigeria.
					</p>
					<p className="small-copy">Version 2 · 10 October 2026</p>
				</div>
				<figure>
					<Photo
						name="campus"
						alt="AI-generated illustration of a fictional school campus."
						eager
					/>
					<figcaption>
						Illustrative campus concept · AI-generated image
					</figcaption>
				</figure>
			</header>
			<div className="prospectus-body">
				<nav className="guide-contents" aria-label="Guide contents">
					<h2>Contents</h2>
					<ol>
						{[
							["The school model", "model"],
							["Curriculum and year groups", "curriculum"],
							["A school day", "school-day"],
							["Admissions model", "admissions-model"],
							["About this project", "project"],
						].map(([label, id]) => (
							<li key={id}>
								<Link href={`#${id}`}>{label}</Link>
							</li>
						))}
					</ol>
				</nav>
				<section id="model">
					<p className="eyebrow">01 · The school model</p>
					<h2>The school model</h2>
					<p>
						Kingsbridge is imagined as a day school that combines subject
						learning, personal support and activities beyond lessons. Its
						six-year structure runs from junior to senior secondary.
					</p>
					{values.map((value) => (
						<div key={value.title} className="prospectus-value">
							<h3>{value.title}</h3>
							<p>{value.text}</p>
						</div>
					))}
				</section>
				<section id="curriculum">
					<p className="eyebrow">02 · Curriculum and year groups</p>
					<h2>Curriculum and year groups</h2>
					<p>
						JSS1–JSS3 builds broad foundations and routines for independent
						work. SS1–SS3 develops more focused subject study and examination
						preparation. The curriculum areas are illustrative, not a confirmed
						operational subject list.
					</p>
					<h3>Junior secondary</h3>
					<p>
						The junior years introduce new subjects while strengthening English,
						mathematics and learning habits. Students develop routines for
						equipment, homework and asking for help.
					</p>
					<h3>Senior secondary</h3>
					<p>
						The senior years develop deeper subject knowledge, a balanced
						programme and examination preparation. Guidance supports choices
						about further education, vocational routes and career interests.
					</p>
					<h3>Illustrative subject areas</h3>
					<dl className="guide-subjects">
						{subjects.map((subject) => (
							<div key={subject.name}>
								<dt>
									{subject.name} ·{" "}
									{subject.stage === "Both"
										? "Junior and senior"
										: subject.stage}
								</dt>
								<dd>{subject.detail}</dd>
							</div>
						))}
					</dl>
					<Link className="text-link no-print" href="/academics">
						Explore academics
					</Link>
				</section>
				<section id="school-day">
					<p className="eyebrow">03 · A school day</p>
					<h2>A school day</h2>
					<p>
						The model includes lessons, tutor contact, breaks, lunch and
						enrichment, with arrival from 07:45 and collection at 15:30.
						Selected activities continue until 16:30. All timings are examples.
					</p>
					{dailySchedule.map((item) => (
						<div className="prospectus-day" key={item.time}>
							<strong>{item.time}</strong>
							<div>
								<h3>{item.title}</h3>
								<p>{item.text}</p>
							</div>
						</div>
					))}
					<h3>Activities and support</h3>
					<p>
						Sport, arts, debate, coding and practical projects offer different
						ways to explore interests. Tutor contact provides a familiar point
						of support for routines, learning and wellbeing.
					</p>
					<Link className="text-link no-print" href="/parents">
						Parent information and example term dates
					</Link>
				</section>
				<section id="admissions-model">
					<p className="eyebrow">04 · Admissions model</p>
					<h2>Admissions model</h2>
					<p>
						The illustrative journey includes enquiry, visit, application and
						assessment, and written joining information if a place is offered.
						This website does not carry out live admissions.
					</p>
					{entryRequirements.map((entry) => (
						<div className="guide-entry" key={entry.title}>
							<h3>{entry.title}</h3>
							<p>{entry.text}</p>
						</div>
					))}
					<h3>Documents a family would prepare</h3>
					<ul>
						{documents.map((document) => (
							<li key={document}>{document}</li>
						))}
					</ul>
					<p>
						This demo does not collect those documents. There is no actual fee
						schedule or payment service.
					</p>
					<Link className="text-link no-print" href="/admissions">
						View admissions information
					</Link>
				</section>
				<section id="project" className="prospectus-disclosure">
					<p className="eyebrow">05 · About this project</p>
					<h2>About this project</h2>
					<p>
						Kingsbridge is not an operating school. Images, stories, dates and
						school arrangements are illustrative. Demo forms create local
						summaries and do not send messages, book visits or collect payments.
					</p>
					<p className="small-copy">
						Guide version 2 · Reviewed 10 October 2026 ·
						kingsbridgecollege.corstack.dev
					</p>
				</section>
			</div>
		</main>
	);
}
