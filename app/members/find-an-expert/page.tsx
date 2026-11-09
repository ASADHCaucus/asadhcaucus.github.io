import { readFile } from "node:fs/promises";
import path from "node:path";
import { parse } from "csv-parse/sync";
import { z } from "zod";

const expertSchema = z.object({
    name: z.string().trim().min(1),
    institution: z.string().trim().min(1),
    title: z.string().trim().min(1),
    expertise: z.string().trim().min(1),
});

type Expert = z.infer<typeof expertSchema>;

export default async function FindAnExpert() {
    const source = await readFile(
        path.join(process.cwd(), "app", "members", "find-an-expert", "experts.csv"),
        "utf-8"
    );
    const records: unknown = parse(source, {
        columns: (headers: string[]) => {
            if (headers.join(",") !== "name,institution,title,expertise") {
                throw new Error("Invalid experts.csv");
            }
            return headers;
        },
        skip_empty_lines: true,
        trim: true,
        bom: true,
    });
    const result = z.array(expertSchema).safeParse(records);
    if (!result.success) {
        throw new Error(`Invalid experts.csv: ${result.error.message}`);
    }
    const experts = result.data;

    return (
        <main className="w-full flex-1 space-y-12 pb-20 sm:space-y-16">
            <section className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-10 sm:pt-16 lg:px-20 lg:pt-20">
                <h1 className="text-4xl font-bold tracking-tight sm:text-4xl mb-8">Find an Expert</h1>
                <p className="text-lg text-muted-foreground">
                    Use this directory to find experts affiliated with the ASA Digital Humanities Caucus.
                </p>
                {experts.length > 0 ? (
                    <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {experts.map((expert, index) => (
                            <article key={index} className="">
                                <img className="py-6" src="https://placehold.co/400" alt="" />
                                <h2 className="mb-2 text-xl font-semibold">{expert.name}</h2>
                                <p>{expert.title}</p>
                                <p className="text-muted-foreground">{expert.institution}</p>
                                <p className="mt-4"><span className="font-semibold">Expertise:</span> {expert.expertise}</p>
                            </article>
                        ))}
                    </div>
                ) : (
                    <p className="mt-8 text-muted-foreground">No experts are listed yet.</p>
                )}
            </section>
        </main>
    );
}