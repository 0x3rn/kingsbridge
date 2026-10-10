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
		default: "Kingsbridge College | Junior and Senior Secondary School, Lagos",
		template: "%s | Kingsbridge College",
	},
	description:
		"Kingsbridge College is a co-educational day secondary school in Lagos, offering Junior and Senior Secondary education.",
	openGraph: {
		title: "Kingsbridge College",
		description:
			"Co-educational day secondary education in Lagos, from JSS1 to SS3.",
		type: "website",
		images: [
			{
				url: new URL("/images/campus.webp", siteURL).href,
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
