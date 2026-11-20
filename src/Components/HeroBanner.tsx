import type { ReactNode } from "react";

// <--- CHANGE THIS ONE LINE TO UPDATE THE TOP MOUNTAIN BANNER ON EVERY PAGE --->
const mountainBg =
  "https://elevatepartners.ie/wp-content/uploads/2024/09/background1.jpg";

interface HeroBannerProps {
  children?: ReactNode;
  heightClass?: string;
  clipPath?: string;
  overlayClass?: string;
  containerClass?: string;
}

export default function HeroBanner({
  children,
  heightClass = "h-[68vh] sm:h-[75vh]",
  clipPath = "polygon(0 0, 100% 0, 100% 89%, 0 100%)",
  overlayClass = "bg-gradient-to-b from-[#0f172a]/50 via-[#0f172a]/20 to-[#0f172a]/35",
  containerClass = "relative w-full overflow-hidden rounded-bl-[75px]",
}: HeroBannerProps) {
  return (
    <section
      className={`${containerClass} ${heightClass}`}
      style={{ clipPath }}
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <img
          src={mountainBg}
          alt="Mountain peaks above clouds"
          className="w-full h-full object-cover animate-slow-zoom-out"
        />
        <div className={`absolute inset-0 ${overlayClass}`} />
      </div>

      {children}
    </section>
  );
}
