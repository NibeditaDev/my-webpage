import { useState } from "react";
import { Link } from "react-router-dom";
import HeroBanner from "../Components/HeroBanner";

const industriesList = [
  "Accounting and Finance",
  "Aircraft Leasing",
  "Business Support",
  "Infrastructure",
  "Investment Banking",
  "Real Estate",
  "Risk and Compliance",
  "Technology",
  "Wealth Management",
];

export default function SalaryInsights() {
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    companyName: "",
  });
  const [agreedPrivacy, setAgreedPrivacy] = useState(false);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleIndustry = (industry: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry)
        ? prev.filter((item) => item !== industry)
        : [...prev, industry],
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedIndustries.length === 0) {
      setErrorMsg("Please select at least one industry.");
      return;
    }
    setErrorMsg("");
    setSubmitted(true);
  };

  return (
    <main className="bg-[#f4f2ee] min-h-screen">
      {/* ================= TOP CURVED MOUNTAIN BANNER WITH BREADCRUMB ================= */}
      <HeroBanner containerClass="relative w-full overflow-hidden rounded-bl-[75px] flex items-center">
        {/* Breadcrumb Overlay */}
        <div className="relative z-10 max-w-6xl mx-auto w-full px-8 md:px-20 -mt-20">
          <nav
            aria-label="Breadcrumb"
            className="text-xs sm:text-[13px] font-medium text-white/95"
          >
            <Link to="/" className="hover:text-[#e5d5b5] transition-colors">
              Home
            </Link>
            <span className="mx-1.5">&gt;</span>
            <span>Salary Insights 2026</span>
          </nav>
        </div>
      </HeroBanner>

      {/* ================= INTRO & SALARY INSIGHTS FORM ================= */}
      <section className="max-w-3xl mx-auto px-8 md:px-12 pt-16 pb-24">
        <h1 className="text-3xl sm:text-4xl md:text-[42px] text-[#8a7047] font-normal tracking-tight mb-7">
          Salary Insights 2026
        </h1>

        <div className="space-y-4 text-[#4a5568] text-xs sm:text-[13.5px] leading-[1.85] mb-12">
          <p>
            Understanding current market rates is essential when hiring or
            negotiating your next role. Our Salary Insights are drawn from live
            placements and market data across Ireland's financial services
            sector, giving both employers and candidates a clear, up-to-date
            benchmark for compensation.
          </p>
          <p>
            Whether you're planning your next hire or considering a career move,
            use the form below to receive tailored salary insights for your
            sector, role, and experience level.
          </p>
        </div>

        {/* ================= ENQUIRY FORM ================= */}
        {submitted ? (
          <div className="bg-white border border-[#8a7047]/40 p-8 text-center shadow-sm">
            <h2 className="text-xl text-[#8a7047] font-medium mb-2">
              Salary Insights Request Received
            </h2>
            <p className="text-xs sm:text-sm text-[#4a5568] mb-6">
              Thank you{formData.firstName ? `, ${formData.firstName}` : ""}. We
              will send your tailored 2026 compensation benchmarks for{" "}
              <strong>{selectedIndustries.join(", ")}</strong> shortly.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setSelectedIndustries([]);
              }}
              className="bg-[#1b5a66] hover:bg-[#141d2e] text-white px-8 py-3 text-xs tracking-[0.2em] uppercase transition-colors cursor-pointer"
            >
              Request Another Sector
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1: First Name / Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold text-[#8a7047] mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#e6e3dd] px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#8a7047]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#8a7047] mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#e6e3dd] px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#8a7047]"
                />
              </div>
            </div>

            {/* Row 2: Email / Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold text-[#8a7047] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#e6e3dd] px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#8a7047]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#8a7047] mb-1">
                  Mobile
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full bg-[#e6e3dd] px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#8a7047]"
                />
              </div>
            </div>

            {/* Row 3: Company Name */}
            <div>
              <label className="block text-[11px] font-semibold text-[#8a7047] mb-1">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full bg-[#e6e3dd] px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#8a7047]"
              />
            </div>

            {/* Privacy Policy Consent */}
            <div className="pt-2">
              <p className="text-[11px] font-semibold text-[#8a7047] mb-1.5">
                I agree to the Privacy Policy and consent to my details being
                processed for this enquiry:
              </p>
              <label className="inline-flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedPrivacy}
                  onChange={(e) => setAgreedPrivacy(e.target.checked)}
                  required
                  className="w-3.5 h-3.5 accent-[#1b5a66] cursor-pointer"
                />
                <span>
                  I agree to the{" "}
                  <Link
                    to="/privacy"
                    className="underline hover:text-[#8a7047]"
                  >
                    privacy policy
                  </Link>
                  .
                </span>
              </label>
            </div>

            {/* Select Industry (Required) */}
            <div className="pt-2">
              <p className="text-[11px] font-semibold text-[#8a7047] mb-2">
                Select Industry{" "}
                <span className="font-normal text-slate-500">(Required)</span>
              </p>

              <div className="space-y-2">
                {industriesList.map((industry) => (
                  <label
                    key={industry}
                    className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedIndustries.includes(industry)}
                      onChange={() => toggleIndustry(industry)}
                      className="w-3.5 h-3.5 accent-[#1b5a66] cursor-pointer"
                    />
                    <span>{industry}</span>
                  </label>
                ))}
              </div>

              {errorMsg && (
                <p className="text-xs text-red-600 mt-2">{errorMsg}</p>
              )}
            </div>

            {/* Centered Deep Teal SEND ENQUIRY Button */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="bg-[#1b5a66] hover:bg-[#13424b] text-white px-10 py-3 text-[11px] tracking-[0.2em] uppercase font-medium transition-colors cursor-pointer"
              >
                Send Enquiry
              </button>
            </div>
          </form>
        )}
      </section>
    </main>
  );
}
