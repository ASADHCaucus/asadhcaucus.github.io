import Link from "next/link";
import { getPosts } from "@/lib/content";

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <main className="w-full flex-1 pb-20">
            <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                <p className="font-bold">Blog</p>
                <h1 className="text-3xl font-bold mb-6">Latest News, Events, and Critical Musings on DH, Data, & AI
                </h1>
                <p className="text-lg leading-7 text-muted-foreground pb-10 ">
                    Welcome to our blog, where we share insights and discussions on digital humanities, data, and AI. Writing here aligns to our pillars: Critical Race & Digital Studies, AI Ethics & Algorithmic Justice, Computational Methods, and Digital Archival Practice.
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <div key={post.slug} className="">
                            <img src={post.image ?? "https://placehold.co/400"} alt={post.title} className="w-full object-cover rounded-2xl mb-4" />
                            <Link className="text-2xl" href={`/blog/${post.slug}`}>{post.title}</Link>
                            <p className="text-sm text-muted-foreground">{post.date.toDateString()}</p>
                            {post.tags && post.tags.length > 0 && (
                                <ul className="mt-3 flex flex-wrap gap-2" aria-label="Tags">
                                    {post.tags.map((tag) => (
                                        <li
                                            key={tag}
                                            className="rounded border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800"
                                        >
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <p className="text-sm text-muted-foreground pt-2">By {post.author ?? "Unknown Author"}</p>
                            <p className="my-4 text-muted-foreground">{post.desc ?? post.content.slice(0, 100) + "..."}</p>
                            <Link href={`/blog/${post.slug}`} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                Read More
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
            <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                <h1 className="text-3xl font-bold mb-6">
                    Latest Opportunities
                </h1>

                <p className="text-lg leading-7 text-muted-foreground pb-4">Have an opportunity you would like to share? Please reach out to us to get it featured</p>
                <Link href="" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Share an Opportunity
                </Link>
            </section>
        </main>
    );
}