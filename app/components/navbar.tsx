import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


export default function Navbar() {
    return (

        <nav className="flex flex-row gap-1 min-w-full justify-between px-10 py-10">
            <Link href="/" className="font-bold text-3xl px-2 py-1">
                ASA Digital Humanities Caucus
            </Link>
            <ul className="flex flex-row gap-1">
                <li className=" text-xl p x-2 py-1"><Link href="/">Home</Link></li>
                <li className="text-xl px-2 py-1 group relative">
                    <span className="cursor-pointer">About</span>
                    <ul className="px-2 py-2 absolute hidden group-hover:block bg-white shadow-md mt-1">
                        <li className="px-2 py-1 hover:bg-gray-100"><Link href="/about/mission-history">Mission & History</Link></li>
                        <li className="text-xl px-2 py-1"><Link href="/leadership">Leadership</Link></li>
                        <li className="px-2 py-1 hover:bg-gray-100"><Link href="/about/governance">Governance</Link></li>
                        <li className="px-2 py-1 hover:bg-gray-100"><Link href="/about/bylaws">Bylaws</Link></li>
                    </ul>
                </li>

                <li className="text-xl px-2 py-1"><Link href="/awards-prizes">Awards & Prizes</Link></li>
                <li className="text-xl px-2 py-1"><Link href="/project-showcase">Project Showcase</Link></li>
                <li className="text-xl px-2 py-1 group relative">
                    <span className="cursor-pointer">Members</span>
                    <ul className="px-2 py-2 absolute hidden group-hover:block bg-white shadow-md mt-1">
                        <li className="px-2 py-1 hover:bg-gray-100"><Link href="/members/find-an-expert">Find an Expert</Link></li>
                        <li className="px-2 py-1 hover:bg-gray-100"><Link href="/members/member-directory">Member Directory</Link></li>
                    </ul>
                </li>
                <li className="text-xl px-2 py-1 group relative">
                    <span className="cursor-pointer">Events</span>
                    <ul className="px-2 py-2 absolute hidden group-hover:block bg-white shadow-md mt-1">
                        <li className="px-2 py-1 hover:bg-gray-100"><Link href="/events/annual-meeting">Annual Meeting</Link></li>
                        <li className="px-2 py-1 hover:bg-gray-100"><Link href="/events/calendar">Events Calendar</Link></li>
                    </ul>
                </li>
                <li className="text-xl px-2 py-1"><Link href="/blog">News</Link></li>


            </ul>
        </nav>

    );
}