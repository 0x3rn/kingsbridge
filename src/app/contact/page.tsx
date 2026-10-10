import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { Eyebrow, Icon, PageHero, TextLink } from "@/components/ui";
export const metadata: Metadata = {
	title: "Get in touch",
	description:
		"Find the right conversation at Kingsbridge: admissions, learning, school life and family support.",
};
export default function Contact() {
	return (
		<main id="main">
			<PageHero
				eyebrow="Get in touch"
				title={
					<>
						Good conversations.
						<br />
						<em>Open doors.</em>
					</>
				}
				description="Whether you’re exploring a place, curious about the curriculum or looking for practical information, start with the conversation that matters to you."
			/>
			<section className="section">
				<div className="container three-grid">
					<article className="contact-card">
						<Icon name="book" />
						<h3>Considering Kingsbridge?</h3>
						<p>
							Explore entry points, assessments and the steps from an initial
							enquiry to joining the school community.
						</p>
						<TextLink href="/admissions">Your admissions guide</TextLink>
					</article>
					<article className="contact-card">
						<Icon name="calendar" />
						<h3>Want a closer look?</h3>
						<p>
							A visit is a chance to see the learning spaces and ask the
							questions a website cannot answer on its own.
						</p>
						<TextLink href="/visit">Plan a visit</TextLink>
					</article>
					<article className="contact-card">
						<Icon name="leaf" />
						<h3>Looking for family information?</h3>
						<p>
							Find the school-day rhythm, term calendar, uniform guidance and
							our approach to communication.
						</p>
						<TextLink href="/parents">For our families</TextLink>
					</article>
				</div>
			</section>
			<section className="section soft-section">
				<div className="container form-layout">
					<aside className="form-sidebar">
						<Eyebrow>Start a conversation</Eyebrow>
						<h2>
							What would you
							<br />
							like to <em>know?</em>
						</h2>
						<p>
							Pick a topic, write your question and review the details. You can
							download the resulting enquiry summary.
						</p>
						<div className="contact-info">
							<Icon name="location" />
							<div>
								<strong>Imagined in Lagos, Nigeria</strong>
								<p>
									Kingsbridge is a portfolio concept with no real campus,
									telephone number or admissions office.
								</p>
							</div>
						</div>
						<div className="demo-note">
							<strong>A useful demo, not a live inbox</strong>
							<p>
								Use invented details. Your message is not sent anywhere, and no
								response will be issued.
							</p>
						</div>
					</aside>
					<EnquiryForm mode="contact" />
				</div>
			</section>
		</main>
	);
}
