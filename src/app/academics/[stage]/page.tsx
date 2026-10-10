import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FAQ, SubjectExplorer } from "@/components/interactive";
import { ButtonLink } from "@/components/ui";
import {
	Cards,
	JumpLinks,
	NextAction,
	PageOpening,
	Section,
} from "@/components/page-sections";
const stages = {
	"junior-secondary": {
		name: "Junior secondary",
		years: "JSS1–JSS3",
		title: "A confident start to secondary school",
		description:
			"The junior years introduce new subjects and routines while strengthening English, mathematics and independent learning habits. Tutor contact and practical guidance help students settle into secondary school.",
		image: "science",
		entry: "/admissions#junior-entry",
		introTitle: "Help with the move from primary school",
		intro:
			"A broader timetable means more teachers, different classrooms and new responsibilities. The Kingsbridge model introduces routines for equipment, homework and asking for help, so students can build independence step by step.",
		milestones: [
			{
				year: "JSS1",
				title: "Settle into secondary school",
				text: "Learn the timetable, meet subject teachers and strengthen primary foundations. Practise organising equipment, recording homework and asking questions.",
			},
			{
				year: "JSS2",
				title: "Develop knowledge and independence",
				text: "Build deeper understanding through investigations, group work and presentations. Use feedback to recognise strengths and improve weaker areas.",
			},
			{
				year: "JSS3",
				title: "Prepare for senior study",
				text: "Consolidate junior learning, practise examination routines and explore senior subjects with teachers and family.",
			},
		],
		prioritiesTitle: "What the junior years develop",
		priorities: [
			{
				title: "Core skills",
				text: "Reading, writing, mathematical reasoning and basic scientific understanding.",
			},
			{
				title: "Broad interests",
				text: "Languages, humanities, creative activities and practical learning.",
			},
			{
				title: "Independent habits",
				text: "Planning work, completing manageable tasks and reflecting on feedback.",
			},
		],
		faq: [
			{
				question: "How are new students helped to settle?",
				answer:
					"Induction introduces the people, timetable and routines. Tutor check-ins and early family communication help identify questions in the first weeks.",
			},
			{
				question: "What homework should students expect?",
				answer:
					"Tasks revisit learning, practise skills or prepare for lessons. The model builds planning habits gradually. There is no published year-by-year homework schedule for this fictional school.",
			},
			{
				question: "When are senior subjects discussed?",
				answer:
					"During JSS3, students review interests and progress and explore options with teachers and families.",
			},
		],
	},
	"senior-secondary": {
		name: "Senior secondary",
		years: "SS1–SS3",
		title: "Choose your subjects. Prepare for what comes next.",
		description:
			"Senior study develops deeper subject knowledge, more independent work and examination preparation. Guidance helps students plan a balanced programme and consider further education, vocational routes and career interests.",
		image: "library",
		entry: "/admissions#senior-entry",
		introTitle: "A balanced programme with guidance",
		intro:
			"English and mathematics remain central to the concept curriculum. Other choices should reflect the student’s interests, progress, future plans and the requirements of the examination route. Teachers and families help students understand both the subjects and their workload.",
		milestones: [
			{
				year: "SS1",
				title: "Build a suitable subject programme",
				text: "Understand senior expectations, establish stronger study habits and identify where support is needed.",
			},
			{
				year: "SS2",
				title: "Deepen learning and plan ahead",
				text: "Apply knowledge through practical work and projects, strengthen revision habits and research routes after school.",
			},
			{
				year: "SS3",
				title: "Prepare for examinations and transition",
				text: "Use practice papers and targeted feedback to guide revision, while preparing for the next stage of education.",
			},
		],
		prioritiesTitle: "Explore possible areas of focus",
		priorities: [
			{
				title: "Science and technology",
				text: "Specialist sciences, mathematical thinking and computing.",
			},
			{
				title: "Humanities and languages",
				text: "People, society, literature, language and argument.",
			},
			{
				title: "Business and enterprise",
				text: "Resources, organisations, economic choices and enterprise.",
			},
		],
		faq: [
			{
				question: "Are pathways fixed packages?",
				answer:
					"No. They are a starting point for discussing a suitable combination of subjects.",
			},
			{
				question: "How does examination preparation work?",
				answer:
					"Regular practice, timed tasks and feedback build preparation into lessons. A coordinated revision plan helps students identify priorities in the final year.",
			},
			{
				question: "What guidance is offered after secondary school?",
				answer:
					"The model includes researching further education and vocational options, understanding entry requirements and preparing applications.",
			},
		],
	},
};
export const dynamicParams = false;
function getStage(key: string) {
	if (!Object.hasOwn(stages, key)) notFound();
	return stages[key as keyof typeof stages];
}
export function generateStaticParams() {
	return Object.keys(stages).map((stage) => ({ stage }));
}
export async function generateMetadata({
	params,
}: {
	params: Promise<{ stage: string }>;
}): Promise<Metadata> {
	const key = (await params).stage;
	const stage = getStage(key);
	return {
		title: stage.name,
		description: stage.description,
		alternates: { canonical: `/academics/${key}` },
	};
}
export default async function Stage({
	params,
}: {
	params: Promise<{ stage: string }>;
}) {
	const stage = getStage((await params).stage);
	const junior = stage.name === "Junior secondary";
	return (
		<main id="main" className="decision-page">
			<PageOpening
				title={stage.title}
				label={`${stage.name} · ${stage.years}`}
				intro={stage.description}
				image={stage.image}
			>
				<div className="button-row">
					<ButtonLink href={stage.entry}>
						View {junior ? "junior" : "senior"} entry requirements
					</ButtonLink>
				</div>
			</PageOpening>
			<JumpLinks
				links={[
					{
						label: junior ? "First weeks" : "Subject choices",
						href: "#guidance",
					},
					{ label: "Year by year", href: "#years" },
					{ label: "Subject areas", href: "#subjects" },
					{ label: "Questions", href: "#questions" },
				]}
			/>
			<Section id="guidance" title={stage.introTitle} intro={stage.intro}>
				{junior ? (
					<>
						<h3 className="minor-heading">First weeks checklist</h3>
						<ul className="practical-checklist">
							<li>Learn the timetable and meet subject teachers.</li>
							<li>Find the tutor and know how to ask for help.</li>
							<li>Practise preparing equipment and recording homework.</li>
							<li>Share early questions with family and tutor.</li>
						</ul>
					</>
				) : (
					<>
						<h3 className="minor-heading">A guide to choosing subjects</h3>
						<ol className="decision-steps">
							{[
								"Consider interests.",
								"Review progress.",
								"Check requirements.",
								"Consider workload.",
								"Discuss choices with teachers and family.",
							].map((item) => (
								<li key={item}>{item}</li>
							))}
						</ol>
						<p className="demo-note">
							Compulsory and elective combinations have not been confirmed for
							this school concept.
						</p>
					</>
				)}
			</Section>
			<Section id="years" title="Year by year" soft>
				<div className="info-grid columns-3">
					{stage.milestones.map((item) => (
						<article className="editorial-card" key={item.year}>
							<span className="stage-label">{item.year}</span>
							<h3>{item.title}</h3>
							<p>{item.text}</p>
						</article>
					))}
				</div>
			</Section>
			<Section title={stage.prioritiesTitle}>
				<Cards items={stage.priorities} />
				{!junior && (
					<p className="demo-note">
						These are illustrative areas of focus, not confirmed fixed subject
						packages. Actual combinations would depend on the timetable and
						examination requirements.
					</p>
				)}
			</Section>
			<Section
				id="subjects"
				title={`${stage.name} subject areas`}
				intro="Broad areas in the illustrative curriculum, rather than a confirmed subject list for every class."
				soft
			>
				<SubjectExplorer initialStage={junior ? "Junior" : "Senior"} />
			</Section>
			<Section id="questions" title={`${stage.name} questions`}>
				<FAQ items={stage.faq} />
			</Section>
			<NextAction context="learning" />
		</main>
	);
}
