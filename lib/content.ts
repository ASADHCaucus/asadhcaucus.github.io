import { readdir, readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { z } from "zod";

const postDirectory = path.join(process.cwd(), "content", "posts");

const postSchema = z.object({
    title: z.string(),
    date: z.union([z.string(), z.date()]).pipe(z.coerce.date()),
    author: z.string().optional(),
    content: z.string(),
    draft: z.boolean().optional(),
    desc: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    bio: z.string().optional()
});

function compareDates(a: { date: Date }, b: { date: Date }) {
    return b.date.getTime() - a.date.getTime();
}

export async function getPosts() {
    const files = await readdir(postDirectory);

    const posts = await Promise.all(
        files.filter((file) => file.endsWith(".md")).map(
            async (file) => {
                const source = await readFile(path.join(postDirectory, file), "utf-8");
                const { data, content } = matter(source);
                const result = postSchema.safeParse({ ...data, content });

                if (!result.success) {
                    throw new Error("Invalid post: " + JSON.stringify(result.error));
                }

                return {
                    ...result.data,
                    slug: file.slice(0, -3),
                    content,
                };
            })
    );
    return posts
        .filter((post) => !post.draft)
        .sort(compareDates)
        ;
}

export async function getPost(slug: string) {
    const posts = await getPosts();
    return posts.find((post) => post.slug === slug);
}