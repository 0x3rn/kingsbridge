import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageOpening } from "@/components/page-sections";
export const metadata: Metadata = {
	alternates: { canonical: "/apply" },
	title: "Admission Enquiry",
	description:
		"Tell us about your child and the class you are interested in at Kingsbridge College.",
};
export default function Apply() {
	return (
		<main id="main" className="task-page">
			<PageOpening
				compact
				title="Admission Enquiry"
				label="Admissions"
				intro="Tell us about your child and the class you are interested in."
			/>
			<div className="container task-form">
				<EnquiryForm mode="application" />
			</div>
		</main>
	);
}
