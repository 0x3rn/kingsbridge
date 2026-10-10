import { ButtonLink, Eyebrow } from "@/components/ui";
export default function NotFound() {
	return (
		<main id="main" className="not-found container">
			<Eyebrow>A little off the beaten path</Eyebrow>
			<span className="error-number">404</span>
			<h1>
				Let’s find your
				<br />
				<em>next chapter.</em>
			</h1>
			<p>
				This page isn’t part of the Kingsbridge story. There’s plenty more to
				discover from here.
			</p>
			<div className="button-row">
				<ButtonLink href="/">Return to the college</ButtonLink>
				<ButtonLink href="/academics" variant="outline">
					Explore learning
				</ButtonLink>
			</div>
		</main>
	);
}
