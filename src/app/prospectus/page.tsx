import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/interactive";
import { Crest, Photo } from "@/components/ui";
export const metadata: Metadata = {
	alternates: { canonical: "/prospectus" },
	title: "School Prospectus",
	description:
		"Kingsbridge College prospectus: Junior and Senior Secondary education, school life and admissions.",
};
export default function Prospectus() {
	return (
		<main id="main" className="prospectus">
			<div className="prospectus-toolbar container">
				<span>School Prospectus · Version 3 · 10 October 2026</span>
				<PrintButton />
			</div>
			<header className="prospectus-cover container">
				<div>
					<Crest />
					<p className="eyebrow">School Prospectus</p>
					<h1>Kingsbridge College</h1>
					<p>Junior and Senior Secondary Education</p>
					<p>Lagos, Nigeria</p>
					<p className="small-copy">Version 3 · 10 October 2026</p>
				</div>
				<figure>
					<Photo
						name="campus"
						alt="Students walking through the school grounds."
						eager
					/>
					<figcaption>Our school grounds</figcaption>
				</figure>
			</header>
			<div className="prospectus-body">
				<nav className="guide-contents" aria-label="Prospectus contents">
					<h2>Contents</h2>
					<ol>
						{[
							["Welcome to Kingsbridge", "welcome"],
							["Our Academic Programme", "curriculum"],
							["Life at Kingsbridge", "school-day"],
							["Admissions", "admissions"],
							["Information for Parents", "parents"],
							["Contact Details", "contact"],
						].map(([label, id]) => (
							<li key={id}>
								<Link href={`#${id}`}>{label}</Link>
							</li>
						))}
					</ol>
				</nav>
				<section id="welcome">
					<h2>Welcome to Kingsbridge</h2>
					<p>
						Kingsbridge College is a co-educational day secondary school in
						Lagos. We provide Junior and Senior Secondary education with an
						emphasis on academic progress, character and personal development.
					</p>
					<p>
						Our students receive clear teaching, regular assessment and guidance
						throughout their secondary education. We work with parents to
						support learning and address concerns early.
					</p>
				</section>
				<section id="curriculum">
					<h2>Our Academic Programme</h2>
					<p>
						Our Junior Secondary programme develops broad knowledge and good
						study habits. Our Senior Secondary programme provides focused
						subject study, examination preparation and guidance on further
						education.
					</p>
					<p>
						Students take part in classroom discussions, practical work,
						assignments and assessments that help them apply and strengthen
						their understanding.
					</p>
				</section>
				<section id="school-day">
					<h2>Life at Kingsbridge</h2>
					<p>
						Sports, creative activities, clubs and societies form part of school
						life at Kingsbridge. These activities encourage participation,
						confidence, teamwork and responsibility.
					</p>
					<p>
						Class teachers provide guidance on everyday school routines and work
						with parents and subject teachers where support is needed.
					</p>
				</section>
				<section id="admissions">
					<h2>Admissions</h2>
					<p>
						We welcome enquiries about admission into JSS1, SS1 and other
						eligible classes.
					</p>
					<p>
						Admission considers previous learning, school records and the
						assessment appropriate to the proposed class.
					</p>
					<p>
						For details of requirements, fees and admission arrangements, please
						contact the admissions office.
					</p>
				</section>
				<section id="parents">
					<h2>Information for Parents</h2>
					<p>
						Parents can find term dates, school hours, uniform requirements and
						everyday guidance on the school website.
					</p>
					<p>
						Regular communication between parents and teachers supports each
						student’s progress.
					</p>
					<Link className="text-link no-print" href="/parents">
						Parents’ Information
					</Link>
				</section>
				<section id="contact">
					<h2>Contact Details</h2>
					<p>Lagos, Nigeria</p>
					<p>
						<a href="https://kingsbridgecollege.corstack.dev">
							kingsbridgecollege.corstack.dev
						</a>
					</p>
					<Link className="text-link no-print" href="/contact">
						Contact Us
					</Link>
					<p className="prospectus-disclosure">
						Portfolio preview: Kingsbridge College is a fictional school. Forms
						and subscriptions are for demonstration only and do not send
						information or confirm bookings.
					</p>
				</section>
			</div>
		</main>
	);
}
