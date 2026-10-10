import { SiteSearchButton } from "@/components/header";
import { ButtonLink } from "@/components/ui";
export default function NotFound() {
	return (
		<main id="main" className="not-found container">
			<p className="eyebrow">404</p>
			<h1>We couldn’t find that page</h1>
			<p>
				The link may be out of date. Return to the homepage or search the site.
			</p>
			<div className="button-row">
				<ButtonLink href="/">Go to homepage</ButtonLink>
				<SiteSearchButton />
			</div>
		</main>
	);
}
