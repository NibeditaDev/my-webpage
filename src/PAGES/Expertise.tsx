import { Link } from "react-router-dom";
import HeroBanner from "../Components/HeroBanner";

const meetingBg =
  "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=2000&q=80";

export interface ExpertiseSector {
  id: number;
  title: string;
  slug: string;
  to: string;
  image: string;
}

export const expertiseSectors: ExpertiseSector[] = [
  {
    id: 1,
    title: "Accounting & Finance",
    slug: "accounting-and-finance",
    to: "/expertise/accounting-and-finance",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Asset & Wealth Management",
    slug: "asset-and-wealth-management",
    to: "/expertise/asset-and-wealth-management",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Aircraft Leasing",
    slug: "aircraft-leasing",
    to: "/expertise/aircraft-leasing",
    image:
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Energy & Infrastructure",
    slug: "energy-and-infrastructure",
    to: "/expertise/energy-and-infrastructure",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "ESG & Sustainability",
    slug: "esg-and-sustainability",
    to: "/expertise/esg-and-sustainability",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Investment Banking",
    slug: "investment-banking",
    to: "/expertise/investment-banking",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Private Credit & Private Equity",
    slug: "private-credit-and-private-equity",
    to: "/expertise/private-credit-and-private-equity",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Real Estate",
    slug: "real-estate",
    to: "/expertise/real-estate",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    title: "Risk & Compliance",
    slug: "risk-and-compliance",
    to: "/expertise/risk-and-compliance",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    title: "Technology",
    slug: "technology",
    to: "/expertise/technology",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    title: "Temporary and Contract Solutions",
    slug: "temporary-and-contract-solutions",
    to: "/temporary-solutions",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Expertise() {
  return (
    <main className="bg-[#f4f2ee] min-h-screen">
      {/* ================= TOP CURVED MOUNTAIN BANNER ================= */}
      <HeroBanner overlayClass="bg-gradient-to-b from-[#0f172a]/45 via-transparent to-[#0f172a]/35" />

      {/* ================= PAGE INTRO: OUR EXPERTISE ================= */}
      <section className="max-w-5xl mx-auto px-8 md:px-14 pt-16 pb-10">
        <h1 className="text-3xl sm:text-4xl md:text-[42px] text-[#8a7047] font-normal tracking-tight mb-6">
          Our Expertise
        </h1>

        <div className="space-y-5 text-[#4a5568] text-sm sm:text-[15px] leading-[1.85] max-w-3xl">
          <p>
            At Elevate Partners, we are a specialist recruitment and executive
            search firm connecting exceptional talent with leading organisations
            across Ireland and Europe. We provide tailored recruitment solutions
            across a range of sectors, including accounting and finance, asset
            and wealth management, aircraft leasing, energy and infrastructure,
            ESG and sustainability, investment banking, private equity, real
            estate, and risk and compliance.
          </p>
          <p>
            With decades of combined recruitment experience and in-depth
            knowledge of the industries we serve, our consultants understand the
            unique hiring challenges facing businesses in today's competitive
            market. From senior leadership appointments to specialist finance
            and industry roles, we work closely with clients to identify and
            secure professionals who make a lasting impact.
          </p>
          <p>
            Through our extensive professional networks, sector expertise and
            personalised approach, we help organisations build high-performing
            teams while supporting candidates in advancing their careers.
          </p>
        </div>
      </section>

      {/* ================= 11 CLICKABLE SECTOR BOXES GRID ================= */}
      <section className="max-w-5xl mx-auto px-8 md:px-14 py-12 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseSectors.map((sector) => (
            <Link
              key={sector.id}
              to={sector.to}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex items-center p-7"
            >
              {/* Background Sector Photo */}
              <img
                src={sector.image}
                alt={sector.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Deep Blue-Teal Atmospheric Tint Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0e3447]/75 via-[#13465e]/65 to-[#0b2533]/80 group-hover:from-[#0e3447]/60 group-hover:to-[#0b2533]/70 transition-colors duration-300" />

              {/* Centered-Left White Title */}
              <h2 className="relative z-10 text-white text-xl sm:text-[22px] font-normal leading-snug tracking-tight">
                {sector.title}
              </h2>
            </Link>
          ))}
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
            Investing in success
          </h2>

          <p className="mt-5 text-white/95 text-base sm:text-lg font-normal">
            We are different. We are Elevate Partners.
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
