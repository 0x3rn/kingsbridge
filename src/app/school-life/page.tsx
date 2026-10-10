import type { Metadata } from "next";
import { CampusTour } from "@/components/interactive";
import { TextLink } from "@/components/ui";
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
	title: "School Life",
	description:
		"Sports, creative activities, clubs and societies, student support and school routines at Kingsbridge.",
};
export default function SchoolLife() {
	return (
		<main id="main">
			<PageOpening
				title="Life at Kingsbridge"
				label="School Life"
				image="sports"
				intro="Our students learn, build friendships and develop their interests through classroom activities, sports, clubs and societies."
			/>
			<JumpLinks
				links={[
					{ label: "Sports", href: "#activities" },
					{ label: "Creative Activities", href: "#creative" },
					{ label: "Clubs and Societies", href: "#clubs" },
					{ label: "Student Support", href: "#wellbeing" },
					{ label: "School Day", href: "#day" },
					{ label: "Houses", href: "#houses" },
				]}
			/>
			<Section
				id="activities"
				title="Sports and Physical Development"
				intro="Basketball, football and athletics give students opportunities to stay active, develop skills and work as part of a team. We encourage participation and good sportsmanship alongside competitive performance."
			>
				<TextLink href="/news/more-than-the-final-score">
					School Sport at Kingsbridge
				</TextLink>
			</Section>
			<Section
				id="creative"
				title="Arts, Music and Public Speaking"
				intro="Creative activities give students opportunities to express ideas, develop confidence and share their work. Music, art, drama and public speaking contribute to a balanced school experience."
				soft
			>
				<TextLink href="/news/finding-your-voice">
					Debate and Public Speaking
				</TextLink>
			</Section>
			<Section
				id="clubs"
				title="Clubs and Societies"
				intro="Our clubs and societies allow students to explore interests beyond their regular subjects. Activities include science, coding, robotics, debate, reading, enterprise and environmental projects."
			>
				<TextLink href="/news/small-questions-big-discoveries">
					Practical Science
				</TextLink>
			</Section>
			<Section id="wellbeing" title="Student Guidance and Wellbeing" soft>
				<div className="prose reading-width">
					<p>
						Students are encouraged to speak with their class teacher or another
						trusted member of staff when they need help. We work with parents to
						address concerns about learning, behaviour, friendships and
						wellbeing.
					</p>
					<p>
						We expect respectful conduct and take concerns about bullying or
						inappropriate behaviour seriously.
					</p>
				</div>
				<TextLink href="/policies#safeguarding">
					Student Welfare Information
				</TextLink>
			</Section>
			<Section id="day" title="Our School Day">
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
				id="houses"
				title="Our House System"
				intro="The house system brings students from different classes together through sports, competitions and school activities. It encourages teamwork, participation and a sense of belonging."
				soft
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
			<Section
				id="gallery"
				title="Our Learning Environment"
				intro="Explore the classrooms, practical learning spaces and shared facilities that support school life at Kingsbridge."
			>
				<CampusTour />
			</Section>
			<NextAction context="life" />
		</main>
	);
}
