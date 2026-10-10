import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/interactive";
import {
	ButtonLink,
	Eyebrow,
	Icon,
	PageHero,
	SectionHeading,
	TextLink,
	VisitCTA,
} from "@/components/ui";
import { termDates } from "@/lib/content";
export const metadata: Metadata = {
	alternates: { canonical: "/parents" },
	title: "For our families",
	description:
		"Practical information for the Kingsbridge community: calendar, uniform, attendance, communication and the school day.",
};
export default function Parents() {
	return (
		<main id="main">
			<PageHero
				eyebrow="For our families"
				title={
					<>
						A shared journey.
						<br />
						<em>A little everyday support.</em>
					</>
				}
				description="The practical things that help school life run smoothly, and the conversations that keep home and school connected."
			/>
			<nav
				className="page-anchor-nav container"
				aria-label="Family information"
			>
				<Link href="#calendar">Term calendar</Link>
				<Link href="#essentials">Everyday essentials</Link>
				<Link href="#communication">Working together</Link>
				<Link href="#questions">Family questions</Link>
			</nav>
			<section className="section" id="calendar">
				<div className="container">
					<SectionHeading
						eyebrow="Plan the year"
						title={
							<>
								Room for learning.
								<br />
								<em>Time to recharge.</em>
							</>
						}
						text="Illustrative term dates for the 2026–2027 school year. These dates belong to the portfolio concept and are not a real school calendar."
					>
						<a
							href="/downloads/kingsbridge-term-dates.ics"
							download
							className="button button-outline"
						>
							Download calendar <Icon name="download" />
						</a>
					</SectionHeading>
					<div className="table-wrap">
						<table className="term-table">
							<caption className="sr-only">
								Illustrative Kingsbridge College term dates 2026–2027
							</caption>
							<thead>
								<tr>
									<th scope="col">Term</th>
									<th scope="col">Begins</th>
									<th scope="col">Ends</th>
									<th scope="col">Half-term break</th>
								</tr>
							</thead>
							<tbody>
								{termDates.map((term) => (
									<tr key={term.term}>
										<th scope="row">{term.term}</th>
										<td>{term.start}</td>
										<td>{term.finish}</td>
										<td>{term.break.replace("Half term: ", "")}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p className="small-copy calendar-note">
						Public holidays and exceptional changes would be communicated by a
						real school separately. The downloadable calendar labels every entry
						as a fictional example.
					</p>
				</div>
			</section>
			<section className="section soft-section" id="essentials">
				<div className="container">
					<SectionHeading
						eyebrow="Everyday essentials"
						title={
							<>
								A calmer morning.
								<br />
								<em>A better school day.</em>
							</>
						}
					/>
					<div className="three-grid">
						<article className="editorial-card">
							<Icon name="clock" />
							<h3>Arrival & collection</h3>
							<p>
								Our model day begins with arrival from 7:45 and registration
								before morning lessons. Normal collection is at 15:30, with
								selected supervised activities continuing until 16:30.
							</p>
							<p>
								Students should arrive ready for the first session. In a real
								school, authorised collection arrangements would be agreed with
								the office and any change communicated before dismissal.
							</p>
						</article>
						<article className="editorial-card">
							<Icon name="leaf" />
							<h3>Uniform & equipment</h3>
							<p>
								The Kingsbridge concept uniform pairs a forest-green blazer with
								a white shirt, a college tie and charcoal trousers or a skirt.
								Comfortable black shoes and clearly labelled clothing make the
								day easier.
							</p>
							<p>
								Students carry a school bag, stationery, a water bottle and the
								books needed for the day. Sports clothing is brought for
								scheduled physical education and after-school activities.
							</p>
						</article>
						<article className="editorial-card">
							<Icon name="sun" />
							<h3>Meals & movement</h3>
							<p>
								A balanced lunch, time outdoors and access to drinking water
								support the school-day routine. Food preferences and allergies
								would be discussed with the appropriate school team before
								joining.
							</p>
							<p>
								Transport arrangements should be confirmed in writing, including
								routes, supervision, collection points and a contact process for
								delays. This concept does not operate a live transport service.
							</p>
						</article>
					</div>
				</div>
			</section>
			<section className="section" id="communication">
				<div className="container split-layout">
					<div>
						<Eyebrow>Working together</Eyebrow>
						<h2>
							The best support
							<br />
							is <em>connected.</em>
						</h2>
						<p>
							Families and teachers see different parts of a student’s life.
							Sharing what matters helps create a fuller picture.
						</p>
						<ButtonLink href="/contact">Explore a family enquiry</ButtonLink>
					</div>
					<div className="prose">
						<h3>Regular, useful communication</h3>
						<p>
							Termly reports explain progress, strengths and next steps. Parent
							conversations give families time to discuss learning in more
							depth, while tutor contact helps raise everyday questions early.
						</p>
						<h3>Attendance & punctuality</h3>
						<p>
							Steady attendance protects continuity in learning. In a real
							school, families would notify the office before registration if a
							student is absent, explain the reason and share any information
							needed for support. Planned absence requests should be discussed
							in advance.
						</p>
						<h3>Homework & independence</h3>
						<p>
							A quiet place to work, a predictable routine and a quick check of
							the student’s planner can make a difference. Families do not need
							to become subject teachers; encouragement, questions and help with
							organisation are often more useful than completing a task for the
							student.
						</p>
						<h3>Digital life & personal devices</h3>
						<p>
							Students learn how to evaluate information, protect personal
							details and communicate respectfully online. Personal phones would
							remain away during the school day unless a teacher authorises
							their use for a specific learning purpose. Urgent family contact
							should go through the school office in a live setting.
						</p>
					</div>
				</div>
			</section>
			<section className="section faq-section" id="questions">
				<div className="container faq-layout">
					<div>
						<Eyebrow>Family questions</Eyebrow>
						<h2>
							Small questions.
							<br />
							<em>Useful answers.</em>
						</h2>
						<TextLink href="/policies">Privacy & safeguarding</TextLink>
					</div>
					<FAQ
						items={[
							{
								question: "Who should I speak to about a learning concern?",
								answer:
									"A subject question begins with the relevant teacher. A concern that crosses subjects, affects routines or involves wellbeing starts with the student’s tutor. In a real school, the office would help families reach the appropriate team and arrange a conversation.",
							},
							{
								question: "How can I help without doing the homework?",
								answer:
									"Ask the student to explain the task, describe what they already know and identify a useful first step. Help them organise time and equipment, then let the work remain their own. If a task repeatedly causes difficulty, share that pattern with the teacher.",
							},
							{
								question:
									"What should a student do if they feel worried or unsafe?",
								answer:
									"Students should speak to a trusted adult, such as their tutor or another teacher. A school should make its reporting routes clear, listen without dismissing a concern and involve its safeguarding team where appropriate. This fictional website does not provide a live reporting service.",
							},
							{
								question: "Can I use these calendar dates for a real school?",
								answer:
									"No. These dates are examples for the Kingsbridge portfolio project. Always use the calendar published by the actual school your child attends.",
							},
						]}
					/>
				</div>
			</section>
			<VisitCTA />
		</main>
	);
}
