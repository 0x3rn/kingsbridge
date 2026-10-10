import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageOpening } from "@/components/page-sections";
export const metadata: Metadata = {
	alternates: { canonical: "/apply" },
	title: "Admissions form demo",
	description:
		"Try a browser-only three-step admissions form. No application is sent or place reserved.",
};
export default function Apply() {
	return (
		<main id="main" className="task-page">
			<PageOpening
				compact
				title="Try the admissions enquiry form"
				label="Admissions form demo"
				intro="Use invented details to explore a three-step form and review a local summary. Nothing is sent to a school and no place is reserved."
			>
				<p className="preparation-note">
					About three minutes. No documents or payments required.
				</p>
			</PageOpening>
			<div className="container task-form">
				<EnquiryForm mode="application" />
			</div>
		</main>
	);
}
