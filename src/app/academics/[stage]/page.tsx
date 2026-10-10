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
		name: "Junior Secondary",
		years: "JSS1–JSS3",
		title: "A confident beginning to secondary school.",
		description:
			"Our Junior Secondary programme helps students settle into a new learning environment, strengthen their knowledge and develop good study habits.",
		image: "science",
		entry: "/admissions#junior-entry",
		entryLabel: "JSS1 Admission Requirements",
		introTitle: "Helping students settle in.",
		intro:
			"Moving from primary to secondary school brings new subjects, teachers and responsibilities. We help students understand the timetable, organise their materials and establish a routine for schoolwork.",
		introSecond:
			"Class teachers provide guidance during this transition and work with parents to address questions or difficulties.",
		milestones: [
			{
				year: "JSS1",
				title: "Building the foundation.",
				text: "Students settle into secondary school, strengthen their understanding of core subjects and begin developing more organised study habits.",
			},
			{
				year: "JSS2",
				title: "Developing knowledge and independence.",
				text: "Students build on their first-year learning through more demanding classwork, practical activities and group assignments.",
			},
			{
				year: "JSS3",
				title: "Preparing for Senior Secondary.",
				text: "Students consolidate their Junior Secondary learning, prepare for assessments and receive guidance on the transition to Senior Secondary.",
			},
		],
		prioritiesTitle: "Key Areas of Development",
		priorities: [
			{
				title: "Core knowledge",
				text: "Reading, writing, mathematics and scientific understanding.",
			},
			{
				title: "Broader learning",
				text: "Languages, social subjects, creative activities and practical skills.",
			},
			{
				title: "Study habits",
				text: "Organisation, assignment completion, revision and responsible use of feedback.",
			},
		],
		faq: [
			{
				question: "How do you support new students?",
				answer:
					"Our orientation introduces students to the timetable, school routines and staff. Class teachers help students settle in and communicate with parents where additional support is needed.",
			},
			{
				question: "What is the purpose of homework?",
				answer:
					"Homework reinforces classroom learning and helps students develop independent study habits. Parents can support this by providing a regular study routine and encouraging students to complete their own work.",
			},
			{
				question: "When do students receive guidance on senior subjects?",
				answer:
					"Subject discussions take place during JSS3. Students consider their interests and academic progress with guidance from teachers and parents.",
			},
		],
	},
	"senior-secondary": {
		name: "Senior Secondary",
		years: "SS1–SS3",
		title: "Focused study. Preparation for the next stage.",
		description:
			"Our Senior Secondary programme develops subject knowledge, examination skills and independent study. Students receive guidance on their subject choices and plans after secondary school.",
		image: "library",
		entry: "/admissions#senior-entry",
		entryLabel: "SS1 Admission Requirements",
		introTitle: "Choosing the right subjects.",
		intro:
			"We guide students in choosing subjects that reflect their interests, academic strengths and future plans. Teachers explain the demands of each subject and help students consider suitable combinations.",
		introSecond:
			"Parents are involved in these discussions so that decisions are informed and realistic.",
		milestones: [
			{
				year: "SS1",
				title: "Establishing good study habits.",
				text: "Students adjust to the demands of Senior Secondary, build knowledge in their chosen subjects and develop a more consistent approach to independent work.",
			},
			{
				year: "SS2",
				title: "Strengthening subject knowledge.",
				text: "Students deepen their understanding through classwork, practical activities, assignments and regular assessment. Guidance also helps them explore further education and career interests.",
			},
			{
				year: "SS3",
				title: "Preparing for final examinations.",
				text: "Revision, practice questions and targeted feedback help students prepare for school-leaving examinations. Students also receive guidance on their next educational steps.",
			},
		],
		prioritiesTitle: "Areas of Study",
		priorities: [
			{
				title: "Science and technology",
				text: "Subjects that develop scientific understanding, mathematical reasoning and practical investigation.",
			},
			{
				title: "Arts and humanities",
				text: "Subjects that develop communication, interpretation and an understanding of people and society.",
			},
			{
				title: "Business and commercial studies",
				text: "Subjects that explore business, resources, enterprise and economic decisions.",
			},
		],
		faq: [
			{
				question: "How are subject combinations decided?",
				answer:
					"Students receive guidance based on their academic progress, interests, future plans and the subjects available within the school timetable.",
			},
			{
				question: "How do you support examination preparation?",
				answer:
					"We combine regular assessment, practice questions, revision and feedback to help students identify and improve areas of difficulty.",
			},
			{
				question: "Is guidance available after secondary school?",
				answer:
					"Students receive guidance on further education, entry requirements and possible career directions.",
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
	const junior = stage.name === "Junior Secondary";
	return (
		<main id="main" className="decision-page">
			<PageOpening
				title={stage.title}
				label={stage.name}
				eyebrow={`${stage.name} · ${stage.years}`}
				intro={stage.description}
				image={stage.image}
			>
				<div className="button-row">
					<ButtonLink href={stage.entry}>{stage.entryLabel}</ButtonLink>
				</div>
			</PageOpening>
			<JumpLinks
				links={[
					{
						label: junior ? "Orientation" : "Subject Choices",
						href: "#guidance",
					},
					{ label: "Classes", href: "#years" },
					{ label: "Learning Areas", href: "#subjects" },
					{ label: "Questions", href: "#questions" },
				]}
			/>
			<Section id="guidance" title={stage.introTitle}>
				<div className="prose reading-width">
					<p>{stage.intro}</p>
					<p>{stage.introSecond}</p>
				</div>
				{junior && (
					<>
						<h3 className="minor-heading">Getting Started at Kingsbridge</h3>
						<ul className="practical-checklist">
							<li>Meet class and subject teachers.</li>
							<li>Understand the timetable and school rules.</li>
							<li>Learn how to record assignments and prepare for lessons.</li>
							<li>Know who to speak to when help is needed.</li>
						</ul>
					</>
				)}
			</Section>
			<Section id="years" title={junior ? "JSS1 to JSS3" : "SS1 to SS3"} soft>
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
			</Section>
			{!junior && (
				<Section
					id="examinations"
					title="Consistent Preparation for Examinations"
					soft
				>
					<div className="prose reading-width">
						<p>
							Examination preparation is built into regular teaching. Students
							practise answering questions, managing time and applying their
							knowledge.
						</p>
						<p>
							Teachers use assessment results to identify areas that require
							further work and guide students through revision.
						</p>
					</div>
				</Section>
			)}
			<Section
				id="subjects"
				title={`${stage.name} Learning Areas`}
				intro={
					junior
						? "Explore the subjects and practical learning that form our Junior Secondary programme."
						: "Explore the learning areas within our Senior Secondary programme."
				}
				soft={junior}
			>
				<SubjectExplorer initialStage={junior ? "Junior" : "Senior"} />
			</Section>
			<Section id="questions" title="Frequently Asked Questions">
				<FAQ items={stage.faq} />
			</Section>
			<NextAction context={junior ? "junior" : "senior"} />
		</main>
	);
}
