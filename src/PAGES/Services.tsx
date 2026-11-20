import { Link } from "react-router-dom";
import HeroBanner from "../Components/HeroBanner";

const meetingBg =
  "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=2000&q=80";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  buttonTo: string;
  image: string;
  imagePosition: "left" | "right";
}

const servicesList: ServiceItem[] = [
  {
    id: 1,
    title: "Permanent Recruitment",
    description:
      "We specialise in sourcing high calibre professionals for permanent roles across the financial services industry. Our expert consultants leverage their deep market knowledge and extensive networks to identify and attract top talent, ensuring a seamless match between candidates and clients. Our process involves an in depth understanding of client needs, targeted sourcing strategies, and comprehensive candidate assessments to ensure long-term success and cultural fit. We support clients in areas such as investment banking, asset and wealth management, risk and compliance, and accounting and finance.",
    buttonText: "Submit A Vacancy",
    buttonTo: "/contact",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    imagePosition: "left",
  },
  {
    id: 2,
    title: "Retained & Executive Search",
    description:
      "Our retained and executive search services are designed to identify and secure senior-level leadership talent for financial services organisations. We employ a rigorous search methodology, leveraging market intelligence, targeted headhunting, and a discreet approach to engage with the best candidates in the market. Our process includes detailed role scoping, stakeholder consultations, market mapping, and thorough competency based interviews to ensure we deliver candidates who align with the strategic goals of our clients. Whether hiring C-suite executives or specialised leadership roles, our focus is on delivering exceptional talent that drives business success.",
    buttonText: "Connect With The Team",
    buttonTo: "/team",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    imagePosition: "right",
  },
  {
    id: 3,
    title: "Temporary Solutions",
    description:
      "We provide flexible temporary and contract recruitment solutions to meet the evolving demands of the financial services industry. Whether covering short-term projects, maternity leave, or peak workload periods, our extensive talent pool allows us to deliver highly skilled professionals who can hit the ground running and add immediate value. Our dedicated contract recruitment team ensures a fast turnaround, compliance with regulatory requirements, and ongoing support throughout the contract duration, giving our clients peace of mind while maintaining workforce flexibility.",
    buttonText: "Temporary Solutions",
    buttonTo: "/temporary-solutions",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    imagePosition: "left",
  },
  {
    id: 4,
    title: "Talent Mapping",
    description:
      "Our talent mapping service provides businesses with critical insights into the talent landscape within their sector. Through detailed market analysis, competitor benchmarking, and strategic workforce planning, we help clients identify future talent pipelines and make informed hiring decisions. This proactive approach allows organisations to stay ahead of talent shortages, identify skill gaps, and build relationships with potential candidates before hiring needs arise. Talent mapping also supports diversity and inclusion initiatives by providing data driven insights to attract a diverse talent pool.",
    buttonText: "Enquiries",
    buttonTo: "/contact",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    imagePosition: "right",
  },
  {
    id: 5,
    title: "Psychometric Testing",
    description:
      "We offer psychometric testing solutions to support our clients in making data-driven hiring decisions. Our scientifically validated assessments measure candidates' cognitive abilities, personality traits, and job related competencies, helping organisations build high-performing teams with confidence. These tests provide valuable insights into a candidate's problem solving abilities, leadership potential, cultural fit, and work style, aiding hiring managers in making more objective and informed decisions. We work closely with clients to select the most relevant assessments tailored to their specific hiring requirements.",
    buttonText: "Contact Us",
    buttonTo: "/contact",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    imagePosition: "left",
  },
  {
    id: 6,
    title: "CV Workshops",
    description:
      "Our CV workshops provide candidates with expert guidance on crafting impactful resumes that effectively highlight their skills and experience. We offer practical advice on structure, content, and personal branding to help candidates stand out in a competitive job market. Our workshops cover areas such as tailoring resumes for specific roles, optimising keyword usage for applicant tracking systems, and developing compelling personal statements that capture the attention of hiring managers.",
    buttonText: "Connect With The Team",
    buttonTo: "/team",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
    imagePosition: "right",
  },
  {
    id: 7,
    title: "Career Guidance",
    description:
      "We are committed to supporting professionals at every stage of their career journey. Our career guidance services include personalised coaching, interview preparation, and strategic career planning to help individuals achieve their professional goals within the financial services sector. Whether candidates are looking to transition into a new role, navigate career challenges, or explore new opportunities, our experienced consultants provide tailored support and actionable insights to empower their career growth.",
    buttonText: "Enquire Now",
    buttonTo: "/contact",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    imagePosition: "left",
  },
  {
    id: 8,
    title: "Salary Survey",
    description:
      "At Elevate Partners, we publish a free annual salary survey in Ireland, providing up-to-date insights into salary trends across the industries we specialise in. Whether you're looking to understand the average salary in Ireland, benchmark your current pay, or plan your next career move, our salary survey offers valuable market insights to help you make informed decisions.",
    buttonText: "Get Your Copy",
    buttonTo: "/salary-insights",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    imagePosition: "right",
  },
];

