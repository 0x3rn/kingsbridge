import type { Metadata } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const sans = localFont({
	src: "../../public/fonts/Manrope.ttf",
	variable: "--font-sans",
	display: "swap",
	weight: "200 800",
});
const serif = localFont({
	src: "../../public/fonts/DMSerifDisplay-Regular.ttf",
	variable: "--font-serif",
	display: "swap",
	weight: "400",
});
export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL ||
			"https://kingsbridgecollege.corstack.dev",
	),
	title: {
		default: "Kingsbridge College | Junior and senior secondary school concept",
		template: "%s | Kingsbridge College",
	},
	description:
		"Discover Kingsbridge College, a fictional secondary school where curiosity, character and possibility come together. Explore learning, school life and admissions.",
	openGraph: {
		title: "Kingsbridge College",
		description:
			"A fictional co-educational day school concept in Lagos for JSS1–SS3.",
		type: "website",
		images: [
			{
				url: new URL(
					"/images/campus.webp",
					process.env.NEXT_PUBLIC_SITE_URL ||
						"https://kingsbridgecollege.corstack.dev",
				).href,
				width: 1659,
				height: 948,
				alt: "A glimpse of Kingsbridge College",
			},
		],
	},
	icons: { icon: "/icon.svg" },
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			id="top"
			data-scroll-behavior="smooth"
			className={`${sans.variable} ${serif.variable}`}
		>
			<body>
				<a className="skip-link" href="#main">
					Skip to content
				</a>
				<Suspense fallback={<div className="header-placeholder" />}>
					<Header />
				</Suspense>
				{children}
				<Footer />
			</body>
		</html>
	);
}
