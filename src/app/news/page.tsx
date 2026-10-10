import type { Metadata } from "next";
import { Journal } from "@/components/interactive";
import { NextAction, PageOpening } from "@/components/page-sections";
export const metadata: Metadata = {
	alternates: { canonical: "/news" },
	title: "News",
	description:
		"Illustrative portfolio stories about classroom learning, activities and student choices.",
};
export default function News() {
	return (
		<main id="main" className="reading-page">
			<PageOpening
				compact
				title="News from Kingsbridge"
				label="News"
				intro="Example stories about classroom learning, activities and student choices, written for this fictional school concept."
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
