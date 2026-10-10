import Link from "next/link";
import { Brand, Icon } from "./ui";
import { Newsletter } from "./interactive";
export function Footer() {
	return (
		<footer className="site-footer">
			<div className="container">
				<div className="footer-grid">
					<div className="footer-brand">
						<Brand light />
						<p>
							A fictional co-educational day school concept for junior and
							senior secondary education in Lagos, Nigeria.
						</p>
						<p className="footer-location">
							<Icon name="location" />
							Imagined in Lagos, Nigeria
						</p>
					</div>
					{[
						{
							title: "Explore the school",
							links: [
								["About Kingsbridge", "/about"],
								["Academics", "/academics"],
								["School life", "/school-life"],
								["News", "/news"],
							],
						},
						{
							title: "Admissions and visits",
							links: [
								["Admissions information", "/admissions"],
								["Admissions form demo", "/apply"],
								["Visit planner", "/visit#planner"],
								["School guide", "/prospectus"],
							],
						},
						{
							title: "Parent information",
							links: [
								["Term dates and essentials", "/parents"],
								["Enquiry demo", "/contact"],
								["Privacy and demo information", "/policies"],
							],
						},
					].map((group) => (
						<div key={group.title}>
							<h3>{group.title}</h3>
							{group.links.map(([label, href]) => (
								<Link key={href} href={href}>
									{label}
								</Link>
							))}
						</div>
					))}
				</div>
				<Newsletter />
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
