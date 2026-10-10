import type { Metadata } from "next";
import Link from "next/link";
import { CampusTour, FAQ, Reveal } from "@/components/interactive";
import {
	ButtonLink,
	Eyebrow,
	Icon,
	NewsCard,
	Photo,
	SectionHeading,
	TextLink,
	VisitCTA,
} from "@/components/ui";
import { news, values } from "@/lib/content";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
	return (
		<main id="main">
			<section className="home-hero">
				<Photo
					name="campus"
					alt="Kingsbridge students walking together along a sunlit, tree-lined campus path"
					eager
					sizes="100vw"
					className="home-hero-image"
				/>
				<div className="hero-shade" />
				<div className="container home-hero-content">
					<div className="hero-copy">
						<Eyebrow light>Welcome to Kingsbridge College</Eyebrow>
						<h1>
							A place to learn.
							<br />A life to <em>shape.</em>
						</h1>
						<p>
							More than lessons. More than results.
							<br />
							An education that helps young people
							<br className="desktop-only" /> discover who they are—and who they
							can become.
						</p>
						<div className="button-row">
							<ButtonLink href="/admissions" variant="gold">
								Discover your next chapter
							</ButtonLink>
							<Link className="hero-simple-link" href="/about">
								Meet Kingsbridge <Icon name="diagonal" />
							</Link>
						</div>
					</div>
					<div className="hero-bottom">
						<span>Curiosity. Character. Possibility.</span>
						<CampusTour />
					</div>
				</div>
				<a
					href="#welcome"
					className="hero-scroll"
					aria-label="Scroll to discover Kingsbridge"
				>
					<span>Scroll to discover</span>
					<Icon />
				</a>
			</section>
			<section className="intro-strip">
				<div className="container">
					<div>
						<Icon name="book" />
						<span>
							A strong foundation<small>Junior & senior secondary</small>
						</span>
					</div>
					<div>
						<Icon name="leaf" />
						<span>
							Room to become<small>Learning beyond the classroom</small>
						</span>
					</div>
					<div>
						<Icon name="sun" />
						<span>
							A community that cares
							<small>Every student known. Every voice valued.</small>
						</span>
					</div>
				</div>
			</section>
			<section className="section welcome-section" id="welcome">
				<div className="container split-layout">
					<Reveal className="welcome-photos">
						<Photo
							name="library"
							alt="Students exploring ideas together in the Kingsbridge library"
							className="welcome-main-photo"
						/>
						<div className="photo-label">
							<span className="label-line" />
							<p>
								Big ideas begin
								<br />
								with a little curiosity.
							</p>
						</div>
						<span className="photo-corner">THE KINGSBRIDGE WAY</span>
					</Reveal>
					<Reveal className="welcome-copy">
						<Eyebrow>An education with a wider view</Eyebrow>
						<h2>
							Strong minds.
							<br />
							Good hearts.
							<br />
							<em>Open futures.</em>
						</h2>
						<p className="lead">
							These years matter. Not just for the examinations at the end, but
							for the person taking shape along the way.
						</p>
						<p>
							At Kingsbridge, we bring purposeful learning and a genuine sense
							of belonging into the same school day. Students are encouraged to
							think deeply, try something unfamiliar and take responsibility for
							the world around them.
						</p>
						<p>
							Our six-year secondary journey gives young people a strong
							academic foundation, space to discover their interests and the
							confidence to move forward as themselves.
						</p>
						<TextLink href="/about">Get to know our college</TextLink>
					</Reveal>
				</div>
			</section>
			<section className="section learning-section">
				<div className="container">
					<SectionHeading
						eyebrow="A journey. Not just a timetable."
						title={
							<>
								The foundations for
								<br />
								<em>whatever comes next.</em>
							</>
						}
						text="A broad beginning. Thoughtful choices. A clear path from the first day of secondary school to the next stage of life."
					>
						<TextLink href="/academics">Explore our approach</TextLink>
					</SectionHeading>
					<div className="programme-grid">
						<Reveal>
							<Link
								href="/academics/junior-secondary"
								className="programme-card"
							>
								<Photo
									name="science"
									alt="Junior students exploring a science investigation together"
								/>
								<div className="programme-content">
									<span className="eyebrow">JSS1 — JSS3</span>
									<h3>A world to discover.</h3>
									<p>Junior secondary</p>
									<div className="programme-description">
										Build strong foundations. Explore new subjects. Find the
										confidence to ask, try and grow.
									</div>
									<span className="programme-link">
										Explore junior school <Icon name="diagonal" />
									</span>
								</div>
							</Link>
						</Reveal>
						<Reveal>
							<Link
								href="/academics/senior-secondary"
								className="programme-card"
							>
								<Photo
									name="library"
									alt="Senior students discussing a text in the school library"
								/>
								<div className="programme-content">
									<span className="eyebrow">SS1 — SS3</span>
									<h3>A future to make your own.</h3>
									<p>Senior secondary</p>
									<div className="programme-description">
										Deepen your interests. Make informed choices. Prepare for
										examinations and life beyond them.
									</div>
									<span className="programme-link">
										Explore senior school <Icon name="diagonal" />
									</span>
								</div>
							</Link>
						</Reveal>
					</div>
					<div className="learning-footnote">
						<span>Six years of purposeful learning</span>
						<span>
							One connected Kingsbridge journey <Icon />
						</span>
					</div>
				</div>
			</section>
			<section className="values-section">
				<div className="container">
					<div className="values-intro">
						<Eyebrow light>The things we grow together</Eyebrow>
						<h2>
							A little more
							<br />
							than an <em>education.</em>
						</h2>
						<p>
							What students learn matters.
							<br />
							How they learn to live matters, too.
						</p>
					</div>
					<div className="values-list">
						{values.map((value) => (
							<Reveal key={value.title} className="value-row">
								<span>{value.number}</span>
								<div>
									<h3>{value.title}</h3>
									<p>{value.text}</p>
								</div>
								<Icon name="diagonal" />
							</Reveal>
						))}
					</div>
				</div>
			</section>
			<section className="section school-life-section">
				<div className="container">
					<SectionHeading
						eyebrow="Life in full colour"
						title={
							<>
								Find your people.
								<br />
								<em>Find your thing.</em>
							</>
						}
						text="There is a whole world of learning between the lessons. A team to join. A stage to step onto. An idea to bring to life."
					>
						<TextLink href="/school-life">Experience school life</TextLink>
					</SectionHeading>
					<div className="life-mosaic">
						<Reveal className="life-feature">
							<Photo
								name="sports"
								alt="Kingsbridge students playing basketball on a sunny afternoon"
							/>
							<div className="life-photo-copy">
								<span>Move. Make. Belong.</span>
								<h3>
									Room for every
									<br />
									side of you.
								</h3>
								<ButtonLink href="/school-life" variant="light">
									Beyond the classroom
								</ButtonLink>
							</div>
						</Reveal>
						<div className="life-side">
							<Photo
								name="science"
								alt="A teacher supporting students during a practical science lesson"
							/>
							<div className="life-note">
								<Icon name="leaf" />
								<h3>
									Known as a person.
									<br />
									Supported as a learner.
								</h3>
								<p>
									A tutor who checks in. A teacher who notices. A community that
									helps students feel safe enough to stretch themselves.
								</p>
								<TextLink href="/school-life#wellbeing">
									Our approach to wellbeing
								</TextLink>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="admissions-band">
				<div className="container">
					<span className="admissions-band-label">
						<span className="status-dot" />
						Your next chapter
					</span>
					<h2>
						Good questions.
						<br />
						<em>Great beginnings.</em>
					</h2>
					<p>
						Choosing a school is a big decision.
						<br />
						We’ll help you explore it, one step at a time.
					</p>
					<ButtonLink href="/admissions" variant="primary">
						Your admissions guide
					</ButtonLink>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<SectionHeading
						eyebrow="The Kingsbridge journal"
						title={
							<>
								A school full
								<br />
								of <em>stories.</em>
							</>
						}
					>
						<TextLink href="/news">All news & stories</TextLink>
					</SectionHeading>
					<div className="news-grid">
						{news.slice(0, 3).map((article) => (
							<Reveal key={article.slug}>
								<NewsCard article={article} />
							</Reveal>
						))}
					</div>
				</div>
			</section>
			<section className="section faq-section">
				<div className="container faq-layout">
					<div>
						<Eyebrow>A few things you might be wondering</Eyebrow>
						<h2>
							Let’s start with
							<br />
							your <em>questions.</em>
						</h2>
						<p>
							From entry requirements to the first school day, it’s natural to
							want to know more.
						</p>
						<TextLink href="/contact">Start a conversation</TextLink>
					</div>
					<FAQ items={undefined} />
				</div>
			</section>
			<VisitCTA />
		</main>
	);
}
