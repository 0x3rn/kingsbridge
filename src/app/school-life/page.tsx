import type { Metadata } from "next";
import Link from "next/link";
import { CampusTour } from "@/components/interactive";
import {
	Cards,
	JumpLinks,
	NextAction,
	PageOpening,
	Section,
} from "@/components/page-sections";
import { dailySchedule } from "@/lib/content";
export const metadata: Metadata = {
	alternates: { canonical: "/school-life" },
	title: "School life",
	description:
		"Activities, personal support, an example school day and an illustrative campus gallery.",
};
export default function SchoolLife() {
	return (
		<main id="main">
			<PageOpening
				title="A school day with room for more"
				label="School life"
				image="sports"
				intro="Explore the activities, routines and personal support in the Kingsbridge school concept, from sport and creative work to tutor time and clubs."
			/>
			<JumpLinks
				links={[
					{ label: "Activities", href: "#activities" },
					{ label: "Student support", href: "#wellbeing" },
					{ label: "School day", href: "#day" },
					{ label: "Campus gallery", href: "#gallery" },
					{ label: "Houses", href: "#houses" },
				]}
			/>
			<Section id="activities" title="Find an activity worth trying">
				<Cards
					items={[
						{
							title: "Sport",
							text: "Basketball, football and athletics provide opportunities to practise skills, take part in teams and enjoy movement. The model includes participation for beginners as well as competitive activity.",
						},
						{
							title: "Arts and performance",
							text: "Music, visual art, drama and public speaking give students opportunities to make, rehearse and share their work.",
						},
						{
							title: "Clubs and projects",
							text: "Science, coding, robotics, debate, reading, enterprise and environmental projects offer different ways to explore interests and contribute.",
						},
					]}
				/>
			</Section>
			<Section id="wellbeing" title="Know who to ask for help" soft>
				<p className="reading-width">
					Regular tutor contact gives students a familiar adult to approach
					about routines, schoolwork and wellbeing. The model emphasises
					listening to concerns, responding to bullying and working with
					families when support is needed.
				</p>
				<p className="demo-note">
					This website is not a live reporting service.
				</p>
				<Link className="text-link" href="/policies#safeguarding">
					Read the safeguarding principles
				</Link>
			</Section>
			<Section
				id="day"
				title="An example school day"
				intro="Illustrative timings for the portfolio concept."
			>
				<ol className="day-timeline">
					{dailySchedule.map((item) => (
						<li key={item.time}>
							<span className="schedule-time">{item.time}</span>
							<div>
								<h3>{item.title}</h3>
								<p>{item.text}</p>
							</div>
						</li>
					))}
				</ol>
			</Section>
			<Section
				id="gallery"
				title="Explore the campus concept"
				intro="AI-generated images illustrating a fictional school. These are not photographs of an operating campus."
				soft
			>
				<CampusTour />
			</Section>
			<Section
				id="houses"
				title="A smaller community within the school"
				intro="House activities bring students from different year groups together for teamwork, contribution and friendly competition."
			>
				<Cards
					columns={4}
					items={[
						{ title: "Oak", text: "Courage" },
						{ title: "Cedar", text: "Purpose" },
						{ title: "Willow", text: "Kindness" },
						{ title: "Elm", text: "Teamwork" },
					]}
				/>
			</Section>
			<NextAction context="life" />
		</main>
	);
}
