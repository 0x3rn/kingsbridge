import type { Metadata } from "next";
import { FAQ } from "@/components/interactive";
import { Icon } from "@/components/ui";
import {
	JumpLinks,
	NextAction,
	PageOpening,
	Section,
} from "@/components/page-sections";
import { familyFaqs, termDates } from "@/lib/content";
export const metadata: Metadata = {
	alternates: { canonical: "/parents" },
	title: "Parents’ Information",
	description:
		"Term dates, school hours, uniform, materials, attendance and parent–teacher communication.",
};
export default function Parents() {
	return (
		<main id="main" className="reference-page">
			<PageOpening
				compact
				title="Information for Parents"
				label="Parents"
				intro="Find term dates, school hours, uniform requirements and practical information to help you prepare your child for school."
			>
				<dl className="compact-facts" id="hours">
					<div>
						<dt>Arrival</dt>
						<dd>07:45</dd>
					</div>
					<div>
						<dt>Closing</dt>
						<dd>15:30</dd>
					</div>
					<div>
						<dt>Selected supervised activities</dt>
						<dd>Until 16:30</dd>
					</div>
				</dl>
			</PageOpening>
			<JumpLinks
				links={[
					{ label: "Term Dates", href: "#calendar" },
					{ label: "School Hours", href: "#hours" },
					{ label: "Uniform and Materials", href: "#uniform" },
					{ label: "Meals", href: "#meals" },
					{ label: "Attendance", href: "#attendance" },
					{ label: "Parent–Teacher Communication", href: "#communication" },
				]}
			/>
			<Section
				id="calendar"
				title="Term Dates: 2026/2027 Academic Session"
				intro="Please refer to the term calendar when planning school attendance and family arrangements."
			>
				<a
					href="/downloads/kingsbridge-term-dates.ics"
					download
					className="button button-outline"
				>
					Download Term Calendar
					<Icon name="download" />
				</a>
				<section
					className="table-wrap"
					// biome-ignore lint/a11y/noNoninteractiveTabindex: The overflowing table must support keyboard scrolling.
					tabIndex={0}
					aria-label="Term dates table; scroll horizontally on smaller screens"
				>
					<table className="term-table">
						<caption>Kingsbridge College · 2026/2027 Academic Session</caption>
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
									<td>{term.break}</td>
								</tr>
							))}
						</tbody>
					</table>
				</section>
			</Section>
			<Section id="arrival" title="Arrival and Collection" soft>
				<div className="prose reading-width">
					<p>
						Students should arrive on time and be prepared for the first lesson.
						Parents should make arrangements for collection at the end of the
						school day.
					</p>
					<p>
						Please notify the school of changes to the person authorised to
						collect your child.
					</p>
				</div>
			</Section>
			<Section
				id="uniform"
				title="School Uniform"
				intro="Students are expected to attend school in the prescribed uniform, with neat clothing and appropriate black shoes."
			>
				<ul className="practical-checklist">
					<li>Forest-green blazer</li>
					<li>White shirt</li>
					<li>College tie</li>
					<li>Charcoal trousers or skirt</li>
				</ul>
				<p>Please label clothing and personal belongings clearly.</p>
			</Section>
			<Section id="materials" title="What Students Should Bring" soft>
				<ul className="practical-checklist">
					<li>School bag</li>
					<li>Required textbooks and notebooks</li>
					<li>Writing materials</li>
					<li>Water bottle</li>
					<li>Sportswear when scheduled</li>
				</ul>
				<p className="reading-width">
					Students should check their timetable and prepare the materials needed
					for each school day.
				</p>
			</Section>
			<Section
				id="meals"
				title="Meals and Dietary Information"
				intro="Please inform the school of any food allergies or dietary requirements that may affect your child during the school day."
			/>
			<Section id="attendance" title="Attendance and Punctuality" soft>
				<div className="prose reading-width">
					<p>
						Regular attendance and punctuality support steady academic progress.
						Please notify the school when your child will be absent and provide
						the reason.
					</p>
					<p>
						Requests for planned absence should be discussed with the school in
						advance.
					</p>
				</div>
			</Section>
			<Section id="homework" title="Supporting Learning at Home">
				<div className="prose reading-width">
					<p>
						A regular study routine and a suitable place to work help students
						complete assignments and revise effectively.
					</p>
					<p>
						Encourage your child to organise their materials and complete their
						own work. If assignments repeatedly cause difficulty, discuss the
						concern with the subject teacher.
					</p>
				</div>
			</Section>
			<Section id="communication" title="Working with Parents" soft>
				<div className="prose reading-width">
					<p>
						We communicate with parents through progress reports, parent–teacher
						discussions and direct contact where needed.
					</p>
					<p>
						Subject-related questions should be discussed with the subject
						teacher. Wider concerns about schoolwork, behaviour or wellbeing can
						be raised with the class teacher.
					</p>
				</div>
			</Section>
			<Section id="phones" title="Mobile Phones and Responsible Technology Use">
				<div className="prose reading-width">
					<p>
						Students are expected to follow the school’s rules on personal
						devices. Classroom use of technology must be authorised by a
						teacher.
					</p>
					<p>
						We encourage responsible online behaviour, respect for others and
						care with personal information.
					</p>
				</div>
			</Section>
			<Section id="questions" title="Frequently Asked Questions" soft>
				<FAQ items={familyFaqs} />
			</Section>
			<NextAction context="parents" />
		</main>
	);
}
