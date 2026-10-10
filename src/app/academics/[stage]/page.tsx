import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FAQ } from "@/components/interactive";
import {
	ButtonLink,
	Eyebrow,
	PageHero,
	SectionHeading,
	TextLink,
	VisitCTA,
} from "@/components/ui";

const stages = {
	"junior-secondary": {
		name: "Junior secondary",
		years: "JSS1 — JSS3",
		title: "A world to discover.",
		description:
			"New subjects. New friendships. New ways of thinking. A supportive first chapter in secondary school, with room to find your feet and your interests.",
		image: "science",
		intro:
			"The move from primary to secondary school is a big step. We make it a thoughtful one.",
		body: "Junior secondary brings a broader timetable, specialist subjects and a growing expectation of independence. Clear routines, a familiar tutor and a balanced workload help students feel settled while learning to organise themselves. The aim is to make the new feel manageable, then exciting.",
		milestones: [
			{
				year: "JSS1",
				title: "Settle in. Start exploring.",
				text: "Build confidence with a new timetable, teachers and classmates. Lessons reinforce primary foundations while introducing the language and methods of secondary subjects. Tutor time helps students develop practical habits for homework, equipment and asking for help.",
			},
			{
				year: "JSS2",
				title: "Make connections. Go further.",
				text: "Students deepen their subject knowledge and begin to connect ideas across the curriculum. Group enquiries, practical investigations and presentations encourage more independent thinking. Feedback helps students recognise both strengths and areas that need deliberate practice.",
			},
			{
				year: "JSS3",
				title: "Consolidate. Look ahead.",
				text: "Bring the junior foundations together and prepare for the transition to senior study. Students practise examination routines, reflect on their interests and talk through subject options. Families and teachers work together to support a considered next step.",
			},
		],
		areas: [
			{
				title: "Strong foundations",
				text: "English, mathematics, basic science and technology provide the tools students need across the curriculum. Reading, vocabulary, reasoning and accurate communication are reinforced in every subject.",
			},
			{
				title: "A broad view",
				text: "Social studies, civic learning, languages, business studies and creative and practical subjects encourage students to look beyond a single way of learning. They experience discussion, making, research and performance.",
			},
			{
				title: "Growing independence",
				text: "Homework routines, guided research, reflective journals and manageable projects help students take ownership of their work. The focus is steady progress, rather than expecting independence before it has been taught.",
			},
		],
		faqs: [
			{
				question: "How do you help new students settle?",
				answer:
					"An induction programme introduces the timetable, routines and people who can help. Tutor check-ins, peer connections and early communication with families make the first weeks easier to navigate. Students are shown how to organise equipment, record homework and ask a useful question.",
			},
			{
				question: "How much homework should students expect?",
				answer:
					"Homework is intended to revisit learning, practise a skill or prepare for a lesson. Junior students begin with manageable tasks and learn how to plan their time. A real school would share a year-specific homework guide at induction rather than relying on one fixed estimate for everyone.",
			},
			{
				question: "When do students choose senior subjects?",
				answer:
					"Conversations begin during JSS3, with opportunities to understand what senior subjects involve. School reports, interests and possible future routes inform a balanced choice made with families and subject teachers.",
			},
		],
	},
	"senior-secondary": {
		name: "Senior secondary",
		years: "SS1 — SS3",
		title: "A future to make your own.",
		description:
			"Deeper learning. Thoughtful choices. The confidence to take your next step with a clearer sense of your strengths and possibilities.",
		image: "library",
		intro:
			"The senior years are a time to focus without closing down possibility.",
		body: "Students build a coherent programme around core learning and subject choices. Teachers support more demanding work, practical applications and examination preparation, while tutors keep sight of wellbeing and the wider experience of growing up. Success means being prepared for an examination and for the decisions that follow it.",
		milestones: [
			{
				year: "SS1",
				title: "Choose thoughtfully. Build depth.",
				text: "Settle into a balanced combination of core and elective subjects. Students learn the expectations of senior study and develop stronger note-taking, research and independent practice. Early guidance helps identify the support needed for a sustainable workload.",
			},
			{
				year: "SS2",
				title: "Strengthen. Apply. Connect.",
				text: "Extend subject understanding through practical work, projects and more demanding questions. Students explore further-study routes and career interests while developing the revision habits that will serve them in the final year.",
			},
			{
				year: "SS3",
				title: "Prepare well. Step forward.",
				text: "Structured revision, practice papers and targeted feedback consolidate learning. Alongside examination preparation, students discuss applications, transition skills and responsible decision making. A clear plan helps make a demanding year purposeful and manageable.",
			},
		],
		areas: [
			{
				title: "Science & technology",
				text: "A pathway built around specialist sciences and mathematical thinking. Subject combinations might include biology, chemistry, physics, further mathematics or computing, depending on readiness and future interests.",
			},
			{
				title: "Humanities & expression",
				text: "A pathway for students interested in people, ideas, language and society. Literature, government, history, geography and languages develop interpretation, argument and a thoughtful understanding of the world.",
			},
			{
				title: "Business & enterprise",
				text: "A pathway that explores resources, organisations and decisions. Economics, commerce, accounting and practical enterprise learning encourage students to connect analytical thinking with real-world problems.",
			},
		],
		faqs: [
			{
				question: "Are pathways fixed packages?",
				answer:
					"No. The pathways are a useful starting point for a conversation. Final combinations should meet examination requirements, fit the timetable and balance a student’s strengths, interests and future plans. English and mathematics remain central.",
			},
			{
				question: "How does examination preparation work?",
				answer:
					"Teachers build preparation into subject learning through regular retrieval practice, timed tasks, practical skills and feedback. In the final year, a coordinated revision plan and practice examinations help students identify priorities without relying on last-minute cramming.",
			},
			{
				question: "What support is there for life after secondary school?",
				answer:
					"Students explore further education, vocational routes and career possibilities. Guidance includes researching options, understanding entry requirements, preparing an application and discussing the practical skills needed for a new setting.",
			},
		],
	},
};
type StageKey = keyof typeof stages;
export const dynamicParams = false;
function getStage(key: string) {
	if (!(key in stages)) notFound();
	return stages[key as StageKey];
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
	return (
		<main id="main">
			<PageHero
				eyebrow={stage.name}
				title={
					<>
						{stage.title.split(".")[0]}
						<em>.</em>
					</>
				}
				description={stage.description}
				image={stage.image}
				alt={`Learning in ${stage.name.toLowerCase()} at Kingsbridge`}
			>
				<ButtonLink href="/admissions">Explore entry requirements</ButtonLink>
			</PageHero>
			<section className="section">
				<div className="container split-layout">
					<div>
						<Eyebrow>{stage.years}</Eyebrow>
						<h2>{stage.intro}</h2>
					</div>
					<div className="prose">
						<p className="lead">{stage.body}</p>
						<p>
							Learning is balanced with sport, the arts, service and time with a
							tutor. Students are encouraged to keep exploring interests outside
							their main subjects, because a full education develops more than
							one side of a person.
						</p>
						<TextLink href="/academics#subjects">
							Browse the subject areas
						</TextLink>
					</div>
				</div>
			</section>
			<section className="section soft-section">
				<div className="container">
					<SectionHeading
						eyebrow="Year by year"
						title={
							<>
								A journey with
								<br />
								<em>room to grow.</em>
							</>
						}
					/>
					<div className="three-grid">
						{stage.milestones.map((item) => (
							<article className="editorial-card" key={item.year}>
								<span className="stage-label">{item.year}</span>
								<h3>{item.title}</h3>
								<p>{item.text}</p>
							</article>
						))}
					</div>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<SectionHeading
						eyebrow="The shape of learning"
						title={
							<>
								Strong foundations.
								<br />
								<em>Meaningful connections.</em>
							</>
						}
					/>
					<div className="three-grid">
						{stage.areas.map((area) => (
							<article className="editorial-card" key={area.title}>
								<h3>{area.title}</h3>
								<p>{area.text}</p>
							</article>
						))}
					</div>
				</div>
			</section>
			<section className="section faq-section">
				<div className="container faq-layout">
					<div>
						<Eyebrow>Good to know</Eyebrow>
						<h2>
							Your questions,
							<br />
							<em>considered.</em>
						</h2>
						<TextLink href="/academics">Back to learning</TextLink>
					</div>
					<FAQ items={stage.faqs} />
				</div>
			</section>
			<VisitCTA />
		</main>
	);
}
