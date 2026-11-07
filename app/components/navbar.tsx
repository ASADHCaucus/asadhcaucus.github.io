import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex flex-row gap-1 min-w-full justify-between px-10 py-10">
            <span className="font-bold text-3xl px-2 py-1">ASA Digital Humanities Caucus</span>
            <ul className="flex flex-row gap-1">
                <li className=" text-xl px-2 py-1"><Link href="/">Home</Link></li>
                <li className="text-xl px-2 py-1"><Link href="/about">About</Link></li>
                <li className="text-xl px-2 py-1"><Link href="/leadership">Leadership</Link></li>
                <li className="text-xl px-2 py-1"><Link href="/awards-showcase">Awards & Project Showcase</Link></li>
                <li className="text-xl px-2 py-1"><Link href="/news">News</Link></li>

            </ul>
        </nav>
    );
}