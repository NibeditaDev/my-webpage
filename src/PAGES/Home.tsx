import { Link } from "react-router-dom";
import HeroBanner from "../Components/HeroBanner";
import StatsCarousel from "../Components/StatsCarousel";
import NewsSection from "../Components/NewsSection";
import TeamSection from "../Components/TeamSection";

const officeImg =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80";
const handshakeImg =
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80";
const meetingBg =
  "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=2000&q=80";

export default function Home() {
  return (
    <main className="bg-[#f4f2ee] min-h-screen">
      {/* ================= SECTION 1: HERO ================= */}
      <HeroBanner
        heightClass="h-[92vh]"
        clipPath="polygon(0 0, 100% 0, 100% 91%, 0 100%)"
        overlayClass="bg-gradient-to-b from-[#0f172a]/55 via-[#0f172a]/30 to-[#0f172a]/60"
        containerClass="relative w-full overflow-hidden flex items-center rounded-bl-[70px]"
      >
        <div className="relative z-10 max-w-6xl mx-auto w-full px-8 md:px-20 pt-12">
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight leading-[1.08] max-w-xl">
            Reaching New <br />
            Heights
          </h1>

          <p className="mt-6 text-white/95 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-xl">
            Elevate Partners is a boutique recruitment consultancy firm
            connecting exceptional talent with industry-leading opportunities
            across the financial services sector.
          </p>
        </div>
      </HeroBanner>

      {/* ================= SECTION 2: SPECIALISTS OVERVIEW ================= */}
      <section className="max-w-6xl mx-auto px-8 md:px-20 py-20 md:py-28">
        <h2 className="text-3xl sm:text-4xl md:text-[42px] text-[#8a7047] font-normal leading-[1.2] max-w-lg mb-12">
          Finance Recruitment &amp; <br />
          Executive Search <br />
          Specialists
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          <div className="lg:col-span-6">
            <p className="text-[#4a5568] text-[15px] sm:text-base leading-[1.85] font-normal">
              Elevate Partners is a specialist recruitment and executive firm,
              connecting talented professionals with leading organisations
              across Ireland, the UK and Europe. Founded in Dublin in 2018, we
              bring together extensive industry experience, specialist market
              knowledge and a relationship-driven approach to recruitment. We
              work closely with both clients and candidates to understand their
              needs and deliver tailored recruitment solutions that support
              long-terms success. Our expertise spans across Accounting &amp;
              Finance, Risk &amp; Compliance, Investment Banking, Asset &amp;
              Wealth Management, Private Equity, Energy &amp; Infrastructure,
              Real Estate, Aircraft Leasing, and ESG &amp; Sustainability.
              Through our specialist teams, we support organisations in
              identifying and attracting talent across a wide range of
              professionals and senior-level positions. At Elevate Partners, we
              believe successful recruitment goes beyond matching candidates
              with opportunities. We focus on building lasting relationships,
              providing informed market insights and delivering a professional,
              personalised service throughout the recruitment process. As we
              continue to grow, our commitment remains the same: connecting
              exceptional talent with opportunities and helping businesses build
              high-performing teams.
            </p>

            <div className="mt-10">
              <Link
                to="/expertise"
                className="inline-block border border-[#8a7047]/60 text-[#2d3748] hover:bg-[#141d2e] hover:text-white hover:border-[#141d2e] transition-colors duration-300 px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium"
              >
                Our Expertise
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div
              className="overflow-hidden shadow-md bg-slate-200 group"
              style={{
                clipPath: "polygon(0 0, 100% 4%, 100% 100%, 0 100%)",
              }}
            >
              <img
                src={officeImg}
                alt="Elevate Partners modern office workspace"
                className="w-full h-[380px] sm:h-[430px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: CIRCULAR STATS CAROUSEL ================= */}
      <StatsCarousel />

      {/* ================= SECTION 4: CONNECTING WITH THE BEST ================= */}
      <section className="max-w-6xl mx-auto px-8 md:px-20 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-tl-[75px] shadow-md bg-slate-200 group">
              <img
                src={handshakeImg}
                alt="Recruitment consultation handshake"
                className="w-full h-[380px] sm:h-[440px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-[42px] text-[#8a7047] font-normal leading-[1.18] mb-6">
              Connecting with the <br />
              Best
            </h2>

            <p className="text-[#4a5568] text-[15px] sm:text-base leading-[1.85] font-normal">
              At Elevate Partners, we bring together top tier talent and
              industry-leading organisations through our personalised and
              strategic approach to recruitment. Our team of experienced
              professionals is dedicated to fostering long-term relationships,
              ensuring we deliver solutions that not only meet immediate needs
              but also align with future aspirations. By leveraging our in-depth
              industry expertise and staying ahead of market trends, we connect
              the best candidates with roles where they can thrive and help
              businesses achieve their strategic goals. With a commitment to
              excellence, innovation, and integrity, Elevate Partners is your
              trusted partner in navigating the recruitment landscape and
              driving success for both clients and candidates alike.
            </p>

            <div className="mt-10">
              <Link
                to="/jobs"
                className="inline-block border border-[#8a7047]/60 text-[#2d3748] hover:bg-[#141d2e] hover:text-white hover:border-[#141d2e] transition-colors duration-300 px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium"
              >
                For Candidates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: NEWS AND INSIGHTS ================= */}
      <NewsSection />

      {/* ================= SECTION 6: MEET OUR TEAM ================= */}
      <TeamSection />

      {/* ================= SECTION 7: YOUR FUTURE, OUR FOCUS (CTA) ================= */}
      <section className="relative w-full py-28 md:py-36 overflow-hidden flex items-center">
        <img
          src={meetingBg}
          alt="Corporate glass-walled meeting room"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#184854]/80 via-[#1d5866]/65 to-[#163d47]/75" />

        <div className="relative z-10 max-w-6xl mx-auto w-full px-8 md:px-20">
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-[1.12] max-w-xl">
            Your Future, Our <br />
            Focus
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