export default function Services() {
  return (
    <main className="bg-[#f4f2ee] min-h-screen">
      {/* ================= TOP CURVED MOUNTAIN BANNER ================= */}
      <HeroBanner overlayClass="bg-gradient-to-b from-[#0f172a]/45 via-transparent to-[#0f172a]/35" />

      {/* ================= PAGE INTRO: OUR SERVICES ================= */}
      <section className="max-w-5xl mx-auto px-8 md:px-14 pt-16 pb-12">
        <h1 className="text-3xl sm:text-4xl md:text-[42px] text-[#8a7047] font-normal tracking-tight mb-6">
          Our Services
        </h1>

        <div className="space-y-5 text-[#4a5568] text-sm sm:text-[15px] leading-[1.85] max-w-3xl">
          <p>
            At Elevate Partners, we provide a comprehensive suite of recruitment
            and talent solutions specifically tailored to the financial services
            sector. With a focus on building long-term partnerships, we pride
            ourselves on delivering a high-touch, consultative approach that
            goes beyond traditional recruitment. Our team combines deep industry
            expertise with an unwavering commitment to understanding the unique
            challenges and opportunities faced by our clients and candidates.
          </p>
          <p>
            Whether it's sourcing top-tier talent for senior leadership roles or
            supporting businesses in navigating complex market dynamics, we
            bring insight, innovation, and precision to every engagement. We
            don't just fill roles; we build careers and drive organisational
            success. By leveraging our extensive network, advanced tools, and
            years of experience, we ensure exceptional outcomes, consistently
            matching the right talent to the right opportunity.
          </p>
        </div>
      </section>

      {/* ================= 8 ALTERNATING SERVICE BLOCKS ================= */}
      <section className="max-w-5xl mx-auto px-8 md:px-14 py-12 pb-28 space-y-24 md:space-y-28">
        {servicesList.map((service) => {
          const isImageLeft = service.imagePosition === "left";

          return (
            <div
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
            >
              {/* Image Column */}
              <div
                className={`lg:col-span-6 ${
                  isImageLeft ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div
                  className={`overflow-hidden shadow-md bg-slate-200 group ${
                    isImageLeft ? "rounded-tr-[75px]" : "rounded-tl-[75px]"
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[340px] sm:h-[400px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Text + Button Column */}
              <div
                className={`lg:col-span-6 ${
                  isImageLeft ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <h2 className="text-2xl sm:text-3xl md:text-[34px] text-[#8a7047] font-normal leading-[1.2] mb-5">
                  {service.title}
                </h2>

                <p className="text-[#4a5568] text-xs sm:text-[14px] leading-[1.85] font-normal">
                  {service.description}
                </p>

                <div className="mt-8">
                  <Link
                    to={service.buttonTo}
                    className="inline-block border border-[#8a7047]/60 text-[#2d3748] hover:bg-[#141d2e] hover:text-white hover:border-[#141d2e] transition-colors duration-300 px-9 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium"
                  >
                    {service.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ================= BOTTOM CALL-TO-ACTION BANNER ================= */}
      <section className="relative w-full py-28 md:py-36 overflow-hidden flex items-center">
        {/* Background Office Meeting Image */}
        <img
          src={meetingBg}
          alt="Corporate glass-walled meeting room"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Teal-Blue Atmospheric Tint Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#184854]/80 via-[#1d5866]/65 to-[#163d47]/75" />

        {/* Overlay Content */}
        <div className="relative z-10 max-w-6xl mx-auto w-full px-8 md:px-20">
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-[1.12] max-w-xl">
            Reaching New <br />
            Heights
          </h2>

          <p className="mt-5 text-white/95 text-base sm:text-lg font-normal">
            Connect with our industry experts.
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
