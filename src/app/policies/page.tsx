import type { Metadata } from "next";
import Link from "next/link";
import { JumpLinks, PageOpening } from "@/components/page-sections";
export const metadata: Metadata = {
	alternates: { canonical: "/policies" },
	title: "Student Welfare and Website Information",
	description:
		"Student welfare information and details about this portfolio preview, browser-only forms and hosting.",
};
export default function Policies() {
	return (
		<main id="main" className="reference-page">
			<PageOpening
				compact
				title="Student Welfare"
				label="Welfare and Website Information"
				intro="The wellbeing of our students is important to their learning and school experience."
			/>
			<JumpLinks
				links={[
					{ label: "Student Support", href: "#safeguarding" },
					{ label: "Respectful Conduct", href: "#conduct" },
					{ label: "Working with Parents", href: "#parents" },
					{ label: "Website Information", href: "#project" },
				]}
			/>
			<div className="container policy-content prose reading-width">
				<section id="safeguarding">
					<h2>Student Support</h2>
					<p>
						Students are encouraged to speak with their class teacher or another
						trusted member of staff when they have a concern.
					</p>
				</section>
				<section id="conduct">
					<h2>Respectful Conduct</h2>
					<p>
						We expect students to treat others with respect and follow school
						rules. Concerns about bullying or inappropriate behaviour should be
						reported to the school.
					</p>
				</section>
				<section id="parents">
					<h2>Working with Parents</h2>
					<p>
						Parents are encouraged to raise concerns promptly so that the
						relevant staff can discuss the matter and agree appropriate next
						steps.
					</p>
				</section>
				<section id="project" className="website-information">
					<h2>About This Portfolio Preview</h2>
					<p>
						Kingsbridge College is a fictional school used to demonstrate this
						website design. The school content, news, dates and campus images
						have been prepared for the presentation.
					</p>
					<p>
						The welfare section describes the school’s approach for this
						presentation. It is not an approved child-protection policy or a
						live reporting route. Concerns about an actual student should be
						raised through their school’s published procedures.
					</p>
					<h3 id="forms">Forms</h3>
					<p>
						The forms in this preview hold details temporarily in the browser
						and create local summaries. They do not send applications or
						messages, reserve places or book appointments.
					</p>
					<h3 id="downloads">Downloads</h3>
					<p>
						Downloaded summaries are saved to the visitor’s device. Refreshing
						the page clears the temporary form details.
					</p>
					<p>
						The term calendar contains presentation dates rather than an
						approved school calendar.
					</p>
					<h3 id="newsletter">Newsletter</h3>
					<p>
						The newsletter interaction does not create a subscription or send
						emails.
					</p>
					<h3 id="images">Images</h3>
					<p>Campus and school-life images are AI-generated illustrations.</p>
					<h3 id="hosting">Hosting</h3>
					<p>
						The hosting provider may process technical request information under
						its own policies.
					</p>
					<h3 id="accessibility">Accessibility</h3>
					<p>
						The website includes labelled forms, keyboard navigation, visible
						focus and reduced-motion support.
					</p>
				</section>
				<Link className="text-link" href="/">
					Return to Home
				</Link>
			</div>
		</main>
	);
}
