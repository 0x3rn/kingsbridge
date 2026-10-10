import type { Metadata } from "next";
import Link from "next/link";
import { CampusTour, FAQ, Reveal } from "@/components/interactive";
import {
	ButtonLink,
	Eyebrow,
	NewsCard,
	Photo,
	TextLink,
} from "@/components/ui";
import {
	Cards,
	NextAction,
	SchoolFacts,
	Section,
	StageCards,
} from "@/components/page-sections";
import { homeFaqs, news, values } from "@/lib/content";
export const metadata: Metadata = { alternates: { canonical: "/" } };
export default function Home() {
	return (
		<main id="main">
			<section className="home-hero">
				<Photo
					name="campus"
					alt="Students walking along a tree-lined school path."
					eager
					sizes="100vw"
					className="home-hero-image"
				/>
				<div className="hero-shade" />
				<div className="container home-hero-content">
					<div className="hero-copy">
						<Eyebrow light>WELCOME TO KINGSBRIDGE COLLEGE</Eyebrow>
						<h1>
							A strong foundation for <em>learning and life.</em>
						</h1>
						<p>
							Kingsbridge College is a co-educational day secondary school in
							Lagos, offering Junior and Senior Secondary education. We combine
							thorough teaching, sound character development and personal
							guidance to help our students succeed in school and prepare for
							life beyond it.
						</p>
						<div className="button-row">
							<ButtonLink href="/admissions" variant="gold">
								Admissions
							</ButtonLink>
							<ButtonLink href="/about" variant="light">
								About Our School
							</ButtonLink>
						</div>
						<CampusTour label="View Our Campus" />
					</div>
				</div>
			</section>
			<section className="facts-strip" aria-label="School information">
				<div className="container">
					<SchoolFacts />
				</div>
			</section>
			<section className="section" id="welcome">
				<div className="container split-layout">
					<Reveal>
						<figure>
							<Photo
								name="library"
								alt="Students reading and discussing a book."
								className="welcome-main-photo"
							/>
							<figcaption>Learning in the library</figcaption>
						</figure>
					</Reveal>
					<div className="welcome-copy">
						<Eyebrow>LEARNING AT KINGSBRIDGE</Eyebrow>
						<h2>A school that takes learning and character seriously.</h2>
						<p className="lead">
							At Kingsbridge, we want our students to understand what they
							learn, develop good study habits and take responsibility for their
							progress. Our teachers provide clear explanations, regular
							assessment and guidance on areas that need improvement.
						</p>
						<p>
							We also recognise that students learn best when they feel
							supported. Class teachers work with subject teachers and parents
							to help each student settle into school, stay organised and
							participate confidently.
						</p>
						<ul className="support-links">
							<li>
								<Link href="/academics#teaching">Clear teaching</Link>
							</li>
							<li>
								<Link href="/academics#teaching">Regular assessment</Link>
							</li>
							<li>
								<Link href="/school-life#wellbeing">Personal guidance</Link>
							</li>
							<li>
								<Link href="/parents#communication">
									Communication with parents
								</Link>
							</li>
						</ul>
						<TextLink href="/academics#teaching">
							Our Approach to Teaching
						</TextLink>
					</div>
				</div>
			</section>
			<Section
				title="Education from JSS1 to SS3."
				intro="Our Junior and Senior Secondary programmes support students through each stage of secondary school, from building strong foundations to making subject choices and preparing for examinations."
				soft
			>
				<StageCards />
			</Section>
			<Section title="The values we expect our students to practise.">
				<Cards items={values} />
			</Section>
			<Section
				title="Learning beyond the classroom."
				intro="Sports, creative activities, clubs and societies give our students opportunities to develop skills, work with others and take part in school life. We encourage students to discover interests beyond their academic subjects."
				soft
			>
				<div className="split-layout">
					<figure>
						<Photo
							name="sports"
							alt="Students playing basketball."
							className="activity-photo"
						/>
						<figcaption>Sports and teamwork</figcaption>
						<TextLink href="/school-life">School Life at Kingsbridge</TextLink>
					</figure>
					<article className="support-card">
						<h3>Guidance throughout the school day.</h3>
						<p>
							Our class teachers provide a familiar point of contact for
							students. They work with parents and subject teachers to address
							concerns about learning, behaviour and general wellbeing.
						</p>
						<TextLink href="/school-life#wellbeing">Student Support</TextLink>
					</article>
				</div>
			</Section>
			<Section
				title="Join Kingsbridge College."
				intro="We welcome enquiries from parents seeking admission into JSS1, SS1 and other eligible classes. Find out about our entry requirements, entrance assessment and application process."
			>
				<div className="button-row">
					<ButtonLink href="/admissions#requirements">
						Admission Requirements
					</ButtonLink>
					<TextLink href="/contact">Contact Admissions</TextLink>
				</div>
			</Section>
			<Section
				title="Latest from Kingsbridge."
				intro="Classroom activities, school events and updates from our school community."
				soft
			>
				<div className="news-grid">
					{news.slice(0, 3).map((article) => (
						<NewsCard key={article.slug} article={article} />
					))}
				</div>
				<TextLink href="/news">View All News</TextLink>
			</Section>
			<Section title="Frequently Asked Questions">
				<FAQ items={homeFaqs} />
				<TextLink href="/admissions#questions">
					More Admission Questions
				</TextLink>
			</Section>
			<NextAction context="joining" />
		</main>
	);
}
