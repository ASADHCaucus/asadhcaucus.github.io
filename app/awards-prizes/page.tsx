import { Button } from "@base-ui/react";
import Link from "next/link";

type awardee = {
    name: string;
    Institution: string;
    title: string;
    award: string;
    year: number;
}

const awards = [
    "Ángel David Nieves Book Award for an Edited Collection",
    "Ángel David Nieves Book Award for a Monograph",
    "Susan Garfinkel Digital Project Prize (Legacy)",
    "Susan Garfinkel Digital Project Prize (Newcomer)"
];


const currentYearAwardees = [
    {
        name: "Jacquelyne Thoni Howard and The Feminist Pedagogy Project",
        Institution: "Tulane University",
        title: "Feminist Pedagogy for Teaching Online",
        award: "Ángel David Nieves Book Award for an Edited Collection",
        year: 2026
    },
    {
        name: "Amy E. Earhart",
        Institution: "Texas A&M University",
        title: "Digital Literary Redlining: African American Anthologies, Digital Humanities, and the Canon",
        award: "Ángel David Nieves Book Award for a Monograph",
        year: 2026
    },
    {
        name: "Linford D. Fisher",
        Institution: "Brown University",
        title: "Stolen Relations: Recovering Stories ofIndigenous Enslavement in the Americas",
        award: "Susan Garfinkel Digital Project Prize (Legacy)",
        year: 2026
    }
]

