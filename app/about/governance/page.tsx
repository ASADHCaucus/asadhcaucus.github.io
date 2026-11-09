import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { readFile } from "node:fs/promises";
import path from "node:path";



export default async function GovernancePage() {
    const bylaws = await readFile(path.join(process.cwd(), "app/about/governance/bylawsMarkdown.md"), "utf-8");
    return (
        <main className="w-full flex-1 pb-20">
            <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                <h1 className="text-4xl font-bold pb-10">
                    Governance
                </h1>

            </div>
        </main>
    );
}