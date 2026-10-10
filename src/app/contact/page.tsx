import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageOpening } from "@/components/page-sections";
export const metadata: Metadata = {
	alternates: { canonical: "/contact" },
	title: "Contact Us",
	description:
		"Contact Kingsbridge College about admissions, school visits or general school information.",
};
export default function Contact() {
	return (
		<main id="main" className="task-page">
			<PageOpening
				compact
				title="Contact Kingsbridge College"
				label="Contact Us"
				intro="Contact us about admissions, school visits or general school information."
			/>
			<div className="container task-form-with-links">
				<div>
					<h2 className="minor-heading">Send an Enquiry</h2>
					<p className="section-intro">
						Choose a topic and let us know how we can help.
					</p>
					<EnquiryForm mode="contact" />
				</div>
				<aside className="helpful-links">
					<h2>Helpful Links</h2>
					{[
						{
							title: "Admissions",
							text: "Entry requirements and application information.",
							href: "/admissions",
							label: "Admission Requirements",
						},
						{
							title: "School Visits",
							text: "Arrange a visit and learn more about our campus.",
							href: "/visit",
							label: "Arrange a Visit",
						},
						{
							title: "Parents",
							text: "Term dates, school hours and everyday information.",
							href: "/parents",
							label: "Parents’ Information",
						},
					].map((item) => (
						<article key={item.href}>
							<h3>{item.title}</h3>
							<p>{item.text}</p>
							<Link className="text-link" href={item.href}>
								{item.label}
							</Link>
						</article>
					))}
				</aside>
			</div>
		</main>
	);
}