export default function AwardsPrizes() {
    return (
        <main className="w-full flex-1 space-y-12 pb-20 sm:space-y-16">
            {/* Introduction Section */}
            <section className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-10 sm:pt-16 lg:px-20 lg:pt-20">
                <h1 className="text-4xl font-bold tracking-tight sm:text-4xl mb-8">Awards & Prizes</h1>
                <p className="text-lg text-muted-foreground">
                    Presented annually at the ASA conference, the Digital Humanities Caucus’s awards celebrate excellence and innovation in scholarship and practice. Submissions for 2027 DH awards will be announced soon.
                </p>
            </section>
            {/* 2026 Awardees */}
            <section aria-labelledby="2026-awardees-heading" className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-20">

                <h2 id="2026-awardees-heading" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">2026 Awardees</h2>
                <p className="text-lg text-muted-foreground pb-6">
                    Congratulations to the recipients of the 2026 Digital Humanities Caucus awards. Their outstanding contributions to the field have been recognized for excellence and innovation in scholarship and practice.
                </p>

                {awards.map((award) => (
                    <div key={award}>
                        <p className="font-bold">{award}</p>
                        {currentYearAwardees.filter((awardee) => awardee.award === award).map((awardee) => (
                            <p key={awardee.name} className="ml-4">{awardee.name} - {awardee.Institution}</p>
                        ))}

                    </div>
                ))}

                <Link href="https://theasa.net/wp-content/uploads/2026/10/26prizes.pdf" target="_blank">
                    <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5">
                        View All 2026 Awardees
                    </Button>
                </Link>
            </section>

            {/*  Ángel David Nieves Book Awards */}
            <section aria-labelledby="book-awards-heading" className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-20">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    <div className="space-y-6 text-lg leading-8 text-muted-foreground">
                        <h2 id="book-awards-heading" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Ángel David Nieves Book Awards</h2>
                        <p>
                            The ASA DH Caucus Ángel David Nieves Book Award memorializes the profound scholarly, social justice, and personal impacts of Dr. Nieves on his colleagues and the field of digital humanities. The Ángel David Nieves Book Award recognizes exceptional work that grapples with urgent questions that are specifically situated in practices of studying at the intersection of American Studies, Digital Humanities, and Digital Studies. For the book awards, we seek submissions that:
                        </p>
                        <ol className="list-decimal space-y-3 pl-6">
                            <li>Promote the development of interdisciplinary research on American culture and history in a global context</li>
                            <li>Grapple with the most urgent questions and issues in studying at the intersection of American Studies and Digital Humanities</li>
                            <li>Feature anti-racist, anti-/de-/postcolonial, feminist, collaborative, and/or activist modes and methods</li>
                        </ol>
                        <p className="p-5 text-2xl leading-7 text-slate-700 dark:bg-blue-950/40 dark:text-slate-200">
                            Book projects published via open access, and through small, independent, or not-for-profit presses are especially encouraged. If submissions are not open access, a digital copy must be submitted to be considered for the award.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <div className="rounded-2xl  bg-muted/40 p-6 sm:p-8">
                            <h3 className="mb-4 text-xl font-semibold tracking-tight">Monograph Award</h3>
                            <p className="text-lg leading-8 text-muted-foreground">
                                For the monograph award, we seek single-author or collaborative endeavours offering extended discussion on theory and/or praxis at the intersection of American Studies and Digital Humanities. If submissions are not open access, digital copies of the monograph must be submitted with the nomination for review.
                            </p>
                        </div>
                        <div className="rounded-2xl  bg-muted/40 p-6 sm:p-8">
                            <h3 className="mb-4 text-xl font-semibold tracking-tight">
                                Edited Collection Award
                            </h3>
                            <p className="text-lg leading-8 text-muted-foreground">
                                For the edited collection award, we seek submissions that recognise the epistemological value of the collection; provide field-defining or field-transforming terminology, methodology, and/or praxis; invite multiple perspectives on a theme; and engage in ethical collaborative labor processes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Susan Garfinkel Prize */}
            <section aria-labelledby="book-awards-heading" className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-20">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    <div className="space-y-6 text-lg leading-8 text-muted-foreground">
                        <h2 id="book-awards-heading" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Susan Garfinkel Digital Project Prizes</h2>
                        <p>
                            The ASA DH Caucus Digital Project Prize was created in recognition of the contributions of Susan Garfinkel, one of the founders and long-standing member of the ASA DH Caucus.  The Digital Project Prize recognizes exceptional digital projects that grapple with urgent questions that are specifically situated in practices of scholarship at the intersection of American Studies and Digital Humanities. This award also recognizes the many kinds of labor–often invisible, gendered, and racialized–that make digital projects possible.
                        </p>
                        <p>
                            For the Digital Project Prize, we especially seek submissions that:
                        </p>

                        <ol className="list-decimal space-y-3 pl-6">
                            <li>model ethical and equitable collaborations that responsibly reflect on the politics of collaborative research in the digital humanities;</li>
                            <li>participate in transparent and open scholarly practices;</li>
                            <li>center research topics that &quot;promote the development of interdisciplinary research on U.S. culture and history in a global context&quot; (following ASA&apos;s stated purpose);</li>
                            <li>address these topics through anti-racist, feminist, community-led, and/or activist modes and methods.</li>
                        </ol>


                    </div>
                    <div className="space-y-6">
                        <div className="rounded-2xl  bg-muted/40 p-6 sm:p-8">
                            <h3 className="mb-4 text-xl font-semibold tracking-tight">
                                Newcomer Project Award
                            </h3>
                            <p className="text-lg leading-8 text-muted-foreground">
                                For the monograph award, we seek single-author or collaborative endeavours offering extended discussion on theory and/or praxis at the intersection of American Studies and Digital Humanities. If submissions are not open access, digital copies of the monograph must be submitted with the nomination for review.
                            </p>
                        </div>
                        <div className="rounded-2xl  bg-muted/40 p-6 sm:p-8">
                            <h3 className="mb-4 text-xl font-semibold tracking-tight">
                                Edited Collection Award
                            </h3>
                            <p className="text-lg leading-8 text-muted-foreground">
                                For the edited collection award, we seek submissions that recognise the epistemological value of the collection; provide field-defining or field-transforming terminology, methodology, and/or praxis; invite multiple perspectives on a theme; and engage in ethical collaborative labor processes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}