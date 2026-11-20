import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
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
    name: "Claire Murphy",
    role: "Senior Consultant",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Conor Walsh",
    role: "Associate Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
  },
];

export default function TeamSection() {
  const [startIndex, setStartIndex] = useState(0);
  const total = teamMembers.length;

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  // Display 4 team members at a time in a continuous loop
  const visibleMembers = [
    teamMembers[startIndex % total],
    teamMembers[(startIndex + 1) % total],
    teamMembers[(startIndex + 2) % total],
    teamMembers[(startIndex + 3) % total],
  ];

  return (
    <section
      className="relative bg-gradient-to-br from-[#0f2629] via-[#133236] to-[#0b1c1f] text-white pt-28 pb-24 -mt-6"
      style={{
        // Subtle diagonal top edge separating News & Insights from Meet Our Team
        clipPath: "polygon(0 4%, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Heading & Intro Paragraph */}
        <div className="max-w-xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-normal text-[#e5d5b5] mb-5">
            Meet Our Team
          </h2>
          <p className="text-sm sm:text-[15px] text-white/85 leading-[1.8] font-normal">
            At Elevate Partners, our success is driven by a team of experienced
            professionals who are passionate about connecting exceptional talent
            with leading organisations. From seasoned directors to dedicated
            recruitment consultants, each member brings deep industry expertise,
            innovative thinking, and a commitment to excellence. Get to know the
            people who make Elevate Partners a trusted name in recruitment.
          </p>
        </div>

        {/* 4-Column Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleMembers.map((member) => (
            <div key={member.id} className="group flex flex-col">
              {/* Square Portrait Card */}
              <div className="relative aspect-square overflow-hidden bg-[#182c30] mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-lg font-semibold text-white group-hover:text-[#e5d5b5] transition-colors">
                {member.name}
              </h3>
              <p className="text-xs text-white/75 mt-1">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Bottom Controls: "MEET THE TEAM" Button on Left + Clickable Arrows on Right */}
        <div className="mt-14 flex items-center justify-between">
          <Link
            to="/team"
            className="inline-block border border-[#e5d5b5]/50 text-white hover:bg-[#e5d5b5] hover:text-[#0f2629] transition-colors duration-300 px-10 py-3.5 text-xs tracking-[0.2em] uppercase font-medium"
          >
            Meet The Team
          </Link>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous team members"
              className="p-2 text-white/75 hover:text-[#e5d5b5] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next team members"
              className="p-2 text-white/75 hover:text-[#e5d5b5] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
