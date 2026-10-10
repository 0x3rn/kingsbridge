import type { Metadata } from "next";
import { CampusTour } from "@/components/interactive";
import { EnquiryForm } from "@/components/enquiry-form";
import { ButtonLink } from "@/components/ui";
import {
	Cards,
	JumpLinks,
	PageOpening,
	Section,
} from "@/components/page-sections";
export const metadata: Metadata = {
	alternates: { canonical: "/visit" },
	title: "Explore visits",
	description:
		"An illustrative campus gallery and browser-only visit planner. No appointment is booked.",
};
export default function Visit() {
	return (
		<main id="main" className="decision-page">
			<PageOpening
				compact
				title="Explore a visit to Kingsbridge"
				label="Explore visits"
				intro="See the campus concept and the kinds of conversations a school visit could include. The visit planner is a demo; it does not book an appointment."
			>
				<div className="button-row">
					<ButtonLink href="#gallery">View campus gallery</ButtonLink>
					<ButtonLink href="#planner" variant="outline">
						Try the visit planner
					</ButtonLink>
				</div>
			</PageOpening>
			<JumpLinks
				links={[
					{ label: "Campus gallery", href: "#gallery" },
					{ label: "Visit formats", href: "#formats" },
					{ label: "Visit planner", href: "#planner" },
				]}
			/>
			<Section
				id="gallery"
				title="Explore the campus concept"
				intro="Illustrative learning spaces, not photographs of an operating school."
			>
				<CampusTour />
			</Section>
			<Section id="formats" title="Three ways to get to know a school" soft>
				<Cards
					items={[
						{
							title: "Personal campus visit",
							text: "A guided introduction to classrooms, shared spaces and school routines, with time for questions about the student’s needs and interests.",
						},
						{
							title: "Open morning",
							text: "An introduction to several areas of school life and an opportunity to speak with subject teams.",
						},
						{
							title: "Online conversation",
							text: "A first discussion about curriculum, admissions and family priorities when an in-person visit is not practical.",
						},
					]}
				/>
				<p className="demo-note">
					Illustrative visit formats. No events, appointments or booking slots
					are available for this fictional school.
				</p>
			</Section>
			<Section
				id="planner"
				title="Try the visit planner"
				intro="Choose a visit type and entry class, then review an example enquiry summary."
			>
				<div className="planner-form">
					<EnquiryForm mode="visit" />
				</div>
			</Section>
		</main>
	);
}
