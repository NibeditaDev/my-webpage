import { Link } from "react-router-dom";
import HeroBanner from "../Components/HeroBanner";
import NewsSection from "../Components/NewsSection";

const clientLaptopImg =
  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=80";
const candidateLaptopImg =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80";
const meetingBg =
  "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=2000&q=80";

export default function TemporarySolutions() {
  return (
    <main className="bg-[#f4f2ee] min-h-screen">
      {/* ================= TOP CURVED MOUNTAIN BANNER ================= */}
      <HeroBanner overlayClass="bg-gradient-to-b from-[#0f172a]/45 via-transparent to-[#0f172a]/35" />

      {/* ================= PAGE INTRO ================= */}
      <section className="max-w-5xl mx-auto px-8 md:px-14 pt-16 pb-10">
        <h1 className="text-3xl sm:text-4xl md:text-[42px] text-[#8a7047] font-normal tracking-tight mb-6">
          Temporary and Contract Solutions
        </h1>

        <p className="text-[#4a5568] text-sm sm:text-[15px] leading-[1.85] max-w-3xl">
          We provide flexible temporary and contract recruitment solutions to
          meet the evolving demands of the financial services industry. Whether
          covering short-term projects, maternity leave, or peak workload
          periods, our extensive talent pool allows us to deliver highly skilled
          professionals who can hit the ground running and add immediate value.
          Our dedicated contract recruitment team ensures a fast turnaround,
          compliance with regulatory requirements, and ongoing support
          throughout the contract duration, giving our clients peace of mind
          while maintaining workforce flexibility.
        </p>
      </section>

      {/* ================= ALTERNATING BLOCKS ================= */}
      <section className="max-w-5xl mx-auto px-8 md:px-14 py-12 pb-28 space-y-24 md:space-y-28">
        {/* Block 1: Partnering with Clients (Image Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-tr-[75px] shadow-md bg-slate-200 group">
              <img
                src={clientLaptopImg}
                alt="Partnering with clients"
                className="w-full h-[340px] sm:h-[400px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] text-[#8a7047] font-normal leading-[1.2] mb-5">
              Partnering with Clients
            </h2>

            <p className="text-[#4a5568] text-xs sm:text-[14px] leading-[1.85] font-normal">
              At Elevate Partners, we work closely with our clients to deliver
              bespoke temporary and contract staffing solutions that align with
              their business needs and strategic goals. We take the time to
              understand your organisation's culture, challenges, and resource
              demands, ensuring we provide high-calibre professionals who can
              make an immediate impact. Whether you're scaling for a project,
              covering leave, or navigating market shifts, our agile recruitment
              approach and sector expertise allow us to deliver flexible,
              compliant, and efficient workforce solutions — all while reducing
              risk and maintaining business continuity.
            </p>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-block border border-[#8a7047]/60 text-[#2d3748] hover:bg-[#141d2e] hover:text-white hover:border-[#141d2e] transition-colors duration-300 px-9 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium"
              >
                Register Your Vacancy
              </Link>
            </div>
          </div>
        </div>

        {/* Block 2: Supporting Candidates (Text Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] text-[#8a7047] font-normal leading-[1.2] mb-5">
              Supporting Candidates
            </h2>

            <p className="text-[#4a5568] text-xs sm:text-[14px] leading-[1.85] font-normal">
              At Elevate Partners, we understand that flexibility, speed, and
              support are key to a successful temporary or contract assignment.
              Whether you're seeking short-term opportunities or looking to
              build a long-term contracting career, our dedicated team is here
              to guide you every step of the way. From matching you with the
              right roles to ensuring smooth onboarding and ongoing support
              throughout your placement, we're committed to helping you thrive.
              With access to leading employers in the financial services
              industry and a wide range of assignments, we empower you to work
              on your terms while gaining valuable experience and exposure.
            </p>

            <div className="mt-8">
              <Link
                to="/jobs"
                className="inline-block border border-[#8a7047]/60 text-[#2d3748] hover:bg-[#141d2e] hover:text-white hover:border-[#141d2e] transition-colors duration-300 px-9 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium"
              >
                Search For A Job
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 lg:order-2">
            <div className="overflow-hidden rounded-tl-[75px] shadow-md bg-slate-200 group">
              <img
                src={candidateLaptopImg}
                alt="Supporting contract candidates"
                className="w-full h-[340px] sm:h-[400px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= REUSED NEWS AND INSIGHTS SECTION ================= */}
      <NewsSection />

      {/* ================= BOTTOM CALL-TO-ACTION BANNER ================= */}
      <section className="relative w-full py-28 md:py-36 overflow-hidden flex items-center">
        <img
          src={meetingBg}
          alt="Corporate glass-walled meeting room"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#184854]/80 via-[#1d5866]/65 to-[#163d47]/75" />

        <div className="relative z-10 max-w-6xl mx-auto w-full px-8 md:px-20">
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-[1.12] max-w-xl">
            Reaching New <br />
            Heights
          </h2>

          <p className="mt-5 text-white/95 text-base sm:text-lg font-normal">
            Connect with one of our industry experts.
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
