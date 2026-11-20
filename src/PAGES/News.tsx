import { Link } from "react-router-dom";
import HeroBanner from "../Components/HeroBanner";

const meetingBg =
  "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=2000&q=80";

export default function News() {
  return (
    <main className="bg-[#f4f2ee] min-h-screen">
      {/* ================= TOP CURVED MOUNTAIN BANNER ================= */}
      <HeroBanner overlayClass="bg-gradient-to-b from-[#0f172a]/45 via-transparent to-[#0f172a]/35" />

      {/* ================= PAGE INTRO: NEWS & INSIGHTS ================= */}
      <section className="max-w-5xl mx-auto px-8 md:px-14 pt-16 pb-28">
        <h1 className="text-3xl sm:text-4xl md:text-[42px] text-[#8a7047] font-normal tracking-tight mb-6">
          News &amp; Insights
        </h1>

        <div className="space-y-4 text-[#4a5568] text-sm sm:text-[15px] leading-[1.85] max-w-3xl">
          <p>
            Stay informed with the latest recruitment news, industry trends and
            market insights from Elevate Partners.
          </p>
          <p>
            Explore expert perspectives on Ireland's evolving job market, hiring
            trends, career advice and developments across financial services,
            banking, investment and technology. Our insights are designed to
            help employers make informed hiring decisions and professionals
            navigate their next career move.
          </p>
        </div>
      </section>

      {/* ================= BOTTOM CALL-TO-ACTION BANNER ================= */}
      <section className="relative w-full py-28 md:py-36 overflow-hidden flex items-center">
        <img
          src={meetingBg}
          alt="Corporate glass-walled meeting room"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#184854]/80 via-[#1d5866]/65 to-[#163d47]/75" />

        <div className="relative z-10 max-w-6xl mx-auto w-full px-8 md:px-20">
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-[1.12] max-w-2xl">
            Elevate Partners.
          </h2>

          <p className="mt-5 text-white/95 text-base sm:text-lg font-normal">
            Where Expertise Meets Opportunity.
          </p>

          <div className="mt-9">
            <Link
              to="/contact"
              className="inline-block border border-white/75 text-white hover:bg-white hover:text-[#141d2e] transition-colors duration-300 px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
