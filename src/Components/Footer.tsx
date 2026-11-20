import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Our Team", to: "/team" },
  { label: "Our Services", to: "/services" },
  { label: "Our Expertise", to: "/expertise" },
  { label: "Temporary and Contract Solutions", to: "/temporary-solutions" },
//   { label: "News & Insights", to: "/news" },
  { label: "News & Insights", to: "/news-insights" },
  { label: "Job Openings", to: "/jobs" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Join Our Team", to: "/careers" },
  { label: "Equal Opportunity & Diversity", to: "/diversity" },
  { label: "Contact Us", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0d2226] via-[#13343a] to-[#1a4a52] text-white pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-8 md:px-12">
        {/* Top Centered Brand Logo */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="border-2 border-[#e5d5b5] text-[#e5d5b5] font-serif font-bold text-2xl px-2.5 py-1 tracking-tighter mb-2">
            EP
          </div>
          <span className="text-sm sm:text-base font-medium tracking-[0.26em] text-[#e5d5b5] uppercase">
            Elevate Partners
          </span>
        </div>

        {/* Middle 2-Column Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-20">
          {/* Left Column: Email + Navigation Links */}
          <div>
            <a
              href="mailto:info@elevatepartners.ie"
              className="inline-block text-sm font-medium text-white hover:text-[#e5d5b5] transition-colors mb-6"
            >
              info@elevatepartners.ie
            </a>

            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-xs sm:text-[13px] text-white/90 hover:text-[#e5d5b5] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Phone + Dublin & London Offices */}
          <div className="text-xs sm:text-[13px] leading-relaxed">
            <a
              href="tel:+35316916022"
              className="inline-block text-sm font-medium text-white hover:text-[#e5d5b5] transition-colors mb-6"
            >
              +353 1 691 6022
            </a>

            {/* Dublin Office */}
            <div className="mb-7">
              <h3 className="font-semibold tracking-wider uppercase text-white mb-1">
                Dublin
              </h3>
              <p className="text-white/85">29/30 Fitzwilliam Square</p>
              <p className="text-white/85">South</p>
              <p className="text-white/85">Dublin 2, D02 RF20</p>
              <p className="text-white/85">Ireland</p>
              <a
                href="https://maps.google.com/?q=29/30+Fitzwilliam+Square+South,+Dublin+2,+D02+RF20,+Ireland"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-1 text-[#7dd3fc] hover:text-white transition-colors"
              >
                Get Directions
              </a>
            </div>

            {/* London Office */}
            <div>
              <h3 className="font-semibold tracking-wider uppercase text-white mb-1">
                London
              </h3>
              <p className="text-white/85">12 Hay Hill, Mayfair</p>
              <p className="text-white/85">London, W1J 8NR</p>
              <p className="text-white/85">England</p>
              <a
                href="https://maps.google.com/?q=12+Hay+Hill,+Mayfair,+London,+W1J+8NR,+England"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-1 text-[#7dd3fc] hover:text-white transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Centered Social Media Icons */}
        <div className="mt-16 mb-10 flex items-center justify-center gap-7 text-white">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#e5d5b5] transition-colors font-bold text-base tracking-tight"
          >
            in
          </a>

          {/* X (Twitter) */}
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

          {/* Instagram */}
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

        {/* Bottom Copyright & Legal Links */}
        <div className="text-center text-[11px] text-white/75 space-y-1">
          <p>
            Copyright © 2026 Elevate Partners. All rights reserved. |{" "}
            <Link to="/privacy" className="underline hover:text-white">
              Privacy
            </Link>{" "}
            |{" "}
            <Link to="/terms" className="underline hover:text-white">
              Terms of Business 2025
            </Link>{" "}
            |{" "}
            <button
              type="button"
              className="underline hover:text-white cursor-pointer"
            >
              Cookie Preferences
            </button>{" "}
            |{" "}
            <Link to="/sitemap" className="underline hover:text-white">
              Sitemap
            </Link>
          </p>
          <p>
            Tailored by <span className="underline">iPLANiT</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
