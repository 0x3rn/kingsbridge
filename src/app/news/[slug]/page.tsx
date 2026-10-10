import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShareButton } from "@/components/interactive";
import {
	Eyebrow,
	NewsCard,
	Photo,
	SectionHeading,
	TextLink,
	VisitCTA,
} from "@/components/ui";
import { news } from "@/lib/content";
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
	return { title: article.title, description: article.excerpt };
}
export default async function Article({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const article = getArticle((await params).slug);
	return (
		<main id="main">
			<article>
				<header className="article-header container">
					<div className="breadcrumb">
						<Link href="/">Home</Link>
						<span>/</span>
						<Link href="/news">Journal</Link>
					</div>
					<Eyebrow>{article.category}</Eyebrow>
					<h1>{article.title}</h1>
					<div className="article-meta">
						<span>{article.date}</span>
						<span>{article.reading}</span>
						<span>From the Kingsbridge journal</span>
					</div>
				</header>
				<div className="container">
					<Photo
						name={article.image}
						alt={article.alt}
						className="article-photo"
						eager
						sizes="90vw"
					/>
				</div>
				<div className="article-body">
					<p className="article-intro">{article.intro}</p>
					{article.sections.map((section) => (
						<section key={section.title}>
							<h2>{section.title}</h2>
							<p>{section.text}</p>
						</section>
					))}
					<div className="article-end">
						<p className="small-copy">
							An original editorial story written for the fictional Kingsbridge
							College portfolio.
						</p>
						<ShareButton title={article.title} />
					</div>
					<TextLink href="/news">Back to the journal</TextLink>
				</div>
			</article>
			<section className="section soft-section">
				<div className="container">
					<SectionHeading
						eyebrow="Keep exploring"
						title={
							<>
								Another side of
								<br />
								<em>school life.</em>
							</>
						}
					/>
					<div className="news-grid">
						{news
							.filter((item) => item.slug !== article.slug)
							.slice(0, 3)
							.map((item) => (
								<NewsCard key={item.slug} article={item} />
							))}
					</div>
				</div>
			</section>
			<VisitCTA />
		</main>
	);
}
