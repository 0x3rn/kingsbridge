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
import { homeFaqs, news } from "@/lib/content";
export default function Home() {
	return (
		<main id="main">
			<section className="home-hero">
				<Photo
					name="campus"
					alt="AI-generated illustration of students walking along a tree-lined school path."
					eager
					sizes="100vw"
					className="home-hero-image"
				/>
				<div className="hero-shade" />
				<div className="container home-hero-content">
					<div className="hero-copy">
						<Eyebrow light>Junior and senior secondary · Lagos</Eyebrow>
						<h1>
							A strong start. <em>A confident next step.</em>
						</h1>
						<p>
							Kingsbridge is a co-educational day school concept for students in
							JSS1–SS3. It brings together classroom learning, personal support
							and opportunities to explore interests beyond lessons.
						</p>
						<div className="button-row">
							<ButtonLink href="/admissions" variant="gold">
								View admissions
							</ButtonLink>
							<ButtonLink href="/academics" variant="light">
								Explore academics
							</ButtonLink>
						</div>
						<CampusTour />
					</div>
				</div>
			</section>
			<section className="facts-strip" aria-label="School facts">
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
								alt="Illustrative students reading and discussing a book."
								className="welcome-main-photo"
							/>
							<figcaption>
								Reading, research and discussion · Illustrative image
							</figcaption>
						</figure>
					</Reveal>
					<div className="welcome-copy">
						<Eyebrow>Learning and support</Eyebrow>
						<h2>Learning matters. So does feeling supported.</h2>
						<p className="lead">
							Secondary school brings new subjects, growing responsibilities and
							important choices. The Kingsbridge model combines clear teaching
							and useful feedback with regular tutor contact, practical routines
							and communication with families.
						</p>
						<p>
							Students develop their knowledge, learn to manage their work and
							have room to try sport, creative activities and clubs.
						</p>
						<ul className="support-links">
							<li>
								<Link href="/academics#teaching">Clear learning goals</Link>
							</li>
							<li>
								<Link href="/school-life#wellbeing">A tutor to turn to</Link>
							</li>
							<li>
								<Link href="/parents#communication">
									Progress shared with families
								</Link>
							</li>
						</ul>
						<TextLink href="/academics">How learning works</TextLink>
					</div>
				</div>
			</section>
			<Section
				title="Two stages. One secondary-school journey."
				intro="Start with a broad curriculum in junior secondary, then make more focused subject choices in the senior years."
				soft
			>
				<StageCards />
			</Section>
			<Section
				title="There is more to the school day than lessons."
				intro="Sport, music, art, debate and practical clubs give students ways to try something new and contribute beyond the classroom."
			>
				<div className="split-layout">
					<figure>
						<Photo
							name="sports"
							alt="Illustrative basketball activity."
							className="activity-photo"
						/>
						<figcaption>Sport and teamwork · Illustrative image</figcaption>
						<TextLink href="/school-life#activities">
							Explore clubs and activities
						</TextLink>
					</figure>
					<article className="support-card">
						<Eyebrow>Learning and personal support</Eyebrow>
						<h3>A familiar adult to ask for help</h3>
						<p>
							Tutor check-ins help students raise questions about schoolwork,
							friendships and everyday school life.
						</p>
						<TextLink href="/school-life#wellbeing">
							Read about student support
						</TextLink>
					</article>
				</div>
			</Section>
			<Section
				title="Understand the steps before you begin."
				intro="See the model entry requirements for JSS1, SS1 and transfers, what an assessment involves, and which documents a family would prepare."
				soft
			>
				<Cards
					columns={4}
					items={[
						{
							title: "1. Enquire",
							text: "Ask about the entry point and school model.",
						},
						{
							title: "2. Visit",
							text: "Explore learning spaces and routines.",
						},
						{
							title: "3. Apply and assess",
							text: "Review records and complete age-appropriate tasks.",
						},
						{
							title: "4. Offer and induction",
							text: "Review written terms and prepare to join.",
						},
					]}
				/>
				<p className="demo-note">
					An illustrative admissions process for the fictional school concept.
				</p>
				<ButtonLink href="/admissions">View admissions</ButtonLink>
			</Section>
			<Section
				title="Learning and life at Kingsbridge"
				intro="Example stories from this fictional school community."
			>
				<div className="news-grid">
					{news.slice(0, 3).map((article) => (
						<NewsCard key={article.slug} article={article} />
					))}
				</div>
				<TextLink href="/news">View all news</TextLink>
			</Section>
			<Section title="Questions families ask first" soft>
				<FAQ items={homeFaqs} />
				<TextLink href="/admissions#questions">
					View all admissions questions
				</TextLink>
			</Section>
			<NextAction context="joining" />
		</main>
	);
}
