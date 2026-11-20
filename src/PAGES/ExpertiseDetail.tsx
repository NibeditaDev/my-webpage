import { useParams, Link } from "react-router-dom";
import { expertiseSectors } from "./Expertise";

export default function ExpertiseDetail() {
  const { slug } = useParams();
  const sector = expertiseSectors.find((item) => item.slug === slug);

  const title = sector
    ? sector.title
    : slug
        ?.split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ") || "Sector Expertise";

  return (
    <main className="min-h-screen bg-[#f4f2ee]">
      {/* Top Banner */}
      <section className="relative bg-[#141d2e] text-white pt-36 pb-20 px-8 md:px-20 overflow-hidden">
        {sector && (
          <>
            <img
              src={sector.image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e2a38]/90 to-[#141d2e]/80" />
          </>
        )}

        <div className="relative z-10 max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.22em] uppercase text-[#e5d5b5] mb-3">
            Our Expertise
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight">
            {title}
          </h1>
        </div>
      </section>

      {/* Placeholder Content Ready for Custom Sector Details */}
      <section className="max-w-6xl mx-auto px-8 md:px-20 py-20">
        <p className="text-[#4a5568] text-base leading-relaxed max-w-2xl mb-8">
          Dedicated specialist recruitment page for <strong>{title}</strong>.
          Share screenshots of this individual sector page whenever you are
          ready to customize its content.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/expertise"
            className="inline-block border border-[#8a7047]/60 text-[#2d3748] hover:bg-[#141d2e] hover:text-white transition-colors duration-300 px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium"
          >
            Back to All Expertise
          </Link>
          <Link
            to="/contact"
            className="inline-block bg-[#141d2e] text-white hover:bg-[#8a7047] transition-colors duration-300 px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium"
          >
            Speak With a Specialist
          </Link>
        </div>
      </section>
    </main>
  );
}
