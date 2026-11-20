import HeroBanner from "../Components/HeroBanner";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const fullTeam: TeamMember[] = [
  {
    id: 1,
    name: "Diarmuid Clancy",
    role: "Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Stephen Gilmore",
    role: "Director",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Kevin Menton",
    role: "Director",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Shane O'Hara",
    role: "Associate Director",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Aoife Stokes",
    role: "Senior Recruitment Consultant",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Daniel O'Connell",
    role: "Head of Technology",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Matthew Fleming",
    role: "Recruitment Consultant",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Caroline O'Grady",
    role: "Senior Consultant",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Carlota Plaza",
    role: "Marketing Administrator",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Team() {
  return (
    <main className="bg-gradient-to-b from-[#174852] via-[#102d33] to-[#0d2226] min-h-screen text-white">
      {/* ================= TOP CURVED MOUNTAIN BANNER ================= */}
      <HeroBanner overlayClass="bg-gradient-to-b from-[#0f172a]/45 via-transparent to-[#0f172a]/35" />

      {/* ================= MEET OUR TEAM INTRO & 3-COLUMN GRID ================= */}
      <section className="max-w-5xl mx-auto px-8 md:px-14 pt-14 pb-28">
        {/* Heading & Intro Paragraphs */}
        <div className="max-w-xl mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-normal text-[#e5d5b5] mb-6">
            Meet our Team
          </h1>

          <div className="space-y-5 text-xs sm:text-[13.5px] text-white/90 leading-[1.8] font-normal">
            <p>
              At Elevate Partners, our team is the cornerstone of our
              achievements. With a wealth of experience across executive search,
              recruitment, and talent advisory, we are passionate about
              connecting exceptional talent with industry-leading organisations.
              Each team member brings a unique blend of expertise, commitment,
              and insight, enabling us to deliver tailored solutions that drive
              results.
            </p>
            <p>
              We believe strong relationships are built on trust, transparency,
              and a genuine understanding of what both sides are looking for.
              Whether working with a client scaling their team or a candidate
              navigating their next career move, our team makes the time to get
              the details right.
            </p>
            <p className="font-medium text-white">
              Get to know the people behind our success.
            </p>
          </div>
        </div>

        {/* 3x3 Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {fullTeam.map((member) => (
            <div key={member.id} className="group flex flex-col">
              {/* Square Portrait Card */}
              <div className="aspect-square overflow-hidden bg-[#182e33] mb-4 shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Member Name & Role */}
              <h2 className="text-base sm:text-[17px] font-semibold text-white group-hover:text-[#e5d5b5] transition-colors">
                {member.name}
              </h2>
              <p className="text-xs text-white/75 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
