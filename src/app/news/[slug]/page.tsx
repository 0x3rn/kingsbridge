import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShareButton } from "@/components/interactive";
import { NextAction, Section } from "@/components/page-sections";
import { NewsCard, Photo, TextLink } from "@/components/ui";
import { news } from "@/lib/content";
export const dynamicParams = false;
function getArticle(slug: string) {
	const article = news.find((story) => story.slug === slug);
	if (!article) notFound();
	return article;
}
export function generateStaticParams() {
	return news.map((article) => ({ slug: article.slug }));
}
export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const article = getArticle((await params).slug);
	return {
		title: article.title,
		description: article.excerpt,
		alternates: { canonical: `/news/${article.slug}` },
	};
}
export default async function Article({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const article = getArticle((await params).slug);
	return (
		<main id="main" className="reading-page">
			<article>
				<header className="article-header container">
					<div className="breadcrumb">
						<Link href="/">Home</Link>
						<span>/</span>
						<Link href="/news">School News</Link>
					</div>
					<p className="eyebrow">{article.category}</p>
					<h1>{article.title}</h1>
					<p className="article-excerpt">{article.excerpt}</p>
					<div className="article-meta">
						<span>Published {article.date}</span>
						<span>{article.reading}</span>
					</div>
				</header>
				<figure className="container">
					<Photo
						name={article.image}
						alt={article.alt}
						className="article-photo"
						eager
						sizes="90vw"
					/>
					<figcaption>
						{article.image === "science"
							? "Practical science"
							: article.image === "sports"
								? "Sports and teamwork"
								: article.image === "library"
									? "Learning in the library"
									: "Our school grounds"}
					</figcaption>
				</figure>
				<div className="article-body">
					{article.intro.split("\n\n").map((paragraph, index) => (
						<p
							key={paragraph}
							className={index === 0 ? "article-intro" : undefined}
						>
							{paragraph}
						</p>
					))}
					{article.sections.map((section) => (
						<section key={section.title}>
							<h2>{section.title}</h2>
							<p>{section.text}</p>
						</section>
					))}
					{article.closing && <p>{article.closing}</p>}
					<div className="article-end">
						<ShareButton title={article.title} />
					</div>
					<TextLink href="/news">Back to School News</TextLink>
				</div>
			</article>
			<Section title="More News from Kingsbridge" soft>
				<div className="news-grid">
					{news
						.filter((item) => item.slug !== article.slug)
						.slice(0, 3)
						.map((item) => (
							<NewsCard key={item.slug} article={item} />
						))}
				</div>
			</Section>
			<NextAction context="news" />
		</main>
	);
}
