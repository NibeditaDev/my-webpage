import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NewsArticle {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

interface NewsSectionProps {
  heading?: string;
}

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    date: "13.10.2026",
    title: "Aircraft Leasing Jobs: Our 2026 Market Update",
    excerpt:
      "Aircraft leasing is having one of its busiest years on record, and the competition for talent is as fierce as the competition for aircraft. Our 2026 market update covers...",
    image:
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80",
    slug: "/news-insights",
  },
  {
    id: 2,
    date: "01.10.2026",
    title:
      "Why Candidates Decline Job Offers and What Really Influences Their Decision",
    excerpt:
      "What really drives candidates to turn down a job offer? Our latest candidate survey explores how salary, flexibility, career progression, hiring experience and the...",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    slug: "/news-insights",
  },
  {
    id: 3,
    date: "31.08.2026",
    title:
      "Ireland's Financial Services Sector: What the 2030 Strategy Means for Hiring",
    excerpt:
      "Ireland's financial services sector is targeting 70,000 jobs by 2030. We explore what the new strategy could mean for hiring, specialist talent and career...",
    image:
      "https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&w=800&q=80",
    slug: "/news-insights",
  },
  {
    id: 4,
    date: "29.07.2026",
    title:
      "Moving Home: What Irish Finance Professionals Need to Know About Returning from Australia",
    excerpt:
      "Thinking about returning to Ireland after building your finance career in Australia? This guide explores everything you need to know, from salaries and hiring timelines to...",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
    slug: "/news-insights",
  },
  {
    id: 5,
    date: "14.06.2026",
    title:
      "Private Equity & Infrastructure Hiring Trends Across Dublin and London",
    excerpt:
      "Institutional capital inflows continue to reshape senior hiring across European private markets. Here is what fund managers are prioritising in 2026...",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    slug: "/news-insights",
  },
  {
    id: 6,
    date: "02.05.2026",
    title: "ESG & Sustainable Finance Roles: Top Skills Employers Seek in 2026",
    excerpt:
      "Regulatory reporting and green bond issuance have created strong demand for ESG specialists across asset management and banking...",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
    slug: "/news-insights",
  },
];

export default function NewsSection({
  heading = "News and Insights",
}: NewsSectionProps) {
  const [startIndex, setStartIndex] = useState(0);
  const total = newsArticles.length;

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const visibleArticles = [
    newsArticles[startIndex % total],
    newsArticles[(startIndex + 1) % total],
    newsArticles[(startIndex + 2) % total],
    newsArticles[(startIndex + 3) % total],
  ];

  return (
    <section
      className="relative bg-gradient-to-br from-[#1b5e6b] via-[#17535f] to-[#12434d] text-white pt-28 pb-28 -mt-6"
      style={{
        clipPath: "polygon(0 0, 100% 5%, 100% 100%, 0 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Dynamic Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-normal text-[#e5d5b5] mb-12">
          {heading}
        </h2>

        {/* 4-Column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleArticles.map((article) => (
            <article key={article.id} className="group flex flex-col">
              <Link
                to={article.slug}
                className="relative block aspect-square overflow-hidden bg-slate-800 mb-5"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 text-xs font-serif font-bold tracking-tighter text-[#e5d5b5]/85 bg-black/25 backdrop-blur-[2px] px-1.5 py-0.5 border border-[#e5d5b5]/40">
                  EP
                </span>
              </Link>

              <time className="text-xs text-white/80 tracking-wider mb-2">
                {article.date}
              </time>

              <h3 className="text-lg font-semibold leading-snug text-white group-hover:text-[#e5d5b5] transition-colors mb-3">
                <Link to={article.slug}>{article.title}</Link>
              </h3>

              <p className="text-xs sm:text-[13px] text-white/85 leading-relaxed mb-4">
                {article.excerpt}
              </p>

              <Link
                to={article.slug}
                className="mt-auto inline-block text-xs font-semibold text-white hover:text-[#e5d5b5] transition-colors"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>

        {/* Bottom Controls: "SEE ALL NEWS" Button on Left + Arrows on Right */}
        <div className="mt-14 flex items-center justify-between">
          <Link
            to="/news-insights"
            className="inline-block border border-white/50 text-white hover:bg-white hover:text-[#144752] transition-colors duration-300 px-10 py-3.5 text-xs tracking-[0.2em] uppercase font-medium"
          >
            See All News
          </Link>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous news"
              className="p-2 text-white/75 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next news"
              className="p-2 text-white/75 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
