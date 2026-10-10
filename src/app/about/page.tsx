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
	title: "About Us",
	description:
		"Our approach to academic progress, character and personal guidance at Kingsbridge College, Lagos.",
};
export default function About() {
	return (
		<main id="main">
			<PageOpening
				title="About Kingsbridge College"
				label="About Us"
				image="campus"
				intro="Kingsbridge College is a co-educational day secondary school in Lagos. We provide Junior and Senior Secondary education with an emphasis on academic progress, sound character and the individual development of our students."
			/>
			<div className="container">
				<SchoolFacts />
			</div>
			<Section title="Academic progress with personal guidance.">
				<div className="prose reading-width">
					<p>
						We believe a good secondary education should give students both
						knowledge and the habits needed to use it well. Our teaching
						encourages understanding, careful work and steady improvement.
					</p>
					<p>
						Students receive regular feedback on their work, while class
						teachers and subject teachers help them develop organisation,
						confidence and responsibility. We maintain communication with
						parents so that concerns can be addressed early.
					</p>
				</div>
			</Section>
			<Section
				title="What we work towards."
				intro="Our aim is to prepare students to succeed academically, conduct themselves responsibly and make informed decisions about further education and life after secondary school."
				soft
			/>
			<Section title="Our Values">
				<Cards
					items={[
						{
							title: "Curiosity",
							text: "We encourage students to ask questions, examine evidence and develop an interest in learning.",
						},
						{
							title: "Character",
							text: "We promote honesty, respect, self-discipline and responsibility.",
						},
						{
							title: "Possibility",
							text: "We help students develop their abilities, explore their interests and consider the opportunities ahead of them.",
						},
					]}
				/>
			</Section>
			<Section
				id="support"
				title="Clear expectations. Consistent support."
				soft
			>
				<div className="prose reading-width">
					<p>
						Our teachers set clear learning goals and help students understand
						how to improve. Class teachers monitor everyday progress and provide
						guidance on routines, behaviour and wellbeing.
					</p>
					<p>
						Parents receive updates on their child’s progress and are encouraged
						to discuss concerns with the relevant teacher.
					</p>
				</div>
			</Section>
			<Section title="Working together for every student.">
				<Cards
					items={[
						{
							title: "Teachers",
							text: "Our teachers guide learning, assess progress and provide support where it is needed.",
						},
						{
							title: "Parents and guardians",
							text: "Parents support regular attendance, good study routines and communication with the school.",
						},
						{
							title: "Students",
							text: "Our students are expected to participate actively, complete their work and treat others with respect.",
						},
					]}
				/>
			</Section>
			<NextAction context="about" />
		</main>
	);
}
