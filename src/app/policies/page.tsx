import type { Metadata } from "next";
import Link from "next/link";
import { JumpLinks, PageOpening } from "@/components/page-sections";
export const metadata: Metadata = {
	title: "Privacy and demo information",
	description:
		"What is fictional, how browser-only demo forms work, hosting practices and safeguarding principles.",
};
export default function Policies() {
	return (
		<main id="main" className="reference-page">
			<PageOpening
				compact
				title="About this demo, privacy and safeguarding"
				label="Privacy and demo information"
				intro="Understand what is fictional, how the demo forms work and why this website is not a live school contact or reporting service."
			/>
			<JumpLinks
				links={[
					{ label: "Project", href: "#project" },
					{ label: "Forms and downloads", href: "#forms" },
					{ label: "Newsletter", href: "#newsletter" },
					{ label: "Hosting", href: "#hosting" },
					{ label: "Safeguarding", href: "#safeguarding" },
					{ label: "Accessibility", href: "#accessibility" },
				]}
			/>
			<div className="container policy-content prose reading-width">
				<section id="project">
					<h2>About the project</h2>
					<p>
						Kingsbridge College is an original school website concept, not an
						operating institution. Curriculum, admissions, routines, stories and
						dates are illustrative. Campus and school-life images are
						AI-generated; they do not depict actual Kingsbridge students or
						teachers.
					</p>
				</section>
				<section id="forms">
					<h2>Demo forms and downloads</h2>
					<p>
						Form details are held temporarily in browser memory. Refreshing
						clears them. Completing a demo creates a local summary rather than
						sending an application, booking or message.
					</p>
					<p>
						If a summary is downloaded, the file remains on the visitor’s
						device.
					</p>
					<p>
						Use invented information and do not enter private student records.
					</p>
				</section>
				<section id="newsletter">
					<h2>Newsletter</h2>
					<p>
						The subscription interaction is a demo. It does not save an email
						address, create a mailing-list subscription or send messages.
					</p>
				</section>
				<section id="hosting">
					<h2>Hosting</h2>
					<p>
						Hosting providers may process technical requests under their own
						policies. Browser-only forms describe the website’s features; they
						do not imply that no technical data is processed by hosting
						infrastructure.
					</p>
				</section>
				<section id="safeguarding">
					<h2>Safeguarding principles</h2>
					<p>
						The school concept emphasises listening to concerns, respectful
						relationships, clear supervision routines and appropriate sharing of
						information.
					</p>
					<p>
						This summary is not an operational safeguarding policy. It has no
						designated staff or live reporting channel. Concerns about an actual
						student must use the actual school’s published reporting routes.
					</p>
				</section>
				<section id="accessibility">
					<h2>Accessibility</h2>
					<p>
						The website includes labelled forms, keyboard navigation, visible
						focus, meaningful image descriptions and reduced-motion support.
						These features do not establish formal accessibility compliance.
					</p>
				</section>
				<Link className="text-link" href="/">
					Return to homepage
				</Link>
			</div>
		</main>
	);
}
