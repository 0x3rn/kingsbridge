import type { Metadata } from "next";
import { FAQ } from "@/components/interactive";
import { ButtonLink } from "@/components/ui";
import {
	Cards,
	JumpLinks,
	NextAction,
	PageOpening,
	Section,
} from "@/components/page-sections";
import {
	admissionFaqs,
	admissionProcess,
	documents,
	entryRequirements,
} from "@/lib/content";
export const metadata: Metadata = {
	alternates: { canonical: "/admissions" },
	title: "Admissions",
	description:
		"Admission requirements, entrance assessment, documents and school fees at Kingsbridge College.",
};
export default function Admissions() {
	return (
		<main id="main" className="decision-page">
			<PageOpening
				title="Admissions"
				label="Admissions"
				compact
				intro="We welcome enquiries from parents seeking admission into Kingsbridge College. Learn about our entry requirements, entrance assessment and the documents needed to begin the process."
			>
				<div className="button-row">
					<ButtonLink href="/apply">Admission Enquiry</ButtonLink>
					<ButtonLink href="/visit" variant="outline">
						Arrange a Visit
					</ButtonLink>
				</div>
				<dl className="compact-facts">
					<div>
						<dt>Junior entry</dt>
						<dd>JSS1 · after primary school</dd>
					</div>
					<div>
						<dt>Senior entry</dt>
						<dd>SS1 · after Junior Secondary</dd>
					</div>
					<div>
						<dt>Transfers</dt>
						<dd>Subject to available places</dd>
					</div>
				</dl>
			</PageOpening>
			<JumpLinks
				links={[
					{ label: "Entry Requirements", href: "#requirements" },
					{ label: "Admission Process", href: "#process" },
					{ label: "Required Documents", href: "#documents" },
					{ label: "School Fees", href: "#fees" },
					{ label: "Frequently Asked Questions", href: "#questions" },
				]}
			/>
			<Section id="requirements" title="Admission Requirements">
				<div className="info-grid columns-3">
					{entryRequirements.map((entry, index) => (
						<article
							className="editorial-card"
							id={
								index === 0
									? "junior-entry"
									: index === 1
										? "senior-entry"
										: "transfers"
							}
							key={entry.title}
						>
							<h3>{entry.title}</h3>
							<p>{entry.text}</p>
						</article>
					))}
				</div>
				<p className="section-intro reading-width">
					Admission into a final-year class requires individual consideration
					because of examination preparation and curriculum requirements.
				</p>
			</Section>
			<Section id="process" title="Our Admission Process" soft>
				<Cards
					columns={4}
					items={admissionProcess.map((item, index) => ({
						...item,
						title: `${index + 1}. ${item.title}`,
					}))}
				/>
			</Section>
			<Section
				id="documents"
				title="Documents Required for Admission"
				intro="Prepare the following documents for the admission process."
			>
				<ol className="document-checklist">
					{documents.map((document) => (
						<li key={document}>{document}</li>
					))}
				</ol>
				<p className="reading-width section-intro">
					Where additional support information is relevant, please discuss it
					directly with the admissions team.
				</p>
			</Section>
			<Section id="fees" title="School Fees" soft>
				<div className="prose reading-width">
					<p>
						Please contact the admissions office for the current fee schedule
						and details of the charges that apply to your child’s proposed
						class.
					</p>
					<p>
						The fee schedule should be reviewed alongside the admission
						information before a place is accepted.
					</p>
				</div>
				<div className="button-row">
					<ButtonLink href="/contact">Enquire About Fees</ButtonLink>
				</div>
			</Section>
			<Section id="questions" title="Frequently Asked Questions">
				<FAQ items={admissionFaqs} />
			</Section>
			<NextAction context="admissions" />
		</main>
	);
}
