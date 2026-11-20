import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import HeroBanner from "../Components/HeroBanner";

export interface JobItem {
  id: number;
  title: string;
  industry: string;
  jobType: string;
  location: string;
  summary: string;
  slug: string;
}

// Add as many more job objects here as you want!
const jobsData: JobItem[] = [
  {
    id: 1,
    title: "Vice President",
    industry: "Aircraft Leasing",
    jobType: "Full time",
    location: "New York",
    summary:
      "We are working with an established Leasing Platform who are hiring a Vice President to join its Investment team in New York. This is an excellent opportunity for an experienced aviation finance professional to take a leading role in the structuring, negotiation and execution of complex aircraft financing transactions. Key Responsibilities: Lead the structuring, negotiation and [...]",
    slug: "/jobs/vice-president-aircraft-leasing",
  },
  {
    id: 2,
    title: "FP&A Senior Associate",
    industry: "Financial Services",
    jobType: "Full time",
    location: "Dublin",
    summary:
      "We are seeking an FP&A Senior Associate to join a leading Irish financial services firm in Dublin. Reporting to the Associate Director, you'll be a strategic finance partner to the core business units. You'll provide commercial insight and decision support that directly shapes performance and growth. Responsibilities: Partnering with business unit managers to [...]",
    slug: "/jobs/fpa-senior-associate",
  },
  {
    id: 3,
    title: "Wealth Management Associate",
    industry: "Asset and Wealth Management",
    jobType: "Full time",
    location: "Dublin",
    summary:
      "We are currently working with a leading Private Client Advisory firm that are looking to hire a Wealth Management Associate to join their team. Responsibilities: Support the management and development of relationships with private clients including HNW individuals. Assist in delivering investment and financial planning solutions tailored to clients objectives and risk profiles. [...]",
    slug: "/jobs/wealth-management-associate",
  },
  {
    id: 4,
    title: "Investment Associate",
    industry: "Private Credit & Private Equity",
    jobType: "Full time",
    location: "Abu Dhabi",
    summary:
      "Elevate Partners is partnering with a prominent institutional investment platform in Abu Dhabi to appoint an Investment Associate across private credit and direct equity transactions. The role offers direct exposure to cross-border deal origination, financial modelling, due diligence and portfolio execution. [...]",
    slug: "/jobs/investment-associate-abu-dhabi",
  },
  {
    id: 5,
    title: "Investment Associate",
    industry: "Energy and Infrastructure",
    jobType: "Full time",
    location: "Dublin",
    summary:
      "Elevate Partners is supporting a confidential search for an Investment Associate to join a highly experienced infrastructure investment team. The successful candidate will work alongside experienced investment professionals across the assessment, execution and ongoing management of investments. The Role: Build and maintain financial models covering valuation, financing and investment returns. Analyse prospective investments and...",
    slug: "/jobs/investment-associate-dublin",
  },
  {
    id: 6,
    title: "Vice President",
    industry: "Energy and Infrastructure",
    jobType: "Full time",
    location: "Dublin",
    summary:
      "Elevate Partners is supporting a confidential search for a Vice President to join an infrastructure investment team. This opportunity is suited to an experienced investment professional seeking responsibility across transaction execution, investment decisions and portfolio management. The Role: Lead the assessment and execution of investment opportunities. Manage transactions from initial evaluation through due [...]",
    slug: "/jobs/vice-president-energy-infrastructure",
  },
  {
    id: 7,
    title: "Structured Finance Associate",
    industry: "Real Estate",
    jobType: "Full time",
    location: "Dublin",
    summary:
      "Elevate Partners is working with an international financial institution that is looking to hire an Analyst / Associate into its growing Asset-Backed Finance team. The role provides broad exposure to asset-backed lending, speciality finance and structured credit transactions and would suit someone looking to develop their career within a highly active, transaction-focused team. [...]",
    slug: "/jobs/structured-finance-associate",
  },
  {
    id: 8,
    title: "Corporate Banking Director",
    industry: "Banking",
    jobType: "Full time",
    location: "Dublin",
    summary:
      "We are partnering exclusively on a senior Infrastructure Finance appointment with a leading international financial institution that is expanding its Corporate & Investment Banking presence in Dublin, Ireland. This is a particularly interesting opportunity to join a newly established team at an early stage and play a key role in building out its European [...]",
    slug: "/jobs/corporate-banking-director",
  },
];

