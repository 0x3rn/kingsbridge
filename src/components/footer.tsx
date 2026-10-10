import Link from "next/link";
import { Brand, Icon } from "./ui";
import { Newsletter } from "./interactive";

export function Footer() {
	return (
		<footer className="site-footer">
			<div className="container">
				<Newsletter />
				<div className="footer-grid">
					<div className="footer-brand">
						<Brand light />
						<p>
							An education that opens minds.
							<br />A community that opens doors.
						</p>
						<span className="footer-motto">
							Curiosity · Character · Possibility
						</span>
					</div>
					<div>
						<h3>Discover</h3>
						<Link href="/about">Our college</Link>
						<Link href="/academics">Learning at Kingsbridge</Link>
						<Link href="/school-life">School life</Link>
						<Link href="/news">News & stories</Link>
					</div>
					<div>
						<h3>Your next step</h3>
						<Link href="/admissions">Admissions</Link>
						<Link href="/apply">Begin an application</Link>
						<Link href="/visit">Plan a visit</Link>
						<Link href="/prospectus">Our prospectus</Link>
					</div>
					<div>
						<h3>Stay connected</h3>
						<Link href="/parents">For our families</Link>
						<Link href="/contact">Contact the college</Link>
						<Link href="/policies">Privacy & safeguarding</Link>
						<p className="footer-location">
							<Icon name="location" />A school imagined in Lagos, Nigeria
						</p>
					</div>
				</div>
				<div className="footer-bottom">
					<span>© 2026 Kingsbridge College</span>
					<span>Fictional school · An original portfolio project</span>
					<a href="#top">
						Back to top <Icon name="diagonal" />
					</a>
				</div>
			</div>
		</footer>
	);
}
