import { Link } from "react-router-dom";

interface SubPageProps {
  title: string;
  subtitle: string;
}

export default function SubPage({ title, subtitle }: SubPageProps) {
  return (
    <main className="min-h-screen bg-[#f4f2ee]">
      {/* Dark Navy Top Banner so Navbar stays clearly visible */}
      <section className="bg-[#141d2e] text-white pt-36 pb-20 px-8 md:px-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.22em] uppercase text-[#e5d5b5] mb-3">
            Elevate Partners
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight">
            {title}
          </h1>
          <p className="mt-4 text-white/80 text-base sm:text-lg max-w-2xl">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-6xl mx-auto px-8 md:px-20 py-20">
        <p className="text-[#4a5568] text-base leading-relaxed max-w-2xl mb-8">
          This is the dedicated <strong>{title}</strong> page. Share screenshots
          of this page whenever you are ready to customize its sections.
        </p>

        <Link
          to="/"
          className="inline-block border border-[#8a7047]/60 text-[#2d3748] hover:bg-[#141d2e] hover:text-white transition-colors duration-300 px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}
