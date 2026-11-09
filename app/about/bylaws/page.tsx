import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { readFile } from "node:fs/promises";
import path from "node:path";



export default async function BylawsPage() {
    const bylaws = await readFile(path.join(process.cwd(), "app/about/governance/bylawsMarkdown.md"), "utf-8");
    return (
        <main className="w-full flex-1 pb-20">
            <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                <h1 className="text-4xl font-bold pb-10">
                    Bylaws of the American Studies Association Digital Humanities Caucus
                </h1>
                <p className="mx-auto max-w-4xl pb-5 text-center text-2xl text-pretty">
                    The articles and bylaws of the ASA Digital Humanities Caucus are the organizations governing documents. They establish the structure, roles, and procedures for the caucus and guide its operations and decision-making processes and can be amended as needed to reflect the evolving needs of the caucus by its members.
                </p>
                <article className="prose max-w-none">
                    <ReactMarkdown>
                        {bylaws}
                    </ReactMarkdown>
                </article>
            </div>
        </main>
    );
}