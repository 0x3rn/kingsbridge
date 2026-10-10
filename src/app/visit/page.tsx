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
	title: "School Visits",
	description:
		"Visit Kingsbridge College to see our learning environment and discuss your child’s education.",
};
export default function Visit() {
	return (
		<main id="main" className="decision-page">
			<PageOpening
				compact
				title="Visit Kingsbridge College"
				label="School Visits"
				intro="A school visit gives you the opportunity to see our learning environment, understand our routines and ask questions about your child’s education."
			>
				<div className="button-row">
					<ButtonLink href="#planner">Request a Visit</ButtonLink>
					<ButtonLink href="#gallery" variant="outline">
						View Campus Gallery
					</ButtonLink>
				</div>
			</PageOpening>
			<JumpLinks
				links={[
					{ label: "School Visits", href: "#formats" },
					{ label: "Request a Visit", href: "#planner" },
					{ label: "Our Campus", href: "#gallery" },
				]}
			/>
			<Section id="formats" title="Arrange a School Visit">
				<Cards
					items={[
						{
							title: "Personal school visit",
							text: "See our learning spaces and speak with the admissions team about your child’s proposed class and interests.",
						},
						{
							title: "Open day",
							text: "Meet members of the school community and learn more about our academic programmes and school activities.",
						},
						{
							title: "Online admissions discussion",
							text: "If you are unable to visit in person, request an online discussion about admission and school information.",
						},
					]}
				/>
			</Section>
			<Section
				id="planner"
				title="Request a School Visit"
				intro="Provide your contact details, your child’s proposed class and the type of visit you are interested in."
				soft
			>
				<div className="planner-form">
					<EnquiryForm mode="visit" />
				</div>
			</Section>
			<Section
				id="gallery"
				title="Our Campus"
				intro="View our learning spaces and shared facilities."
			>
				<CampusTour />
			</Section>
		</main>
	);
}
