import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { Eyebrow, Icon, PageHero, TextLink } from "@/components/ui";
export const metadata: Metadata = {
	title: "Begin an application",
	description:
		"Explore the guided Kingsbridge admissions enquiry and create a local demo summary.",
};
export default function Apply() {
	return (
		<main id="main">
			<PageHero
				eyebrow="Begin an application"
				title={
					<>
						A new chapter.
						<br />
						<em>A first step.</em>
					</>
				}
				description="Tell us a little about your family and the student’s next stage. This guided portfolio experience creates a summary for you to review."
			/>
			<section className="section form-section">
				<div className="container form-layout">
					<aside className="form-sidebar">
						<Eyebrow>Before you begin</Eyebrow>
						<h3>
							A little preparation
							<br />
							goes a long way.
						</h3>
						<p>
							You’ll need a parent or guardian name, an email address and the
							proposed year of entry. This demo takes around three minutes.
						</p>
						<ul className="check-list">
							<li>
								<Icon name="check" />
								Clear steps, with time to review
							</li>
							<li>
								<Icon name="check" />
								No documents or payments
							</li>
							<li>
								<Icon name="check" />A downloadable enquiry summary
							</li>
						</ul>
						<div className="demo-note">
							<strong>A portfolio experience</strong>
							<p>
								Kingsbridge is a fictional college. Use invented details. This
								form does not send an application or reserve a place.
							</p>
						</div>
						<TextLink href="/admissions#requirements">
							Read the entry requirements
						</TextLink>
						<TextLink href="/visit">Explore a visit first</TextLink>
					</aside>
					<EnquiryForm />
				</div>
			</section>
		</main>
	);
}
