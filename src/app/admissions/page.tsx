import type { Metadata } from "next";
import { FAQ } from "@/components/interactive";
import {
	ButtonLink,
	Eyebrow,
	Icon,
	PageHero,
	SectionHeading,
	TextLink,
	VisitCTA,
} from "@/components/ui";
export const metadata: Metadata = {
	alternates: { canonical: "/admissions" },
	title: "Admissions",
	description:
		"A clear guide to Kingsbridge admissions: entry requirements, assessment, documents, school fees and your next steps.",
};
const steps = [
	{
		title: "Start a conversation",
		text: "Tell us a little about your family, the student’s current year and what matters to you in a school. We’ll help you understand the appropriate entry point and what the journey involves.",
	},
	{
		title: "Come and get a feel for us",
		text: "Explore the learning spaces, meet the people behind the school day and ask your questions. A personal visit or open morning helps turn a website into a more informed decision.",
	},
	{
		title: "Apply & get to know each other",
		text: "Complete the application, share recent school records and arrange an age-appropriate assessment. We consider academic readiness, learning needs and the student’s wider interests.",
	},
	{
		title: "Make a considered beginning",
		text: "If a place is offered, families receive written terms and joining information. Induction, subject guidance and practical preparation help a new student arrive with confidence.",
	},
];
export default function Admissions() {
	return (
		<main id="main">
			<PageHero
				eyebrow="Admissions"
				title={
					<>
						A good beginning
						<br />
						starts with <em>a conversation.</em>
					</>
				}
				description="Choosing a secondary school is a decision about learning, belonging and the years ahead. Our admissions guide makes the next steps clear."
				image="campus"
				alt="The welcoming Kingsbridge campus"
			>
				<ButtonLink href="/apply">Begin an application</ButtonLink>
				<ButtonLink href="/visit" variant="outline">
					Plan a visit
				</ButtonLink>
			</PageHero>
			<section className="section">
				<div className="container">
					<SectionHeading
						eyebrow="Your journey to Kingsbridge"
						title={
							<>
								Four steps.
								<br />
								<em>A thoughtful start.</em>
							</>
						}
					/>
					<div className="admission-steps">
						{steps.map((step, index) => (
							<article key={step.title}>
								<span className="large-number">0{index + 1}</span>
								<h3>{step.title}</h3>
								<p>{step.text}</p>
							</article>
						))}
					</div>
				</div>
			</section>
			<section className="section soft-section" id="requirements">
				<div className="container split-layout">
					<div>
						<Eyebrow>Entry requirements</Eyebrow>
						<h2>
							Ready for the next
							<br />
							<em>stage of learning.</em>
						</h2>
						<p>
							We look at the whole student: their foundations, their readiness
							and the support that helps them do well.
						</p>
						<TextLink href="/apply">Explore the application</TextLink>
					</div>
					<div className="requirement-panels">
						<article>
							<span className="stage-label">Junior entry · JSS1</span>
							<h3>A secure primary foundation</h3>
							<p>
								Applicants should have completed primary education and are
								usually around 10–11 at the start of the academic year. The
								admissions process considers:
							</p>
							<ul className="check-list">
								<li>
									<Icon name="check" />
									Recent school reports and evidence of primary completion
								</li>
								<li>
									<Icon name="check" />
									Age-appropriate English, mathematics and reasoning tasks
								</li>
								<li>
									<Icon name="check" />A short, friendly conversation with the
									student
								</li>
								<li>
									<Icon name="check" />
									Any information needed to plan learning support
								</li>
							</ul>
						</article>
						<article>
							<span className="stage-label">Senior entry · SS1</span>
							<h3>A thoughtful subject pathway</h3>
							<p>
								Applicants should have completed junior secondary education or
								an equivalent programme. Assessment explores readiness for
								senior subjects and the suitability of the proposed combination.
							</p>
							<ul className="check-list">
								<li>
									<Icon name="check" />
									Junior secondary reports and completion records
								</li>
								<li>
									<Icon name="check" />
									English and mathematics assessment
								</li>
								<li>
									<Icon name="check" />
									Subject discussion for the intended pathway
								</li>
								<li>
									<Icon name="check" />A student and family interview
								</li>
							</ul>
						</article>
						<article>
							<span className="stage-label">Joining in another year</span>
							<h3>A transition planned with care</h3>
							<p>
								Transfers into JSS2, JSS3 and SS2 are considered where space and
								curriculum compatibility allow. Final-year entry is reviewed
								individually because examination preparation is already
								underway.
							</p>
							<p>
								A current-school reference, transfer letter and recent reports
								help establish the right placement. We discuss any differences
								in prior learning before a student joins.
							</p>
						</article>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<SectionHeading
						eyebrow="Before you begin"
						title={
							<>
								A simple checklist.
								<br />
								<em>A smoother process.</em>
							</>
						}
						text="In a real admissions process, families would prepare the following documents. This portfolio demo does not collect or upload them."
					/>
					<div className="document-grid">
						{[
							"Completed application form",
							"Birth certificate or age record",
							"Two recent school reports",
							"Primary or junior completion record",
							"A recent passport photograph",
							"Transfer letter, where applicable",
							"Relevant learning-support information",
							"Parent or guardian contact details",
						].map((item, index) => (
							<div key={item}>
								<span>0{index + 1}</span>
								<p>{item}</p>
								<Icon name="check" />
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="section fees-section" id="fees">
				<div className="container split-layout">
					<div>
						<Eyebrow light>School fees, clearly explained</Eyebrow>
						<h2>
							A complete picture.
							<br />
							<em>No guesswork.</em>
						</h2>
						<p>
							Families should understand the full cost of joining a school
							before accepting a place.
						</p>
						<ButtonLink href="/contact" variant="gold">
							Ask about the fee guide
						</ButtonLink>
					</div>
					<div className="fee-guide">
						<article>
							<h3>Core school provision</h3>
							<p>
								A fee schedule would identify tuition, standard teaching
								materials, routine assessment and the activities included in the
								school day.
							</p>
						</article>
						<article>
							<h3>Practical joining costs</h3>
							<p>
								Uniform, personal equipment, books and any one-time registration
								charges should be itemised separately, with clear guidance about
								what is required.
							</p>
						</article>
						<article>
							<h3>Optional services</h3>
							<p>
								Meals, transport, specialist clubs and educational visits should
								state whether they are included or charged separately. Families
								can then choose with confidence.
							</p>
						</article>
						<article>
							<h3>Payment & support</h3>
							<p>
								Written terms should explain payment dates, deposits, refunds
								and any available support. This fictional school has no live fee
								schedule and accepts no payments.
							</p>
						</article>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="container faq-layout">
					<div>
						<Eyebrow>Admissions questions</Eyebrow>
						<h2>
							Let’s make
							<br />
							things <em>clear.</em>
						</h2>
						<p>
							Still wondering about something? Bring your questions to a visit
							or start an enquiry.
						</p>
						<TextLink href="/contact">Talk to admissions</TextLink>
					</div>
					<FAQ />
				</div>
			</section>
			<VisitCTA />
		</main>
	);
}
