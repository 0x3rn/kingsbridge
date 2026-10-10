import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageOpening } from "@/components/page-sections";
export const metadata: Metadata = {
	alternates: { canonical: "/contact" },
	title: "Enquiry demo",
	description:
		"Explore a local enquiry summary. No school inbox is contacted and no reply will be issued.",
};
export default function Contact() {
	return (
		<main id="main" className="task-page">
			<PageOpening
				compact
				title="Explore the enquiry form"
				label="Enquiry demo"
				intro="Choose a topic, write an example question and review a local summary. This portfolio website has no live school inbox and will not send your message."
			/>
			<div className="container task-form-with-links">
				<EnquiryForm mode="contact" />
				<aside className="helpful-links">
					<h2>Helpful information</h2>
					{[
						{
							title: "Admissions information",
							text: "Entry requirements, assessments and the illustrative joining process.",
							href: "/admissions",
							label: "View admissions",
						},
						{
							title: "Visit information",
							text: "Campus gallery and demo visit formats.",
							href: "/visit",
							label: "Explore visits",
						},
						{
							title: "Parent information",
							text: "Term dates, uniform, school timings and everyday guidance.",
							href: "/parents",
							label: "View parent information",
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
