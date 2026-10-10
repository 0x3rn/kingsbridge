import type { Metadata } from "next";
import { Journal } from "@/components/interactive";
import { PageHero, VisitCTA } from "@/components/ui";
export const metadata: Metadata = {
	title: "The Kingsbridge journal",
	description:
		"Ideas, learning projects and stories from life at Kingsbridge College.",
};
export default function News() {
	return (
		<main id="main">
			<PageHero
				eyebrow="The Kingsbridge journal"
				title={
					<>
						Every day,
						<br />a new <em>story.</em>
					</>
				}
				description="The questions that become projects. The interests that become passions. The moments that make a school feel like a community."
			/>
			<section className="section">
				<div className="container">
					<Journal />
				</div>
			</section>
			<VisitCTA />
		</main>
	);
}
