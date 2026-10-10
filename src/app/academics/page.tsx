import type { Metadata } from "next";
import { SubjectExplorer } from "@/components/interactive";
import { ButtonLink } from "@/components/ui";
import {
	Cards,
	JumpLinks,
	NextAction,
	PageOpening,
	Section,
} from "@/components/page-sections";
export const metadata: Metadata = {
	alternates: { canonical: "/academics" },
	title: "Academics",
	description:
		"Our Junior and Senior Secondary academic programmes, learning areas, teaching and assessment.",
};
export default function Academics() {
	return (
		<main id="main">
			<PageOpening
				title="Our Academic Programme"
				label="Academics"
				image="science"
				intro="Our curriculum develops students’ knowledge and study skills from JSS1 to SS3. We combine classroom teaching, practical work and regular assessment to support progress at each stage."
			>
				<div className="button-row">
					<ButtonLink href="#subjects">View Subjects</ButtonLink>
				</div>
			</PageOpening>
			<JumpLinks
				links={[
					{ label: "Our Programmes", href: "#stages" },
					{ label: "Subjects", href: "#subjects" },
					{ label: "Teaching and Assessment", href: "#teaching" },
				]}
			/>
			<Section id="stages" title="Junior and Senior Secondary Education">
				<div className="prose reading-width section-intro">
					<p>
						The Junior Secondary programme provides a broad foundation across
						core, creative and practical subjects. Students develop reading,
						writing, numeracy and the study habits needed for further learning.
					</p>
					<p>
						In Senior Secondary, students study subjects in greater depth and
						receive guidance on subject combinations, examination preparation
						and options after school.
					</p>
				</div>
				<div className="programme-grid">
					{[
						{
							title: "Junior Secondary",
							years: "JSS1–JSS3",
							text: "A broad programme that strengthens core knowledge, introduces new subjects and helps students become more organised and independent.",
							href: "/academics/junior-secondary",
						},
						{
							title: "Senior Secondary",
							years: "SS1–SS3",
							text: "Focused subject study, practical learning and structured preparation for school-leaving examinations.",
							href: "/academics/senior-secondary",
						},
					].map((stage) => (
						<article className="editorial-card" key={stage.title}>
							<span className="stage-label">{stage.years}</span>
							<h3>{stage.title}</h3>
							<p>{stage.text}</p>
							<div className="button-row">
								<ButtonLink href={stage.href}>View {stage.title}</ButtonLink>
							</div>
						</article>
					))}
				</div>
			</Section>
			<Section
				id="subjects"
				title="Subjects and Learning Areas"
				intro="Browse our learning areas by class level and subject category."
				soft
			>
				<SubjectExplorer />
			</Section>
			<Section id="teaching" title="How We Teach and Assess">
				<Cards
					items={[
						{
							title: "Classroom teaching",
							text: "Teachers explain new ideas clearly and provide opportunities for discussion, practice and independent work.",
						},
						{
							title: "Assessment",
							text: "Classwork, assignments, tests, practical tasks and examinations help us monitor students’ understanding.",
						},
						{
							title: "Feedback",
							text: "Students receive guidance on the areas they have mastered and the work needed to improve.",
						},
						{
							title: "Academic support",
							text: "Teachers provide additional guidance where students need help and further challenges where they are ready to advance.",
						},
						{
							title: "Parent communication",
							text: "Termly reports and parent–teacher discussions help parents follow their child’s progress.",
						},
					]}
				/>
			</Section>
			<NextAction context="learning" />
		</main>
	);
}
