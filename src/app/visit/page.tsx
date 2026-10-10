import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { CampusTour } from "@/components/interactive";
import {
	Eyebrow,
	Icon,
	PageHero,
	Photo,
	SectionHeading,
} from "@/components/ui";
export const metadata: Metadata = {
	title: "Visit Kingsbridge",
	description:
		"Explore the campus and prepare a personal school visit enquiry.",
};
export default function Visit() {
	return (
		<main id="main">
			<PageHero
				eyebrow="Visit Kingsbridge"
				title={
					<>
						Some things you
						<br />
						just need to <em>feel.</em>
					</>
				}
				description="A conversation in a classroom. The atmosphere between lessons. A glimpse of the place your child might grow. Start exploring Kingsbridge."
				image="campus"
				alt="Sunlight falling across the Kingsbridge campus path"
			>
				<CampusTour />
			</PageHero>
			<section className="section">
				<div className="container">
					<SectionHeading
						eyebrow="Make the visit yours"
						title={
							<>
								Walk. Wonder.
								<br />
								<em>Ask away.</em>
							</>
						}
						text="A useful school visit gives you a feel for the everyday experience and the space to ask questions that are personal to your family."
					/>
					<div className="three-grid">
						<article className="editorial-card">
							<Icon name="location" />
							<h3>A personal campus visit</h3>
							<p>
								A smaller, guided introduction to the learning spaces, library,
								outdoor areas and school routines. There is time to discuss your
								child’s interests and the next stage of learning.
							</p>
							<span className="small-copy">
								Typical format · weekday appointment
							</span>
						</article>
						<article className="editorial-card">
							<Icon name="sun" />
							<h3>A Saturday open morning</h3>
							<p>
								An opportunity to explore several areas of school life, meet
								subject teams and enjoy a more informal introduction. Families
								can ask questions together and compare what matters to them.
							</p>
							<span className="small-copy">
								Typical format · scheduled open event
							</span>
						</article>
						<article className="editorial-card">
							<Icon name="book" />
							<h3>An online conversation</h3>
							<p>
								If an in-person visit is not convenient, an initial conversation
								can cover the curriculum, entry process and your family’s
								priorities. It is a useful first step before a future campus
								visit.
							</p>
							<span className="small-copy">
								Typical format · video appointment
							</span>
						</article>
					</div>
				</div>
			</section>
			<section className="section soft-section">
				<div className="container form-layout">
					<aside className="form-sidebar">
						<Eyebrow>Plan a visit</Eyebrow>
						<h2>
							Bring your
							<br />
							<em>good questions.</em>
						</h2>
						<p>
							Choose the experience that suits your family, and add anything you
							would like to explore.
						</p>
						<Photo name="library" alt="A warm and welcoming school library" />
						<div className="demo-note">
							<strong>No live bookings</strong>
							<p>
								This form creates a local visit enquiry summary. It does not
								book an appointment. The campus and imagery are fictional.
							</p>
						</div>
					</aside>
					<EnquiryForm mode="visit" />
				</div>
			</section>
		</main>
	);
}
