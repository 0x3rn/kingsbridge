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
	feeCategories,
} from "@/lib/content";
export const metadata: Metadata = {
	title: "Admissions",
	description:
		"Model JSS1, SS1 and transfer requirements, assessment, documents and school cost information. No live admissions.",
};
export default function Admissions() {
	return (
		<main id="main" className="decision-page">
			<PageOpening
				title="Admissions: entry requirements and next steps"
				label="Admissions"
				compact
				intro="Explore the model admissions process for junior entry, senior entry and transfers. See what an assessment involves and which records a family would prepare."
			>
				<div className="button-row">
					<ButtonLink href="#requirements">View entry requirements</ButtonLink>
					<ButtonLink href="/apply" variant="outline">
						Try the admissions form
					</ButtonLink>
				</div>
				<p className="demo-note">
					Kingsbridge is a fictional school. There are no live admissions,
					application deadlines, fees or offers on this website.
				</p>
				<dl className="compact-facts">
					<div>
						<dt>Junior entry</dt>
						<dd>JSS1 · after primary school</dd>
					</div>
					<div>
						<dt>Senior entry</dt>
						<dd>SS1 · after junior secondary</dd>
					</div>
					<div>
						<dt>Transfers</dt>
						<dd>Subject to model requirements</dd>
					</div>
				</dl>
			</PageOpening>
			<JumpLinks
				links={[
					{ label: "Requirements", href: "#requirements" },
					{ label: "Process", href: "#process" },
					{ label: "Documents", href: "#documents" },
					{ label: "Fees", href: "#fees" },
					{ label: "FAQs", href: "#questions" },
				]}
			/>
			<Section id="requirements" title="Choose the relevant entry point">
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
			</Section>
			<Section id="process" title="How joining a school would work" soft>
				<Cards
					columns={4}
					items={admissionProcess.map((item, index) => ({
						...item,
						title: `${index + 1}. ${item.title}`,
					}))}
				/>
				<p className="demo-note">
					These steps describe the fictional model. The demo form only creates a
					local summary.
				</p>
			</Section>
			<Section
				id="documents"
				title="Records a family would prepare"
				intro="For a real application, these records help a school understand prior learning and plan a suitable placement. This demo does not collect them."
			>
				<ol className="document-checklist">
					{documents.map((document) => (
						<li key={document}>{document}</li>
					))}
				</ol>
			</Section>
			<Section
				id="fees"
				title="Understanding school costs"
				intro="This fictional school has no fee schedule and accepts no payments. A real fee guide should explain the following costs before a family accepts a place."
				soft
			>
				<Cards columns={4} items={feeCategories} />
			</Section>
			<Section id="questions" title="Admissions questions">
				<FAQ items={admissionFaqs} />
			</Section>
			<NextAction context="admissions" />
		</main>
	);
}
