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
							Kingsbridge College is a co-educational day secondary school in
							Lagos, offering Junior and Senior Secondary education.
						</p>
						<p className="footer-location">
							<Icon name="location" />
							Lagos, Nigeria
						</p>
					</div>
					{[
						{
							title: "Our School",
							links: [
								["About Us", "/about"],
								["Academics", "/academics"],
								["School Life", "/school-life"],
								["School News", "/news"],
							],
						},
						{
							title: "Admissions",
							links: [
								["Admission Requirements", "/admissions#requirements"],
								["Admission Enquiry", "/apply"],
								["School Visits", "/visit"],
								["Prospectus", "/prospectus"],
							],
						},
						{
							title: "Parents and Contact",
							links: [
								["Parents’ Information", "/parents"],
								["Term Dates", "/parents#calendar"],
								["Contact Us", "/contact"],
								["Student Welfare", "/policies"],
								["Website Information", "/policies#project"],
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
					<span>Portfolio preview</span>
					<a href="#top">
						Back to top <Icon name="diagonal" />
					</a>
				</div>
			</div>
		</footer>
	);
}
