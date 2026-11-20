import { useState } from "react";
import HeroBanner from "../Components/HeroBanner";

const countries = [
  "Ireland",
  "United Kingdom",
  "United States",
  "Australia",
  "Canada",
  "France",
  "Germany",
  "India",
  "Netherlands",
  "Spain",
  "United Arab Emirates",
  "Other",
];

export default function JoinOurTeam() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    streetAddress: "",
    addressLine2: "",
    city: "",
    county: "",
    postalCode: "",
    country: "",
    notes: "",
  });
  const [fileName, setFileName] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#f4f2ee] min-h-screen">
      {/* ================= TOP CURVED MOUNTAIN BANNER ================= */}
      <HeroBanner overlayClass="bg-gradient-to-b from-[#0f172a]/45 via-transparent to-[#0f172a]/35" />

      {/* ================= INTRO TEXT & APPLICATION FORM ================= */}
      <section className="max-w-3xl mx-auto px-8 md:px-12 pt-16 pb-24">
        <h1 className="text-3xl sm:text-4xl md:text-[40px] text-[#8a7047] font-normal tracking-tight mb-7">
          Join Our Team at Elevate Partners
        </h1>

        {/* 5 Introductory Paragraphs */}
        <div className="space-y-4 text-[#4a5568] text-xs sm:text-[13.5px] leading-[1.8] mb-12">
          <p>
            At Elevate Partners, we are always keen to connect with talented
            individuals passionate about recruitment, whether you're an
            experienced professional looking for your next opportunity or
            someone eager to launch a rewarding career in this dynamic industry.
          </p>
          <p>
            We specialise in executive search, recruitment, and talent solutions
            across a diverse range of sectors, including financial services,
            compliance, risk, and beyond, with plans to expand into new and
            exciting industries. Our work focuses on building lasting
            relationships with clients and candidates alike, helping them
            achieve their ambitions through expert advice and unmatched industry
            insight.
          </p>
          <p>
            When you join Elevate Partners, you're not just joining a company —
            you're becoming part of a team that values collaboration,
            excellence, and innovation. We pride ourselves on fostering a
            positive office culture that emphasises great work-life balance and
            mutual support.
          </p>
          <p>
            We are committed to your continued growth and success, offering
            tailored training and development programs to help you excel,
            whether you're just starting your recruitment career or sharpening
            your expertise as a seasoned recruiter.
          </p>
          <p>
            If you are looking for a progressive and rewarding environment to
            advance your career, we invite you to explore opportunities with us.
          </p>
        </div>

        {/* ================= APPLICATION FORM ================= */}
        {submitted ? (
          <div className="bg-white border border-[#8a7047]/40 p-8 text-center shadow-sm">
            <h2 className="text-xl text-[#8a7047] font-medium mb-2">
              Thank You for Your Application
            </h2>
            <p className="text-xs sm:text-sm text-[#4a5568] mb-6">
              We have received your details{fileName ? ` (${fileName})` : ""}{" "}
              and a member of our leadership team will review your profile
              shortly.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="bg-[#184854] hover:bg-[#141d2e] text-white px-8 py-3 text-xs tracking-[0.2em] uppercase transition-colors cursor-pointer"
            >
              Submit Another Application
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

            {/* Row 2: Phone / Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold text-[#8a7047] mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#e6e3dd] px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#8a7047]"
                />
              </div>
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
            </div>

            {/* Row 3: Street Address */}
            <div>
              <label className="block text-[11px] font-semibold text-[#8a7047] mb-1">
                Street Address
              </label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className="w-full bg-[#e6e3dd] px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#8a7047]"
              />
            </div>

            {/* Row 4: Address Line 2 */}
            <div>
              <label className="block text-[11px] font-semibold text-[#8a7047] mb-1">
                Address Line 2
              </label>
              <input
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
                className="w-full bg-[#e6e3dd] px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#8a7047]"
              />
            </div>

            {/* Row 5: City / County */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold text-[#8a7047] mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-[#e6e3dd] px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#8a7047]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#8a7047] mb-1">
                  County
                </label>
                <input
                  type="text"
                  name="county"
                  value={formData.county}
                  onChange={handleChange}
                  className="w-full bg-[#e6e3dd] px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#8a7047]"
                />
              </div>
            </div>

            {/* Row 6: Eircode / Postal Code & Country */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold text-[#8a7047] mb-1">
                  Eircode / Postal Code
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="w-full bg-[#e6e3dd] px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#8a7047]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#8a7047] mb-1">
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full bg-[#e6e3dd] px-3 py-2 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#8a7047]"
                >
                  <option value="">Select Country</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 7: Notes Textarea */}
            <div>
              <label className="block text-[11px] font-semibold text-[#8a7047] mb-1">
                Notes
              </label>
              <textarea
                name="notes"
                rows={6}
                value={formData.notes}
                onChange={handleChange}
                className="w-full bg-[#e6e3dd] px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#8a7047]"
              />
            </div>

            {/* Row 8: Required File Upload */}
            <div className="pt-1">
              <label className="block text-[11px] font-semibold text-[#8a7047] mb-1.5">
                File{" "}
                <span className="font-normal text-slate-500">(Required)</span>
              </label>
              <input
                type="file"
                required
                onChange={handleFileChange}
                className="block text-xs text-slate-700 file:mr-2 file:py-1 file:px-2.5 file:border file:border-slate-400 file:rounded-sm file:text-xs file:bg-white file:text-slate-700 hover:file:bg-slate-100 cursor-pointer"
              />
              <p className="text-[10px] text-slate-500 mt-1">
                Max. file size: 50 MB.
              </p>
            </div>

            {/* Centered Deep Teal SUBMIT Button */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="bg-[#1b5a66] hover:bg-[#13424b] text-white px-11 py-3 text-[11px] tracking-[0.2em] uppercase font-medium transition-colors cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </section>
    </main>
  );
}
