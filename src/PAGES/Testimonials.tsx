import HeroBanner from "../Components/HeroBanner";

export default function Testimonials() {
  return (
    <main className="bg-[#f4f2ee] min-h-screen">
      {/* ================= TOP CURVED MOUNTAIN BANNER ================= */}
      <HeroBanner overlayClass="bg-gradient-to-b from-[#0f172a]/45 via-transparent to-[#0f172a]/35" />

      {/* ================= PAGE INTRO: TESTIMONIALS ================= */}
      <section className="max-w-5xl mx-auto px-8 md:px-14 pt-16 pb-32">
        <h1 className="text-3xl sm:text-4xl md:text-[42px] text-[#8a7047] font-normal tracking-tight mb-6">
          Testimonials
        </h1>

        <p className="text-[#4a5568] text-sm sm:text-[15px] leading-[1.85] max-w-xl">
          At Elevate Partners, we take immense pride in the trust and
          satisfaction of our clients and candidates. As a partner-driven
          specialist recruitment firm providing human capital consultancy to a
          global client base, our success is built on the relationships we
          foster and the results we deliver. On this page, you'll find
          testimonials from those who have experienced firsthand the value of
          our expertise, dedication, and collaborative approach. These stories
          are a testament to our commitment to elevating careers, businesses,
          and partnerships.
        </p>
      </section>
    </main>
  );
}
