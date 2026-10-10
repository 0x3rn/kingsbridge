import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, PageHero, TextLink } from "@/components/ui";
export const metadata: Metadata = {
	title: "Privacy & safeguarding",
	description:
		"Information about the fictional Kingsbridge portfolio, browser-only forms and model school safeguarding principles.",
};
export default function Policies() {
	return (
		<main id="main">
			<PageHero
				eyebrow="Privacy & safeguarding"
				title={
					<>
						Care, clarity
						<br />
						and <em>trust.</em>
					</>
				}
				description="A clear explanation of this portfolio website, how the demo interactions work and the safeguarding principles behind the school concept."
			/>
			<div className="container policy-layout section">
				<aside className="policy-nav">
					<Eyebrow>On this page</Eyebrow>
					<a href="#portfolio">About the portfolio</a>
					<a href="#privacy">Your information</a>
					<a href="#safeguarding">Safeguarding principles</a>
					<a href="#accessibility">Accessibility</a>
				</aside>
				<div className="prose policy-prose">
					<section id="portfolio">
						<h2>A fictional college, an original project.</h2>
						<p>
							Kingsbridge College is a school website concept created for a
							design and development portfolio. It is not an operating
							educational institution. The curriculum, admissions process,
							school routines, news stories and term dates are illustrative
							content written for this project.
						</p>
						<p>
							The campus and school-life images are AI-generated illustrations
							of the fictional school. No real student or teacher is presented
							as a member of Kingsbridge. There are no live applications, real
							bookings, tuition payments or school services on this website.
						</p>
					</section>
					<section id="privacy">
						<h2>Your information stays with you.</h2>
						<p>
							The application, visit and contact forms run in your browser.
							Values are kept in temporary page memory while you move between
							steps. Refreshing the page clears the form. Completing the
							experience does not send your information to a server or create a
							school record.
						</p>
						<p>
							If you choose to download a summary, the browser creates a text
							file on your device. You control that file and can delete it. The
							demo does not request document uploads, dates of birth, payment
							details or specialist reports. Please use invented information
							when exploring it.
						</p>
						<p>
							The newsletter interaction is also a demonstration. It does not
							create a mailing-list subscription, save an email address or send
							a message. This project does not add third-party analytics or
							advertising scripts. Fonts and images are served with the site
							rather than loaded from an external font or image service.
						</p>
						<p>
							When the project is hosted, the hosting provider may process
							technical request information according to its own policies. This
							page describes the website’s own features, not a hosting
							provider’s separate practices.
						</p>
					</section>
					<section id="safeguarding">
						<h2>A model of a caring school.</h2>
						<p>
							Safeguarding is part of the Kingsbridge school concept: creating
							an environment where students are heard, treated with dignity and
							able to ask for help. In a real school, these principles must be
							supported by an approved policy, trained staff and clear reporting
							responsibilities.
						</p>
						<h3>Listen and act</h3>
						<p>
							A concern should be received calmly, recorded appropriately and
							passed to the designated safeguarding lead. Students should know
							several trusted adults they can approach and understand that a
							concern will not be dismissed because it seems small.
						</p>
						<h3>Clear routines and respectful relationships</h3>
						<p>
							Supervision, visitor arrangements, collection procedures and
							professional boundaries contribute to a safe school day. Behaviour
							expectations should address bullying, discrimination and online
							conduct, with consistent follow-up and support for affected
							students.
						</p>
						<h3>Partnership and confidentiality</h3>
						<p>
							Information should be shared only with the people who need it to
							support or protect a student. Families should understand the
							school’s reporting process, while staff recognise circumstances in
							which a concern requires an external safeguarding response.
						</p>
						<p>
							This page is an illustrative summary, not an operational
							safeguarding policy or a live reporting channel. Concerns about a
							student at an actual school should be raised through that school’s
							published procedures.
						</p>
					</section>
					<section id="accessibility">
						<h2>A website made to be explored.</h2>
						<p>
							The site uses semantic headings, keyboard-accessible navigation,
							labelled forms and visible focus states. Interactive dialogs can
							be closed with the Escape key. Motion respects the reduced-motion
							preference on your device, and the layout adapts to smaller
							screens.
						</p>
						<p>
							Images include descriptions where they add meaning. Curriculum and
							journal filters include status updates, and enquiry forms allow
							details to be reviewed before a summary is created.
						</p>
						<p>
							For an overview of the site, use the search button in the
							navigation or explore the{" "}
							<Link href="/prospectus">college prospectus</Link>.
						</p>
					</section>
					<TextLink href="/">Return to Kingsbridge</TextLink>
				</div>
			</div>
		</main>
	);
}
