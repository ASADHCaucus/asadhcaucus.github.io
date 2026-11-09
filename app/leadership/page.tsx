
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
    },
    {
        name: "Ngozi Harrison",
        photoUrl: "../leadership-headshots/ngozi-harrison.jpg",
        role: "Member at Large",
        title: "PhD Candidate",
        institution: "University of California, Los Angeles",
        department: "Information Studies",
        bio: "Ngozi Harrison is a Ph.D. candidate at the University of California, Los Angeles, in Information Studies, whose research primarily investigates the relationship between machine learning, quantitative and computational methods, and society. His work critiques algorithmic culture and computational reason and sits at the intersection of Black Studies, Critical Quantitative and Computational Methods, and Critical Information Studies. He is currently working on his dissertation proposal, which critically examines the underlying values, norms, and assumptions of machine learning practice to develop new frameworks for liberatory technical practice and justice-oriented technologies."
    },
    {
        name: "Nadejda Webb",
        photoUrl: "../leadership-headshots/nadejda-webb.jpg",
        role: "Past Chair, 2025-2026",
        title: "Visiting Assistant Professor",
        institution: "Johns Hopkins University",
        department: "The Center for Digital Humanities",
        bio: "Nadejda I. Webb (she/her/they) is the Assistant Director of LifexCode: Digital Humanities Against Enclosure and a Visiting Assistant Professor at the Center for Digital Humanities. She recently founded the We Live Language (WLL) lab within Black Beyond Data, a Computational Humanities and Social Sciences ecosystem. The WLL lab is centered on the writings and spoken word of Afro-diasporic poets, authors, and philosophers, exploring the intricate relationship between language and power. Webb’s teaching and research interests encompass 20th and 21st-century African-American and Post-Colonial literature, as well as digital humanities, imaginaries, and belonging. Webb’s research has been supported by the Andrew W. Mellon Foundation, the Social Science Research Council, the American Council of Learned Societies, Columbia University’s Center for Oral History, the Center for Africana Studies at Johns Hopkins, the USC Annenberg School for Communication and Journalism, and Vanderbilt University. She holds a B.A. in English Language and Literature from CUNY Hunter College and a joint Ph.D. in English and Comparative Media Analysis and Practice from Vanderbilt."
    }
];

export default function LeadershipPage() {
    return (
        <main className="w-full flex-1 pb-20">
            <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                <h1 className="text-4xl font-bold pb-10">Leadership Team, 2026-2027</h1>
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-20">
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
            </div>
        </main>
    );
}