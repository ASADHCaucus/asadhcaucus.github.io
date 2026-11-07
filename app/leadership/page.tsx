
type LeadershipMember = {
    name: string;
    photoUrl?: string;
    title: string;
    role: string;
    institution: string;
    department: string
    bio: string;
};
const leadershipTeam: LeadershipMember[] = [
    {
        name: "Kevin Winstead",
        photoUrl: "../leadership-headshots/kevin-winstead.jpg",
        role: "Chair",
        title: "Professor",
        institution: "University of Florida",
        department: "College of Liberal Arts & Sciences",
        bio: "Dr. Kevin C. Winstead is an Assistant Professor of Critical Media and AI Studies within the African American Studies program and Sociology department at the University of Florida. Dr.Winstead’s in-progress book- length manuscript, Sankofa Cyberculture: Black Digital Activism and Disinformation, builds on his decade - long research into the Movement for Black Lives and foreign actors’ attempts to influence the American political process. Kevin has been part of the founding team of many of the country’s earliest Black Digital Studies centers, including the African American History, Culture, and Digital Humanities(AADHum) Initiative funded by the Andrew W.Mellon Foundation, AADHum fostered research, education, and training at the intersections of digital humanities and African - American studies and prepared a diverse community of scholars and students whose work has broadened the reach of the digital humanities in African - American history and cultural studies, and enriched humanities research with new methods, archives, and tools."
    },
    {
        name: "David Adelman",
        title: "Lecturer",
        photoUrl: "../leadership-headshots/david-adelman.jpg",
        role: "Vice Chair",
        institution: "University of Michigan",
        department: "Digital Studies Institute",
        bio: "David Adelman (he/him/his) is a Lecturer I in the Digital Studies Institute at the University of Michigan.  His research interests center disability and crip studies, with a particular emphasis on disability media studies, digital disability cultures, disability film studies, and critical sexuality studies. Through an interdisciplinary crip studies/feminist lens, he pursues questions which emerge at the intersection of power, culture, technology, identity, and desire. His recent dissertation, “Ambivalent Pleasures: Pleasure, Desire, Authenticity, and the Production of Value in Online Disability Cultures,” examines how discourses of “desirable disability” manifest in cultural productions and Internet publics. This project traces the circulation and intensification of such discourse in popular culture across a range of audiovisual material, exploring the neoliberal commodification of identity politics that occurs and, concomitantly, is contested, online. He also maintains an artistic practice which centers experimental video and remix as a means to explore disability culture, aesthetics, and politics."
    },
    {
        name: "Chalisa Budhai",
        photoUrl: "../leadership-headshots/chalisa-budhai.jpg",
        role: "Member at Large",
        title: "Underground Railroad Project Research Assistant",
        institution: "National Parks Service",
        department: "",
        bio: "lorem ipsum dolor sit amet"
    },
    {
        name: "Nic Vigilante",
        photoUrl: "../leadership-headshots/nic-vigilante.jpg",
        role: "Member at Large",
        title: "PhD Candidate",
        institution: "Cornell University",
        department: "Music",

        bio: "Nic Vigilante (they/them) is an ethnographer and theorist whose work explores performance, sound, virtuality, and queer Asian American aesthetics. They are currently a PhD Candidate in Music & Sound Studies at Cornell University, where they are also a Dean’s Excellence Fellow and graduate affiliate with the Media Studies and Feminist, Gender, and Sexuality Studies programs. Their dissertation, titled “The Sonic Unreal,” is an interactive web platform exploring music and performance at the interstices of Los Angeles’ Gaysian nightlife community, esports fandoms, and musical communities in virtual worlds. As an award-winning scholar and pedagogue in the digital humanities, Nic’s work bridges multimodal scholarship, digital ethnography, and the cultural study of emerging technologies such as generative AI, blockchain, and virtual reality. In 2026, Nic was awarded the Ian Lancashire Award for Graduate Student Promise by the Canadian Society for Digital Humanities. They hold the Canadian Certificate in Digital Humanities and were a 2025 Summer Graduate Digital Humanities Fellow at Cornell University and a 2026 fellow at Vassar College’s Institute for Liberal Arts Digital Scholarship."
    }
];

export default function LeadershipPage() {
    return (
        <main className=" min-w-full pt-20 px-60">
            <span className="text-4xl font-bold pb-10">Leadership Team, 2026-2027</span>
            <div className="grid grid-cols-3 gap-20 pt-10">
                {leadershipTeam.map((member) => (
                    <div key={member.name} className="text-2xl">
                        <img src={member.photoUrl ?? "https://placehold.co/400x600"} alt={member.name} className="mb-5 aspect-[2/3] w-full object-cover object-top" />
                        <p className=" text-lg font-bold">{member.name}</p>
                        <p className="text-lg">{member.role}</p>
                        <p className="text-lg">{member.title}</p>
                        <p className="text-lg">{member.institution}, {member.department}</p>
                        <p className="text-lg pt-5">{member.bio}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}