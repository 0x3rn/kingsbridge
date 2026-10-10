import type { Metadata } from "next";
import { Reveal } from "@/components/interactive";
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
import { values } from "@/lib/content";
export const metadata: Metadata = {
	alternates: { canonical: "/about" },
	title: "Our college",
	description:
		"Get to know the purpose, values and people-first approach behind Kingsbridge College.",
};
export default function About() {
	return (
		<main id="main">
			<PageHero
				eyebrow="Our college"
				title={
					<>
						An education
						<br />
						with <em>people at its heart.</em>
					</>
				}
				description="A school should open up the world. It should also give young people a place in it. That is the idea at the heart of Kingsbridge."
				image="campus"
				alt="Students walking together through the Kingsbridge campus"
			>
				<ButtonLink href="/visit">Come and meet us</ButtonLink>
			</PageHero>
			<section className="section">
				<div className="container split-layout">
					<div>
						<Eyebrow>Our purpose</Eyebrow>
						<h2>
							Growing up.
							<br />
							Looking out.
							<br />
							<em>Moving forward.</em>
						</h2>
					</div>
					<div className="prose">
						<p className="lead">
							Kingsbridge College is imagined as a co-educational day school for
							young people moving through the six years of junior and senior
							secondary education.
						</p>
						<p>
							Our purpose is simple: to help students become capable learners
							and thoughtful people. That means building secure foundations in
							the classroom while making room for creativity, relationships,
							responsibility and a growing sense of self.
						</p>
						<p>
							We believe ambition and care belong together. A student can be
							challenged to produce better work and still feel understood. A
							lesson can be demanding and still leave room for a question. A
							school can value achievement without reducing a young person to a
							result.
						</p>
						<p>
							Our approach connects learning, pastoral support and enrichment
							rather than treating them as separate parts of the timetable. Each
							contributes to the confidence students need to take their next
							step.
						</p>
					</div>
				</div>
			</section>
			<section className="section soft-section">
				<div className="container">
					<SectionHeading
						eyebrow="Our shared foundations"
						title={
							<>
								Three values.
								<br />
								<em>One everyday practice.</em>
							</>
						}
						text="Values mean something when you can see them in a lesson, a conversation and a small act of kindness."
					/>
					<div className="three-grid">
						{values.map((value) => (
							<Reveal className="editorial-card" key={value.title}>
								<span className="large-number">{value.number}</span>
								<h3>{value.title}</h3>
								<p>{value.text}</p>
							</Reveal>
						))}
					</div>
				</div>
			</section>
			<section className="section">
				<div className="container split-layout">
					<Photo
						name="library"
						alt="Students exchanging ideas and studying together"
						className="tall-photo"
					/>
					<div className="prose">
						<Eyebrow>The Kingsbridge approach</Eyebrow>
						<h2>
							A clear expectation.
							<br />
							<em>A helping hand.</em>
						</h2>
						<p>
							We want students to feel that effort leads somewhere. Teachers
							make learning goals clear, model useful strategies and give
							feedback that points to a next step. Students learn to recognise
							progress, reflect on setbacks and take increasing ownership of
							their work.
						</p>
						<p>
							Alongside this, a tutor provides a familiar point of contact.
							Daily check-ins and regular family conversations help notice
							changes early: a student who has gone quiet, a new interest worth
							encouraging or a challenge that needs a different approach.
						</p>
						<ul className="check-list">
							<li>
								<Icon name="check" />
								Clear teaching and constructive feedback
							</li>
							<li>
								<Icon name="check" />A broad curriculum with thoughtful choices
							</li>
							<li>
								<Icon name="check" />
								Consistent routines and respectful relationships
							</li>
							<li>
								<Icon name="check" />A genuine partnership with families
							</li>
						</ul>
						<TextLink href="/academics">See how learning works</TextLink>
					</div>
				</div>
			</section>
			<section className="statement-section">
				<div className="container">
					<Eyebrow light>Our promise to young people</Eyebrow>
					<h2>
						“You don’t have to know
						<br />
						who you’ll become.
						<br />
						Just be willing to <em>begin.</em>”
					</h2>
					<p>The Kingsbridge philosophy</p>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<SectionHeading
						eyebrow="A school is a community"
						title={
							<>
								Different roles.
								<br />
								<em>A shared responsibility.</em>
							</>
						}
					/>
					<div className="three-grid">
						<article className="editorial-card">
							<Icon name="book" />
							<h3>Teachers who guide</h3>
							<p>
								Subject teachers bring structure, knowledge and encouragement to
								the work of learning. They model intellectual curiosity and help
								students build the habits that make understanding last.
							</p>
						</article>
						<article className="editorial-card">
							<Icon name="leaf" />
							<h3>Families who partner</h3>
							<p>
								Families know their children in ways a school cannot. Open,
								practical communication helps connect school expectations with
								home routines and gives students a consistent circle of support.
							</p>
						</article>
						<article className="editorial-card">
							<Icon name="sun" />
							<h3>Students who contribute</h3>
							<p>
								Students are active members of the community. Through house
								activities, student voice and service, they practise making
								decisions, helping others and taking care of shared spaces.
							</p>
						</article>
					</div>
				</div>
			</section>
			<VisitCTA />
		</main>
	);
}
