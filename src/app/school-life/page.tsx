import type { Metadata } from "next";
import { CampusTour } from "@/components/interactive";
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
import { dailySchedule } from "@/lib/content";
export const metadata: Metadata = {
	alternates: { canonical: "/school-life" },
	title: "School life",
	description:
		"Find out about clubs, sport, the arts, wellbeing and a typical school day at Kingsbridge.",
};
export default function SchoolLife() {
	return (
		<main id="main">
			<PageHero
				eyebrow="School life"
				title={
					<>
						A school day.
						<br />A world of <em>possibility.</em>
					</>
				}
				description="The things you try. The people you meet. The moments that stay with you. There is more than one way to find your place at Kingsbridge."
				image="sports"
				alt="Students enjoying a game of basketball"
			>
				<ButtonLink href="#a-day">A day at Kingsbridge</ButtonLink>
			</PageHero>
			<section className="section">
				<div className="container">
					<SectionHeading
						eyebrow="Beyond the classroom"
						title={
							<>
								Not just what you know.
								<br />
								<em>What you discover.</em>
							</>
						}
						text="Our enrichment concept gives students time to explore an interest, work with different people and contribute to something larger than themselves."
					/>
					<div className="three-grid">
						<article className="editorial-card">
							<Icon name="sun" />
							<h3>Sport & movement</h3>
							<p>
								Basketball, football, athletics and a varied physical education
								programme make room for both beginners and confident players.
								Students practise teamwork, resilience and the pleasure of
								improving a skill.
							</p>
							<p>
								House activities and friendly fixtures bring the community
								together. Participation matters alongside performance, with
								opportunities to lead, encourage and help organise.
							</p>
						</article>
						<article className="editorial-card">
							<Icon name="book" />
							<h3>Arts & expression</h3>
							<p>
								Music, visual arts, drama and public speaking give students
								different ways to find their voice. Creative work develops
								technique, imagination and the confidence to share something of
								your own.
							</p>
							<p>
								Exhibitions, informal performances and collaborative projects
								make the process visible, celebrating thoughtful work as well as
								a polished final piece.
							</p>
						</article>
						<article className="editorial-card">
							<Icon name="leaf" />
							<h3>Clubs & contribution</h3>
							<p>
								Science and robotics, coding, debate, reading, enterprise and
								environmental clubs turn interests into shared experiences.
								Students can explore a subject in a different way or try one
								they have never considered.
							</p>
							<p>
								Service projects and student leadership encourage
								responsibility. The question is not only “What can I achieve?”
								but also “What can I contribute?”
							</p>
						</article>
					</div>
				</div>
			</section>
			<section className="section wellbeing-section" id="wellbeing">
				<div className="container split-layout">
					<Photo
						name="library"
						alt="Students working together in a calm, welcoming library"
						className="tall-photo"
					/>
					<div className="prose">
						<Eyebrow>Belonging comes first</Eyebrow>
						<h2>
							Someone who notices.
							<br />
							<em>Somewhere to turn.</em>
						</h2>
						<p className="lead">
							Students learn best when they feel safe, respected and able to ask
							for help.
						</p>
						<p>
							Our pastoral model starts with a tutor who gets to know each
							student. Regular check-ins create a familiar space to talk about
							learning, friendships and the practical challenges of school life.
						</p>
						<p>
							Clear behaviour expectations help make kindness and respect
							ordinary. We teach students how to resolve disagreements, report
							bullying and use digital spaces responsibly. Concerns are taken
							seriously and followed up, with families involved when
							appropriate.
						</p>
						<p>
							Wellbeing is part of everyday practice: balanced routines, time
							outdoors, thoughtful feedback and support during demanding
							periods. Where a concern needs specialist attention, a real school
							would work with families and qualified professionals.
						</p>
						<TextLink href="/policies#safeguarding">
							Our safeguarding principles
						</TextLink>
					</div>
				</div>
			</section>
			<section className="section" id="a-day">
				<div className="container schedule-layout">
					<div>
						<Eyebrow>A day at Kingsbridge</Eyebrow>
						<h2>
							A rhythm for
							<br />
							<em>learning and living.</em>
						</h2>
						<p>
							A typical day balances concentration, connection and a little
							space to breathe. Times below illustrate the day-school concept.
						</p>
						<CampusTour />
					</div>
					<div className="schedule">
						{dailySchedule.map((item) => (
							<div className="schedule-row" key={item.time}>
								<time>{item.time}</time>
								<div>
									<h3>{item.title}</h3>
									<p>{item.text}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="section soft-section">
				<div className="container">
					<SectionHeading
						eyebrow="The house community"
						title={
							<>
								A smaller circle.
								<br />
								<em>A stronger connection.</em>
							</>
						}
						text="Our house concept brings students across year groups together for shared activities, friendly competitions and opportunities to support one another."
					/>
					<div className="house-grid">
						{[
							{
								name: "Oak",
								word: "Stand with courage",
								text: "Steady effort, honest decisions and the confidence to do what is right.",
							},
							{
								name: "Cedar",
								word: "Grow with purpose",
								text: "Curiosity, thoughtful leadership and a commitment to keep improving.",
							},
							{
								name: "Willow",
								word: "Lead with kindness",
								text: "Care, adaptability and the ability to make another person feel included.",
							},
							{
								name: "Elm",
								word: "Reach together",
								text: "Teamwork, community spirit and the understanding that progress is shared.",
							},
						].map((house, index) => (
							<article key={house.name} className={`house house-${index}`}>
								<Icon name="leaf" />
								<h3>{house.name}</h3>
								<span>{house.word}</span>
								<p>{house.text}</p>
							</article>
						))}
					</div>
				</div>
			</section>
			<VisitCTA />
		</main>
	);
}
