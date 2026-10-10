import type { Metadata } from "next";
import { Journal } from "@/components/interactive";
import { NextAction, PageOpening } from "@/components/page-sections";
export const metadata: Metadata = {
	alternates: { canonical: "/news" },
	title: "School News",
	description:
		"Updates on learning, activities and life at Kingsbridge College.",
};
export default function News() {
	return (
		<main id="main" className="reading-page">
			<PageOpening
				compact
				title="School News"
				label="News"
				intro="Updates on learning, activities and life at Kingsbridge College."
			/>
			<section className="section">
				<div className="container">
					<Journal />
				</div>
			</section>
			<NextAction context="news" />
		</main>
	);
}
