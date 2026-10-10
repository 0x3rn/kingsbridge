import { SiteSearchButton } from "@/components/header";
import { ButtonLink } from "@/components/ui";
export default function NotFound() {
	return (
		<main id="main" className="not-found container">
			<p className="eyebrow">404</p>
			<h1>Page Not Found</h1>
			<p>The page you requested may have moved or is no longer available.</p>
			<div className="button-row">
				<ButtonLink href="/">Return to Home</ButtonLink>
				<SiteSearchButton />
			</div>
		</main>
	);
}
