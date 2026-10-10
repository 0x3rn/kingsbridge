import type { Metadata } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteURL } from "@/lib/site";
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
	metadataBase: siteURL,
	title: {
		default: "Kingsbridge College | A place to learn. A life to shape.",
		template: "%s | Kingsbridge College",
	},
	description:
		"Discover Kingsbridge College, a fictional secondary school where curiosity, character and possibility come together. Explore learning, school life and admissions.",
	openGraph: {
		title: "Kingsbridge College",
		description: "An education that opens minds. A community that opens doors.",
		type: "website",
		images: [
			{
				url: "/images/campus.webp",
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
