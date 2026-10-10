import type { Metadata } from "next";
import { PrintButton } from "@/components/interactive";
import { ButtonLink, Crest, Eyebrow, Photo } from "@/components/ui";
import { dailySchedule, subjects, values } from "@/lib/content";
export const metadata: Metadata = {
	title: "College prospectus",
	description:
		"A printable introduction to the learning, life and admissions experience at Kingsbridge College.",
};
export default function Prospectus() {
	return (
		<main id="main" className="prospectus">
			<div className="prospectus-toolbar container">
				<span>A guide to Kingsbridge</span>
				<PrintButton />
			</div>
			<header className="prospectus-cover container">
				<div>
					<Crest />
					<Eyebrow>Kingsbridge College · Prospectus</Eyebrow>
					<h1>
						A place to learn.
						<br />A life to <em>shape.</em>
					</h1>
					<p>
						Junior & senior secondary
						<br />
						Curiosity · Character · Possibility
					</p>
				</div>
				<Photo
					name="campus"
					alt="Students walking through the Kingsbridge campus"
					eager
				/>
			</header>
			<div className="prospectus-body">
				<section>
					<span className="eyebrow">01 · Welcome</span>
					<h2>An education with a wider view.</h2>
					<p className="lead">
						Kingsbridge is imagined as a co-educational day school where strong
						academic foundations and a genuine sense of belonging come together.
					</p>
					<p>
						Our six-year secondary journey gives young people room to develop
						their interests, practise independence and become thoughtful members
						of a community. We value examination preparation alongside
						curiosity, creativity and the confidence to ask a good question.
					</p>
					<p>
						Teachers make learning goals clear and give feedback students can
						act on. Tutors provide a familiar point of contact, and regular
						family conversations help connect learning with the wider experience
						of growing up.
					</p>
					{values.map((value) => (
						<div key={value.title} className="prospectus-value">
							<h3>{value.title}</h3>
							<p>{value.text}</p>
						</div>
					))}
				</section>
				<section>
					<span className="eyebrow">02 · The learning journey</span>
					<h2>Broad beginnings. Thoughtful choices.</h2>
					<h3>Junior secondary · JSS1–JSS3</h3>
					<p>
						The junior years reinforce literacy, numeracy and practical learning
						habits while opening up a wider curriculum. Students experience
						science and technology, languages, humanities and creative and
						practical subjects before choosing a more focused senior programme.
					</p>
					<h3>Senior secondary · SS1–SS3</h3>
					<p>
						Core English and mathematics sit alongside a balanced set of subject
						choices. Science, humanities and business-oriented pathways help
						organise the conversation, while individual combinations reflect
						interests, readiness and future possibilities. Structured revision
						and practice support school-leaving examination preparation.
					</p>
					<h3>Curriculum areas</h3>
					<div className="prospectus-subjects">
						{subjects.map((subject) => (
							<span key={subject.name}>{subject.name}</span>
						))}
					</div>
					<p>
						Assessment combines classwork, practical tasks, quizzes, writing and
						examinations. Reports describe progress and next steps; support and
						extension help students move forward from their own starting points.
					</p>
				</section>
				<section>
					<span className="eyebrow">03 · Life at Kingsbridge</span>
					<h2>Space for every side of you.</h2>
					<p>
						Sport, the arts, debate, coding, environmental projects and service
						give students a wider experience of learning. House activities
						connect different year groups and create opportunities to
						contribute, encourage and lead.
					</p>
					<p>
						Pastoral care begins with daily tutor contact and clear routines.
						Students learn how to ask for support, treat others respectfully and
						navigate the practical responsibilities of school life.
					</p>
					<h3>A typical school day</h3>
					{dailySchedule.map((item) => (
						<div className="prospectus-day" key={item.time}>
							<strong>{item.time}</strong>
							<div>
								<h4>{item.title}</h4>
								<p>{item.text}</p>
							</div>
						</div>
					))}
				</section>
				<section>
					<span className="eyebrow">04 · Joining the college</span>
					<h2>A thoughtful first step.</h2>
					<p>
						The model admissions journey starts with an enquiry and a visit,
						followed by a completed application, school records and an
						age-appropriate assessment. A student conversation helps understand
						interests, readiness and any support needs.
					</p>
					<h3>Junior entry</h3>
					<p>
						JSS1 applicants should have completed primary education and are
						usually around 10–11 at the start of the academic year. English,
						mathematics and reasoning tasks help establish a secure starting
						point.
					</p>
					<h3>Senior entry and transfers</h3>
					<p>
						SS1 applicants should have completed junior secondary education or
						an equivalent programme. English, mathematics and subject
						discussions inform placement. Transfers into other years depend on
						space and curriculum compatibility; final-year entry requires
						individual review.
					</p>
					<h3>Documents to prepare</h3>
					<ul>
						<li>
							Completed application and parent or guardian contact details
						</li>
						<li>Birth or age record and a recent passport photograph</li>
						<li>Recent school reports and relevant completion records</li>
						<li>Transfer letter and support information, where applicable</li>
					</ul>
					<p>
						A real school would provide written fee terms, joining arrangements
						and induction information before a family accepts a place.
					</p>
					<div className="button-row no-print">
						<ButtonLink href="/admissions">
							Read the admissions guide
						</ButtonLink>
						<ButtonLink href="/visit" variant="outline">
							Explore a visit
						</ButtonLink>
					</div>
				</section>
				<section className="prospectus-disclosure">
					<span className="eyebrow">About this guide</span>
					<h3>A fictional school. A complete idea.</h3>
					<p>
						This prospectus is part of an original portfolio project.
						Kingsbridge College is not an operating school; the content and
						AI-generated campus imagery are illustrative. Website forms create
						local demo summaries only and do not send applications, book visits
						or collect payments.
					</p>
				</section>
			</div>
		</main>
	);
}