export default function Jobs() {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get("q") || "";

  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedJobType, setSelectedJobType] = useState("All Job Types");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");

  // Automatically build filter dropdown options from jobsData
  const locations = useMemo(
    () => [
      "All Locations",
      ...Array.from(new Set(jobsData.map((j) => j.location))),
    ],
    [],
  );
  const jobTypes = useMemo(
    () => [
      "All Job Types",
      ...Array.from(new Set(jobsData.map((j) => j.jobType))),
    ],
    [],
  );
  const industries = useMemo(
    () => [
      "All Industries",
      ...Array.from(new Set(jobsData.map((j) => j.industry))),
    ],
    [],
  );

  // Filter jobs based on selected dropdowns and optional menu search query
  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      const matchLocation =
        selectedLocation === "All Locations" ||
        job.location === selectedLocation;
      const matchJobType =
        selectedJobType === "All Job Types" || job.jobType === selectedJobType;
      const matchIndustry =
        selectedIndustry === "All Industries" ||
        job.industry === selectedIndustry;
      const matchQuery =
        !queryParam ||
        job.title.toLowerCase().includes(queryParam.toLowerCase()) ||
        job.industry.toLowerCase().includes(queryParam.toLowerCase()) ||
        job.location.toLowerCase().includes(queryParam.toLowerCase()) ||
        job.summary.toLowerCase().includes(queryParam.toLowerCase());

      return matchLocation && matchJobType && matchIndustry && matchQuery;
    });
  }, [selectedLocation, selectedJobType, selectedIndustry, queryParam]);

  return (
    <main className="bg-[#f4f2ee] min-h-screen">
      {/* ================= TOP CURVED MOUNTAIN BANNER ================= */}
      <HeroBanner overlayClass="bg-gradient-to-b from-[#0f172a]/45 via-transparent to-[#0f172a]/35" />

      {/* ================= CENTERED HEADING & 3 FILTER DROPDOWNS ================= */}
      <section className="max-w-4xl mx-auto px-8 md:px-12 pt-16 pb-10">
        <h1 className="text-center text-3xl sm:text-4xl md:text-[44px] text-[#8a7047] font-normal tracking-tight mb-12">
          Job Openings
        </h1>

        {/* 3 Filter Dropdowns: Location, Job Type, Industry */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-14">
          {/* Location */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="location-filter"
              className="text-sm font-medium text-[#8a7047] mb-2"
            >
              Location
            </label>
            <select
              id="location-filter"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded px-3.5 py-2 text-xs text-slate-600 focus:outline-none focus:border-[#8a7047]"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Job Type */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="jobtype-filter"
              className="text-sm font-medium text-[#8a7047] mb-2"
            >
              Job Type
            </label>
            <select
              id="jobtype-filter"
              value={selectedJobType}
              onChange={(e) => setSelectedJobType(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded px-3.5 py-2 text-xs text-slate-600 focus:outline-none focus:border-[#8a7047]"
            >
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Industry */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="industry-filter"
              className="text-sm font-medium text-[#8a7047] mb-2"
            >
              Industry
            </label>
            <select
              id="industry-filter"
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded px-3.5 py-2 text-xs text-slate-600 focus:outline-none focus:border-[#8a7047]"
            >
              {industries.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ================= JOB LISTINGS STACK ================= */}
        {filteredJobs.length === 0 ? (
          <div className="text-center py-12 text-slate-600 text-sm">
            No matching job openings found. Try resetting your filters.
          </div>
        ) : (
          <div className="space-y-12 pb-20">
            {filteredJobs.map((job) => (
              <article key={job.id} className="group">
                {/* Golden-Bronze Job Title */}
                <h2 className="text-lg sm:text-[19px] font-medium text-[#8a7047] group-hover:text-[#141d2e] transition-colors">
                  <Link to={job.slug}>{job.title}</Link>
                </h2>

                {/* Metadata Line: Industry | Job Type | Location */}
                <div className="flex flex-wrap items-center gap-4 text-[11px] font-semibold text-slate-700 mt-1 mb-3">
                  <span>{job.industry}</span>
                  <span>{job.jobType}</span>
                  <span>{job.location}</span>
                </div>

                {/* Job Description Snippet */}
                <p className="text-xs sm:text-[13.5px] text-[#4a5568] leading-[1.75] mb-3">
                  {job.summary}
                </p>

                {/* Read More Link */}
                <Link
                  to={job.slug}
                  className="inline-block text-xs font-semibold text-[#1e40af] hover:text-[#8a7047] transition-colors"
                >
                  Read More
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
