import ReactMarkdown from "react-markdown";
import { getPost, getPosts } from "@/lib/content";

export async function generateStaticParams() {
    const posts = await getPosts();
    return posts.map(({ slug }) => ({ slug }));
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return (
            <main className="w-full flex-1 pb-20">
                <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                    <p>Post not found.</p>
                </div>
            </main>
        );
    }

    return (
        <>
            <main className="w-full flex-1 pb-20">
                <article className="prose mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                    <h1>{post.title}</h1>
                    <p>{post.date.toDateString()} · {post.author}</p>
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </article>
                {(post.author || post.bio) && (
                    <section
                        aria-label="About the author"
                        className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                    >
                        <div className="rounded-2xl border border-border bg-muted/40 p-6 sm:p-8">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                About the author
                            </p>
                            {post.author && (
                                <h2 className="text-xl font-semibold tracking-tight">
                                    {post.author}
                                </h2>
                            )}
                            {post.bio && (
                                <p className="mt-3 text-base leading-7 text-muted-foreground">
                                    {post.bio}
                                </p>
                            )}
                        </div>
                    </section>
                )}
            </main>

        </>
    );
}