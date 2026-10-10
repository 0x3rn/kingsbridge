import type { Metadata } from "next";
import { FAQ } from "@/components/interactive";
import { Icon } from "@/components/ui";
import {
	Cards,
	JumpLinks,
	NextAction,
	PageOpening,
	Section,
} from "@/components/page-sections";
import { familyFaqs, termDates } from "@/lib/content";
export const metadata: Metadata = {
	title: "Parent information",
	description:
		"Fictional term dates, example school-day timings, uniform, meals, transport and family communication.",
};
export default function Parents() {
	return (
		<main id="main" className="reference-page">
			<PageOpening
				compact
				title="Term dates and everyday school information"
				label="Parent information"
				intro="Find the example calendar, school-day timings, uniform guidance and home–school communication approach in the Kingsbridge concept."
			>
				<dl className="compact-facts">
					<div>
						<dt>Arrival</dt>
						<dd>07:45</dd>
					</div>
					<div>
						<dt>Collection</dt>
						<dd>15:30</dd>
					</div>
					<div>
						<dt>Selected supervised clubs</dt>
						<dd>Until 16:30</dd>
					</div>
				</dl>
				<p className="small-copy">Example timings for the fictional school.</p>
			</PageOpening>
			<JumpLinks
				links={[
					{ label: "Term dates", href: "#calendar" },
					{ label: "Arrival and collection", href: "#arrival" },
					{ label: "Uniform and equipment", href: "#uniform" },
					{ label: "Meals and transport", href: "#meals" },
					{ label: "Learning and communication", href: "#communication" },
					{ label: "Questions", href: "#questions" },
				]}
			/>
			<Section
				id="calendar"
				title="Example term dates · 2026–2027"
				intro="These are fictional dates for the portfolio project. Do not use them to plan attendance at an actual school."
			>
				<a
					href="/downloads/kingsbridge-term-dates.ics"
					download
					className="button button-outline"
				>
					Download example calendar (.ics)
					<Icon name="download" />
				</a>
				<p className="small-copy calendar-note">
					The .ics file opens in a calendar application. Every event is labelled
					as a fictional example.
				</p>
				<section
					className="table-wrap"
					// biome-ignore lint/a11y/noNoninteractiveTabindex: The overflowing table must support keyboard scrolling.
					tabIndex={0}
					aria-label="Example term dates table; scroll horizontally on smaller screens"
				>
					<table className="term-table">
						<caption>Fictional Kingsbridge term dates · 2026–2027</caption>
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
			<Section
				id="arrival"
				title="Arrival and collection"
				intro="The model day begins with arrival from 07:45 and collection at 15:30. Selected supervised activities continue until 16:30. An operating school would confirm authorised collection arrangements with families."
			>
				<p className="small-copy">
					This project has no actual school office or collection service.
				</p>
			</Section>
			<Section id="uniform" title="Prepare for the school day" soft>
				<Cards
					columns={2}
					items={[
						{
							title: "Uniform",
							text: "The concept uniform uses a forest-green blazer, white shirt, college tie and charcoal trousers or skirt, with black shoes. Label clothing clearly.",
						},
						{
							title: "Equipment",
							text: "Bring a school bag, stationery, water bottle and the books needed for the day. Bring sports clothing when scheduled.",
						},
					]}
				/>
			</Section>
			<Section id="meals" title="Meals and transport">
				<Cards
					columns={2}
					items={[
						{
							title: "Meals",
							text: "Lunch, drinking water and time to rest support the school routine. An actual school would confirm meal provision and allergy arrangements before joining.",
						},
						{
							title: "Transport",
							text: "This project has no live transport service. A real service would need published routes, supervision, collection points and a contact process for delays.",
						},
					]}
				/>
			</Section>
			<Section id="communication" title="Keep home and school connected" soft>
				<Cards
					columns={2}
					items={[
						{
							title: "Progress",
							text: "The model includes termly reports, parent conversations and tutor contact to discuss strengths, difficulties and next steps.",
						},
						{
							title: "Attendance",
							text: "A real school would ask families to notify the office before registration about an absence and discuss planned absence in advance. There is no live office or absence-reporting service here.",
						},
						{
							title: "Homework",
							text: "Help the student organise time and equipment, explain the task and choose a first step. Let the work remain their own. Repeated difficulty is a useful topic for a teacher conversation.",
						},
						{
							title: "Phones and online life",
							text: "The model keeps personal phones away during the school day unless a teacher permits their use. Digital learning includes privacy, evaluating information and respectful communication.",
						},
					]}
				/>
			</Section>
			<Section id="questions" title="Questions from families">
				<FAQ items={familyFaqs} />
			</Section>
			<NextAction context="parents" />
		</main>
	);
}
