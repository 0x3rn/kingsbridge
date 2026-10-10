import type { Metadata } from "next";
import {
	Cards,
	NextAction,
	PageOpening,
	SchoolFacts,
	Section,
} from "@/components/page-sections";
export const metadata: Metadata = {
	alternates: { canonical: "/about" },
	title: "About Kingsbridge",
	description:
		"The purpose, learning approach and student support of a fictional co-educational day school in Lagos.",
};
export default function About() {
	return (
		<main id="main">
			<PageOpening
				title="About Kingsbridge College"
				label="About Kingsbridge"
				image="campus"
				intro="Kingsbridge is imagined as a co-educational day school in Lagos, offering a six-year journey through junior and senior secondary education. The school concept combines academic learning, personal support and opportunities to contribute to a wider community."
			/>
			<div className="container">
				<SchoolFacts />
			</div>
			<Section title="What the school aims to give every student">
				<div className="prose reading-width">
					<p>
						Students need subject knowledge, habits for independent work and
						people who notice when they need help. The Kingsbridge model brings
						these together through clear lessons, useful feedback, regular tutor
						contact and communication with families.
					</p>
					<p>
						The junior years introduce a broad range of subjects. The senior
						years help students make informed choices, prepare for examinations
						and consider further education or vocational routes.
					</p>
				</div>
			</Section>
			<Section title="Our values in everyday school life" soft>
				<Cards
					items={[
						{
							title: "Curiosity",
							text: "Students ask questions, investigate problems and explain the evidence behind an answer. Practical science, reading and discussion give them opportunities to practise.",
						},
						{
							title: "Character",
							text: "Respect, honesty and responsibility guide how students work and treat others. Team activities and community projects give these values a practical role.",
						},
						{
							title: "Possibility",
							text: "Students explore interests and learn to recognise their strengths. Subject guidance and varied activities help them consider more than one route forward.",
						},
					]}
				/>
			</Section>
			<Section id="support" title="Clear expectations. Help when it is needed.">
				<p className="reading-width">
					Teachers explain what students are working towards and give feedback
					they can use. Tutors provide a familiar point of contact for routines,
					wellbeing and questions that cross several subjects. Reports and
					family conversations connect progress at school with support at home.
				</p>
			</Section>
			<Section title="Students, teachers and families working together" soft>
				<Cards
					items={[
						{
							title: "Teachers",
							text: "Explain learning, check understanding and help students improve.",
						},
						{
							title: "Families",
							text: "Share useful information, support routines and discuss progress.",
						},
						{
							title: "Students",
							text: "Take part, ask for help and respect the people around them.",
						},
					]}
				/>
			</Section>
			<NextAction context="joining" />
		</main>
	);
}
