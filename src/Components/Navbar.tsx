import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";

const menuItems = [
  { label: "Home", to: "/", hasSubmenu: false },
  { label: "Our Team", to: "/team", hasSubmenu: false },
  { label: "Our Services", to: "/services", hasSubmenu: false },
  { label: "Our Expertise", to: "/expertise", hasSubmenu: true },
  {
    label: "Temporary and Contract Solutions",
    to: "/temporary-solutions",
    hasSubmenu: false,
  },
  { label: "News & Insights", to: "/news-insights", hasSubmenu: false },
  { label: "Job Openings", to: "/jobs", hasSubmenu: false },
  { label: "Testimonials", to: "/testimonials", hasSubmenu: false },
  { label: "Join Our Team", to: "/careers", hasSubmenu: false },
  {
    label: "Equal Opportunity & Diversity",
    to: "/diversity",
    hasSubmenu: false,
  },
  { label: "Salary Insights 2026", to: "/salary-insights", hasSubmenu: false },
  { label: "Contact Us", to: "/contact", hasSubmenu: false },
];

const expertiseSubItems = [
  { label: "Accounting & Finance", to: "/expertise/accounting-and-finance" },
  {
    label: "Asset & Wealth Management",
    to: "/expertise/asset-and-wealth-management",
  },
  { label: "Aircraft Leasing", to: "/expertise/aircraft-leasing" },
  { label: "ESG & Sustainability", to: "/expertise/esg-and-sustainability" },
  {
    label: "Energy & Infrastructure",
    to: "/expertise/energy-and-infrastructure",
  },
  { label: "Investment Banking", to: "/expertise/investment-banking" },
  {
    label: "Private Credit & Private Equity",
    to: "/expertise/private-credit-and-private-equity",
  },
  { label: "Real Estate", to: "/expertise/real-estate" },
  { label: "Risk & Compliance", to: "/expertise/risk-and-compliance" },
  { label: "Technology", to: "/expertise/technology" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Change navbar background dynamically on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background page scrolling while fullscreen menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    if (!menuOpen) {
      setHoveredItem(null);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = searchQuery.trim();
    setMenuOpen(false);
    navigate(trimmed ? `/jobs?q=${encodeURIComponent(trimmed)}` : "/jobs");
  };

  const handleOpenAllJobs = () => {
    setSearchQuery("");
    setMenuOpen(false);
  };

  const handleGoHome = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isExpertiseHovered = hoveredItem === "Our Expertise";

  return (
    <>
      {/* ================= MAIN TOP BAR ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 px-6 md:px-14 py-5 flex items-center justify-between ${
          isScrolled ? "bg-[#141d2e] shadow-lg py-4" : "bg-transparent"
        }`}
      >
        {/* Left: MENU Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-3 text-white/90 hover:text-amber-300 transition cursor-pointer group"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span className="h-[1.5px] w-full bg-current transition-all group-hover:w-4" />
            <span className="h-[1.5px] w-full bg-current" />
            <span className="h-[1.5px] w-4 bg-current transition-all group-hover:w-full" />
          </div>
          <span className="text-xs tracking-[0.2em] font-medium uppercase">
            Menu
          </span>
        </button>

        {/* Center: Brand Logo (Opens Homepage) */}
        <Link
          to="/"
          onClick={handleGoHome}
          className="flex items-center overflow-hidden h-7 md:h-8 cursor-pointer"
        >
          {/* <--- CHANGE 1: Replace src="/ep-logo.png" with your logo URL or /filename.png ---> */}
          <img
            src="https://elevatepartners.ie/wp-content/uploads/2024/08/elevate_logo.svg"
            alt="Elevate Partners"
            className="h-8 md:h-9 w-auto object-contain"
          />
        </Link>

        {/* Right: JOB SEARCH */}
        <Link
          to="/jobs"
          onClick={handleOpenAllJobs}
          className="flex items-center gap-2.5 text-white/90 hover:text-amber-300 transition"
        >
          <span className="hidden sm:inline text-xs tracking-[0.18em] font-medium uppercase">
            Job Search
          </span>
          <div className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center">
            <Search className="w-3.5 h-3.5" />
          </div>
        </Link>
      </header>

      {/* ================= FULLSCREEN MENU OVERLAY ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-gradient-to-b from-[#0d2226] via-[#13343a] to-[#1a4a52] text-white overflow-y-auto">
          {/* Giant Faint Background "EP" Watermark */}
          <div
            aria-hidden="true"
            className="pointer-events-none select-none fixed inset-0 flex items-center justify-center overflow-hidden"
          >
            <span className="text-[360px] sm:text-[520px] font-serif font-bold tracking-tighter text-teal-400/[0.08]">
              EP
            </span>
          </div>

          <div className="relative z-10 min-h-screen flex flex-col justify-between px-6 md:px-14 py-5">
            {/* Top Header Row inside Drawer */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2.5 text-white/90 hover:text-[#e5d5b5] transition cursor-pointer"
              >
                <span className="w-6 h-6 border border-white/50 flex items-center justify-center">
                  <X className="w-3.5 h-3.5" />
                </span>
                <span className="text-xs tracking-[0.2em] font-medium uppercase">
                  Close
                </span>
              </button>

              {/* Center: Brand Logo inside Menu (Opens Homepage) */}
              <Link
                to="/"
                onClick={handleGoHome}
                className="flex items-center overflow-hidden h-7 md:h-8 cursor-pointer"
              >
                {/* <--- CHANGE 2: Put the exact same logo URL or /filename.png here ---> */}
                <img
                  src="https://elevatepartners.ie/wp-content/uploads/2024/08/elevate_logo.svg"
                  alt="Elevate Partners"
                  className="h-8 md:h-9 w-auto object-contain"
                />
              </Link>

              <Link
                to="/jobs"
                onClick={handleOpenAllJobs}
                className="flex items-center gap-2.5 text-white/90 hover:text-[#e5d5b5] transition"
              >
                <span className="hidden sm:inline text-xs tracking-[0.18em] font-medium uppercase">
                  Job Search
                </span>
                <div className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center">
                  <Search className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>

            {/* Center 2-Column Container */}
            <div className="max-w-4xl w-full mx-auto my-12">
              <form onSubmit={handleSearchSubmit} className="max-w-xs mb-9">
                <div className="relative flex items-center bg-white rounded-full px-4 py-2.5 shadow-md">
                  <Search className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="SEARCH"
                    className="w-full bg-transparent text-xs tracking-[0.15em] text-slate-800 placeholder:text-slate-400 focus:outline-none"
                  />
                </div>
              </form>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <nav className="md:col-span-6 flex flex-col items-start space-y-3">
                  {menuItems.map((item) => {
                    const isHovered = hoveredItem === item.label;

                    return (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => {
                          if (item.to === "/jobs") setSearchQuery("");
                          setMenuOpen(false);
                        }}
                        onMouseEnter={() => setHoveredItem(item.label)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className="group relative inline-block py-1"
                      >
                        <span
                          className={`block text-base sm:text-[17px] font-medium transition-colors duration-200 ${
                            isHovered ? "text-[#e5d5b5]" : "text-white"
                          }`}
                        >
                          {item.label}
                        </span>

                        <span
                          className={`block h-[1.5px] bg-[#e5d5b5] transition-all duration-300 mt-1 ${
                            isHovered ? "w-full opacity-100" : "w-0 opacity-0"
                          }`}
                        />
                      </Link>
                    );
                  })}
                </nav>

                <div className="md:col-span-6 md:pl-8">
                  <div
                    className={`flex flex-col space-y-3.5 transition-all duration-200 ${
                      isExpertiseHovered
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2 pointer-events-none hidden md:flex"
                    }`}
                  >
                    {expertiseSubItems.map((sub) => (
                      <Link
                        key={sub.to}
                        to={sub.to}
                        onClick={() => setMenuOpen(false)}
                        className="text-sm sm:text-[15px] font-medium text-white/95 hover:text-[#e5d5b5] transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-4 space-y-3 text-xs sm:text-sm">
                <div>
                  <a
                    href="mailto:info@elevatepartners.ie"
                    className="text-white/95 hover:text-[#e5d5b5] transition-colors font-medium"
                  >
                    info@elevatepartners.ie
                  </a>
                </div>
                <div>
                  <a
                    href="tel:+35316916022"
                    className="text-white/95 hover:text-[#e5d5b5] transition-colors font-medium"
                  >
                    +353 1 691 6022
                  </a>
                </div>

                <div className="pt-3 flex items-center gap-6 text-white">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-[#e5d5b5] transition-colors font-bold text-base"
                  >
                    in
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="X"
                    className="hover:text-[#e5d5b5] transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="hover:text-[#e5d5b5] transition-colors"
                  >
                    <svg
                      className="w-4 h-4 stroke-current fill-none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="h-4" />
          </div>
        </div>
      )}
    </>
  );
}
