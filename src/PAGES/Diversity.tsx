import { Link } from "react-router-dom";
import HeroBanner from "../Components/HeroBanner";
import NewsSection from "../Components/NewsSection";

const meetingBg =
  "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=2000&q=80";

const commitmentPoints = [
  "Gender",
  "Civil status",
  "Family status",
  "Sexual orientation",
  "Age",
  "Disability",
  "Race, ethnicity, or nationality",
  "Religious beliefs",
  "Membership of the Traveller community",
];

export default function Diversity() {
  return (
    <main className="bg-[#f4f2ee] min-h-screen">
      {/* ================= TOP CURVED MOUNTAIN BANNER ================= */}
      <HeroBanner overlayClass="bg-gradient-to-b from-[#0f172a]/45 via-transparent to-[#0f172a]/35" />

      {/* ================= POLICY CONTENT SECTIONS ================= */}
      <section className="max-w-4xl mx-auto px-8 md:px-14 pt-16 pb-28 text-[#4a5568] text-xs sm:text-[13.5px] leading-[1.85]">
        {/* Main Heading & Intro */}
        <h1 className="text-3xl sm:text-4xl md:text-[42px] text-[#8a7047] font-normal tracking-tight mb-6">
          Equal Opportunity and Diversity
        </h1>

        <p className="mb-8">
          At Elevate Partners we are committed to creating an inclusive and
          respectful environment where everyone is treated fairly and has equal
          opportunities to succeed. We believe that diverse perspectives
          strengthen our business, encourage innovation, and help us build
          better relationships with our employees, candidates, clients, and the
          wider communities we serve. Our approach to diversity, equity and
          inclusion is guided by relevant Irish and EU equality and
          anti-discrimination legislation, including the Employment Equality
          Acts 1998–2011.
        </p>

        {/* Our Commitment */}
        <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-3">
          Our Commitment
        </h2>
        <p className="mb-4">
          We are committed to providing equal opportunities and fostering an
          environment free from discrimination, harassment and victimisation. We
          treat everyone with dignity and respect, regardless of:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 mb-8">
          {commitmentPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        {/* Our Approach */}
        <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-3">
          Our Approach
        </h2>
        <div className="space-y-4 mb-10">
          <p>
            <strong className="font-semibold text-slate-800">
              Promoting Diversity:
            </strong>{" "}
            We aim to attract, retain and develop a diverse workforce that
            reflects the communities and industries we serve.
          </p>
          <p>
            <strong className="font-semibold text-slate-800">
              Ensuring Equity:
            </strong>{" "}
            Decisions relating to recruitment, development, progression and
            employment are based on merit, skills, experience and relevant
            qualifications.
          </p>
          <p>
            <strong className="font-semibold text-slate-800">
              Fostering Inclusion:
            </strong>{" "}
            We strive to create an environment where everyone feels valued,
            respected and supported to contribute fully.
          </p>
        </div>

        {/* Equal Opportunities in Practice */}
        <h2 className="text-2xl sm:text-[26px] text-[#8a7047] font-normal mb-5">
          Equal Opportunities in Practice
        </h2>

        <div className="space-y-6 mb-10">
          <div>
            <h3 className="text-sm font-semibold text-slate-800 mb-2">
              Recruitment and Selection:
            </h3>
            <p>
              Our processes are designed to ensure equal access and opportunity
              for all candidates. We are committed to providing reasonable
              accommodations for individuals with disabilities where required to
              support their participation in the recruitment process.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-800 mb-2">
              Training and Development:
            </h3>
            <p>
              Opportunities for professional growth are based on individual
              needs and job requirements, ensuring fair access to learning and
              development opportunities.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-800 mb-2">
              Promotion and Career Progression:
            </h3>
            <p>
              We are committed to fairness and transparency in career
              progression and promotion decisions, with individuals assessed
              based on their skills, experience and ability to meet the
              requirements of the role.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-800 mb-2">
              Our Workplace
            </h3>
            <p>
              We are committed to fairness and transparency in career
              progression and promotion decisions, with individuals assessed
              based on their skills, experience and ability to meet the
              requirements of the role.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-800 mb-2">
              Reasonable Accommodation
            </h3>
            <p>
              We are committed to providing reasonable accommodations for
              employees and applicants with disabilities to support their
              participation in the recruitment process, workplace and relevant
              training, in line with applicable legislation.
            </p>
          </div>
        </div>

        {/* Addressing a Concern */}
        <h2 className="text-2xl sm:text-[26px] text-[#8a7047] font-normal mb-4">
          Addressing a Concern
        </h2>
        <p className="mb-10">
          Employees who experience or witness discrimination, harassment, or
          victimisation are encouraged to report incidents through our grievance
          procedure or harassment and bullying policies. Complaints will be
          handled confidentially, promptly, and fairly. Employees who raise
          concerns in good faith are protected from retaliation, while any false
          allegations made in bad faith will be addressed through our
          disciplinary process.
        </p>

        {/* Our Ongoing Commitment */}
        <h2 className="text-2xl sm:text-[26px] text-[#8a7047] font-normal mb-4">
          Our Ongoing Commitment
        </h2>
        <div className="space-y-4">
          <p>
            We regularly review our DE&amp;I policies and practices to ensure
            they remain aligned with evolving legal requirements and industry
            best practices.
          </p>
          <p>
            Our leadership team is responsible for implementing and upholding
            this policy, supported by employees at all levels. Together, we will
            cultivate a workplace that celebrates diversity, champions equity,
            and thrives on inclusion.
          </p>
        </div>
      </section>

      {/* ================= REUSED NEWS CAROUSEL ("Insights, News and Views") ================= */}
      <NewsSection heading="Insights, News and Views" />

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
