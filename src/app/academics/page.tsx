import type { Metadata } from "next";
import { SubjectExplorer } from "@/components/interactive";
import {
	ButtonLink,
	Eyebrow,
	Icon,
	PageHero,
	Photo,
	SectionHeading,
	TextLink,
	VisitCTA,
} from "@/components/ui";
export const metadata: Metadata = {
	title: "Learning at Kingsbridge",
	description:
		"Explore a balanced secondary curriculum, subject pathways, practical learning and thoughtful assessment.",
};
export default function Academics() {
	return (
		<main id="main">
			<PageHero
				eyebrow="Learning at Kingsbridge"
				title={
					<>
						Learn to think.
						<br />
						Find your <em>direction.</em>
					</>
				}
				description="A strong education gives you knowledge. A lasting one teaches you what to do with it. Our curriculum brings the two together."
				image="science"
				alt="A group of students learning through an investigation"
			>
				<ButtonLink href="#subjects">Explore the curriculum</ButtonLink>
			</PageHero>
			<section className="section">
				<div className="container split-layout">
					<div>
						<Eyebrow>Broad foundations. Deeper understanding.</Eyebrow>
						<h2>
							Learning for exams.
							<br />
							<em>Learning for life.</em>
						</h2>
					</div>
					<div className="prose">
						<p className="lead">
							Our model curriculum follows a familiar Nigerian secondary
							structure: three years of junior secondary education, followed by
							three years of senior secondary study.
						</p>
						<p>
							English and mathematics provide core foundations. Sciences,
							humanities, languages and practical subjects give students a broad
							view of the world and a chance to discover where their interests
							lie.
						</p>
						<p>
							As students move into senior school, subject choices become more
							focused. Science, humanities and business-oriented pathways sit
							alongside essential core learning, with guidance to build a
							balanced programme. Senior study develops the knowledge and
							examination habits associated with common school-leaving routes
							such as WAEC and NECO; this fictional college makes no
							accreditation claims.
						</p>
					</div>
				</div>
			</section>
			<section className="section soft-section">
				<div className="container">
					<SectionHeading
						eyebrow="One journey. Two stages."
						title={
							<>
								Start with discovery.
								<br />
								<em>Grow into direction.</em>
							</>
						}
					/>
					<div className="stage-grid">
						<article className="stage-panel">
							<span className="stage-label">JSS1 — JSS3</span>
							<h3>Junior secondary</h3>
							<p>
								A broad introduction to new subjects, secure learning routines
								and increasing independence. Students explore before they
								specialise.
							</p>
							<ul>
								<li>Core literacy and numeracy</li>
								<li>Integrated science and technology</li>
								<li>Creative, practical and social learning</li>
								<li>Guidance through the transition from primary school</li>
							</ul>
							<TextLink href="/academics/junior-secondary">
								Discover junior school
							</TextLink>
						</article>
						<article className="stage-panel stage-panel-dark">
							<span className="stage-label">SS1 — SS3</span>
							<h3>Senior secondary</h3>
							<p>
								More focused subject study, deeper understanding and thoughtful
								preparation for examinations and future education.
							</p>
							<ul>
								<li>Core English and mathematics</li>
								<li>Balanced subject combinations</li>
								<li>Practical work and structured revision</li>
								<li>Careers and further-study conversations</li>
							</ul>
							<TextLink light href="/academics/senior-secondary">
								Discover senior school
							</TextLink>
						</article>
					</div>
				</div>
			</section>
			<section className="section" id="subjects">
				<div className="container">
					<SectionHeading
						eyebrow="Explore the curriculum"
						title={
							<>
								A wider world
								<br />
								of <em>ideas.</em>
							</>
						}
						text="Browse the subject areas that make up the Kingsbridge concept. Specific senior combinations are planned with students and families."
					/>
					<SubjectExplorer />
				</div>
			</section>
			<section className="section soft-section">
				<div className="container split-layout">
					<Photo
						name="library"
						alt="Students discussing and writing about their learning"
						className="tall-photo"
					/>
					<div className="prose">
						<Eyebrow>How learning becomes understanding</Eyebrow>
						<h2>
							Explain. Explore.
							<br />
							<em>Apply. Reflect.</em>
						</h2>
						<p>
							Good teaching makes difficult ideas approachable without making
							them less ambitious. Lessons move between clear explanation,
							guided practice, discussion and opportunities to apply an idea
							independently.
						</p>
						<p>
							We use regular, low-pressure checks to see what students
							understand. Classwork, quizzes, practical tasks and longer pieces
							of writing build a fuller picture than a single examination.
							Feedback focuses on what has improved and what to work on next.
						</p>
						<p>
							Termly reports and family meetings bring that picture together.
							Where a student needs additional support, teachers adapt practice
							and agree manageable goals. Where a student is ready to go
							further, extension tasks open up another level of thinking.
						</p>
						<ul className="check-list">
							<li>
								<Icon name="check" />
								Clear learning goals
							</li>
							<li>
								<Icon name="check" />
								Practice that builds independence
							</li>
							<li>
								<Icon name="check" />
								Feedback students can act on
							</li>
							<li>
								<Icon name="check" />
								Progress shared with families
							</li>
						</ul>
					</div>
				</div>
			</section>
			<VisitCTA />
		</main>
	);
}
