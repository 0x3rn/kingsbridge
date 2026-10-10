import type { Metadata } from "next";
import { SubjectExplorer } from "@/components/interactive";
import { ButtonLink } from "@/components/ui";
import {
	Cards,
	JumpLinks,
	NextAction,
	PageOpening,
	Section,
	StageCards,
} from "@/components/page-sections";
export const metadata: Metadata = {
	title: "Academics",
	description:
		"Explore the illustrative JSS1–SS3 curriculum, subjects, teaching, assessment and support.",
};
export default function Academics() {
	return (
		<main id="main">
			<PageOpening
				title="A clear path through secondary learning"
				label="Academics"
				image="science"
				intro="Explore the Kingsbridge model curriculum from JSS1 to SS3: broad foundations in junior secondary, more focused subject choices in senior secondary, and regular feedback throughout."
			>
				<div className="button-row">
					<ButtonLink href="#subjects">Browse subject areas</ButtonLink>
				</div>
			</PageOpening>
			<JumpLinks
				links={[
					{ label: "Education stages", href: "#stages" },
					{ label: "Subject areas", href: "#subjects" },
					{ label: "Teaching and support", href: "#teaching" },
				]}
			/>
			<Section
				id="stages"
				title="How the curriculum develops"
				intro="The model follows a six-year Nigerian secondary-school structure: three junior years and three senior years. English and mathematics provide foundations across both stages. Science, languages, humanities and practical learning broaden the programme."
			>
				<p className="reading-width section-intro">
					Senior students plan a balanced combination of subjects with guidance
					from teachers and families. The concept includes examination
					preparation associated with routes such as WAEC and NECO; it does not
					claim accreditation or actual examination provision.
				</p>
				<StageCards />
			</Section>
			<Section
				id="subjects"
				title="Explore the subject areas"
				intro="Filter the illustrative curriculum by stage or subject area. These are broad areas in the school concept, rather than a confirmed examination subject list."
				soft
			>
				<p className="demo-note">
					There are 12 subject areas, not necessarily 12 individual examination
					subjects. Stage labels describe the broad model; they do not confirm
					every named subject at every class level. Exact compulsory subjects,
					electives, languages and examination combinations are not established
					for this fictional school.
				</p>
				<SubjectExplorer />
			</Section>
			<Section id="teaching" title="How students learn and see their progress">
				<Cards
					columns={4}
					items={[
						{
							title: "Teaching",
							text: "Clear explanations, guided practice and opportunities to work independently.",
						},
						{
							title: "Assessment",
							text: "Classwork, quizzes, practical tasks, writing and examinations help teachers check understanding.",
						},
						{
							title: "Feedback",
							text: "Students learn what has improved and what to practise next.",
						},
						{
							title: "Support",
							text: "Additional practice or extension tasks respond to a student’s needs. Termly reports and family meetings share progress.",
						},
					]}
				/>
			</Section>
			<NextAction context="learning" />
		</main>
	);
}
