import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import HeroBanner from "../Components/HeroBanner";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    query: "",
  });
  const [agreedPrivacy, setAgreedPrivacy] = useState(false);
  const [notRobot, setNotRobot] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#f4f2ee] min-h-screen">
      {/* ================= TOP CURVED MOUNTAIN BANNER WITH CONTACT DETAILS ================= */}
      <HeroBanner
        heightClass="min-h-[78vh]"
        clipPath="polygon(0 0, 100% 0, 100% 90%, 0 100%)"
        overlayClass="bg-gradient-to-b from-[#0f172a]/55 via-[#0f172a]/35 to-[#0f172a]/50"
        containerClass="relative w-full overflow-hidden rounded-bl-[75px] flex items-center py-28"
      >
        <div className="relative z-10 max-w-5xl mx-auto w-full px-8 md:px-16 text-white">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="text-xs sm:text-[13px] font-medium text-white/95 mb-4"
          >
            <Link to="/" className="hover:text-[#e5d5b5] transition-colors">
              Home
            </Link>
            <span className="mx-1.5">&gt;</span>
            <span>Contact Us</span>
          </nav>

          {/* Main Hero Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight mb-12">
            Get in touch
          </h1>

          {/* Centered Contact Info & Office Locations Grid */}
          <div className="max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 text-xs sm:text-[13px]">
            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-[#e5d5b5] stroke-[1.5] shrink-0" />
              <a
                href="mailto:info@elevatepartners.ie"
                className="font-medium hover:text-[#e5d5b5] transition-colors"
              >
                info@elevatepartners.ie
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-[#e5d5b5] stroke-[1.5] shrink-0" />
              <a
                href="tel:+35316916022"
                className="font-medium hover:text-[#e5d5b5] transition-colors"
              >
                +353 1 691 6022
              </a>
            </div>

            {/* Dublin Office */}
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-[#e5d5b5] stroke-[1.5] shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <h2 className="font-semibold uppercase tracking-wider">
                  Dublin
                </h2>
                <p>29/30 Fitzwilliam</p>
                <p>Square South</p>
                <p>Dublin 2, D02 RF20</p>
                <p>Ireland</p>
                <a
                  href="https://maps.google.com/?q=29/30+Fitzwilliam+Square+South,+Dublin+2,+D02+RF20,+Ireland"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-2 font-medium text-white hover:text-[#e5d5b5] underline underline-offset-4 transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* London Office */}
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-[#e5d5b5] stroke-[1.5] shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <h2 className="font-semibold uppercase tracking-wider">
                  London
                </h2>
                <p>12 Hay Hill, Mayfair</p>
                <p>London, W1J 8NR</p>
                <p>England</p>
                <a
                  href="https://maps.google.com/?q=12+Hay+Hill,+Mayfair,+London,+W1J+8NR,+England"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-2 font-medium text-white hover:text-[#e5d5b5] underline underline-offset-4 transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </HeroBanner>

      {/* ================= CENTERED CONTACT FORM ================= */}
      <section className="max-w-2xl mx-auto px-8 md:px-12 pt-16 pb-24">
        <h2 className="text-center text-3xl sm:text-4xl text-[#8a7047] font-normal tracking-tight mb-12">
          Contact Us
        </h2>

        {submitted ? (
          <div className="bg-white border border-[#8a7047]/40 p-8 text-center shadow-sm">
            <h3 className="text-xl text-[#8a7047] font-medium mb-2">
              Enquiry Sent Successfully
            </h3>
            <p className="text-xs sm:text-sm text-[#4a5568] mb-6">
              Thank you for getting in touch
              {formData.firstName ? `, ${formData.firstName}` : ""}. One of our
              consultants will respond shortly.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  firstName: "",
                  lastName: "",
                  email: "",
                  mobile: "",
                  query: "",
                });
                setNotRobot(false);
              }}
              className="bg-[#1b5a66] hover:bg-[#141d2e] text-white px-8 py-3 text-xs tracking-[0.2em] uppercase transition-colors cursor-pointer"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1: First Name / Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full bg-[#e9e6e0] px-3.5 py-2.5 text-xs text-slate-800 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-[#8a7047]"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full bg-[#e9e6e0] px-3.5 py-2.5 text-xs text-slate-800 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-[#8a7047]"
              />
            </div>

            {/* Row 2: Email / Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#e9e6e0] px-3.5 py-2.5 text-xs text-slate-800 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-[#8a7047]"
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full bg-[#e9e6e0] px-3.5 py-2.5 text-xs text-slate-800 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-[#8a7047]"
              />
            </div>

            {/* reCAPTCHA Widget Box */}
            <div className="pt-1">
              <p className="text-[11px] font-semibold text-[#8a7047] mb-1.5">
                reCAPTCHA
              </p>
              <label className="inline-flex items-center justify-between w-64 bg-[#f9f9f9] border border-slate-300 rounded-sm px-3.5 py-3 shadow-xs cursor-pointer">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={notRobot}
                    onChange={(e) => setNotRobot(e.target.checked)}
                    required
                    className="w-4 h-4 accent-[#1b5a66] cursor-pointer"
                  />
                  <span className="text-xs text-slate-700">
                    I'm not a robot
                  </span>
                </div>
                <span className="text-[9px] text-slate-400 leading-tight text-right">
                  reCAPTCHA
                  <br />
                  Privacy - Terms
                </span>
              </label>
            </div>

            {/* Privacy Policy Checkbox */}
            <div className="pt-1">
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

            {/* Type Query Here Textarea */}
            <div className="pt-1">
              <textarea
                name="query"
                rows={7}
                placeholder="Type Query Here"
                value={formData.query}
                onChange={handleChange}
                required
                className="w-full bg-[#e9e6e0] px-3.5 py-3 text-xs text-slate-800 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-[#8a7047]"
              />
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
