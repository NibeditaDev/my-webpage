import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface StatItem {
  highlight: string;
  title: string;
  description: string;
}

const statsData: StatItem[] = [
  {
    highlight: "42.3%",
    title: "Female Placements",
    description:
      "For an impactful diversity statistic, aiming above 40% female representation shows leadership over national targets, particularly as female presence increases at senior levels in the financial services sector.",
  },
  {
    highlight: "360°",
    title: "Consultative Approach",
    description:
      "Consultants who manage the entire recruitment process from search to placement, ensuring a comprehensive and personalised service",
  },
  {
    highlight: "47,331",
    title: "Screened Financial Services Candidates",
    description:
      "Accessing a broad and diverse talent pool across 3 continents, ensuring you find the perfect fit quickly and efficiently.",
  },
  {
    highlight: "Owner",
    title: "Managed Business",
    description:
      "Experience unparalleled dedication with an owner-managed business, ensuring every client receives personalised service.",
  },
  {
    highlight: "80,030",
    title: "Followers on LinkedIn",
    description:
      "Reflecting our strong brand presence, industry influence and advertising reach.",
  },
  {
    highlight: "73",
    title: "Years Recruitment Experience",
    description:
      "Our deep industry knowledge translates into the best talent for your needs.",
  },
  {
    highlight: "98.7%",
    title: "Record on Retained Assignments",
    description:
      "Elevate Partners guarantees successful outcomes on executive search projects, offering clients unmatched reliability and peace of mind.",
  },
  {
    highlight: "1095",
    title: "Clients across 3 Continents",
    description:
      "We can tap into our extensive network, enhanced by our London office opened in April 2022, combining our local roots with a global reach.",
  },
];

export default function StatsCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const total = statsData.length;

  // Move 1 step left in a continuous circle
  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  // Move 1 step right in a continuous circle
  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  // Pick 3 consecutive items wrapping around the array cleanly
  const visibleItems = [
    statsData[startIndex % total],
    statsData[(startIndex + 1) % total],
    statsData[(startIndex + 2) % total],
  ];

  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* Subtle Giant Watermark Monogram in the Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center"
      >
        <span className="text-[280px] sm:text-[380px] font-serif font-bold tracking-tighter text-[#f4f2ee]/90">
          EP
        </span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-12 md:px-20">
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous stat"
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-[#8a7047] transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-7 h-7 stroke-[1.25]" />
        </button>

        {/* 3-Column Circular Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-14">
          {visibleItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col transition-all duration-300"
            >
              {/* Golden-Bronze Big Number / Headline */}
              <div className="text-4xl sm:text-[44px] font-normal text-[#8a7047] tracking-tight leading-none">
                {item.highlight}
              </div>

              {/* Subheading */}
              <h3 className="mt-2.5 text-lg sm:text-[19px] font-normal text-slate-800 leading-snug">
                {item.title}
              </h3>

              {/* Thin Horizontal Divider Line */}
              <div className="w-full h-[1px] bg-slate-300 my-4" />

              {/* Body Description */}
              <p className="text-sm text-[#4a5568] leading-[1.75] font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          aria-label="Next stat"
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-[#8a7047] transition-colors cursor-pointer"
        >
          <ChevronRight className="w-7 h-7 stroke-[1.25]" />
        </button>
      </div>
    </section>
  );
}
