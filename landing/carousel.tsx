"use client";
import { useRef } from "react";

type Slide = {
  title: string;
  body: string[];
  img: string | string[];
};

const slides: Slide[] = [
  {
    title: "Bespoke privacy frameworks, custom tailored to your organisation’s unique context.",
    body: [
      "Map the privacy regulations that apply to you into a detailed, legally referenced, fully interactive privacy framework, tailored to your organisation.",
      "Forget crosswalks, benchmarks, best practices and shots in the dark. Say goodbye to annual maturity assessments, law trackers, endless spreadsheets and jurisdictional complexity.",
      "Everything your global privacy programme needs, in every jurisdiction applicable to you, customisable and constantly updated.",
    ],
    img: [
      "/images/dashboard.png",
      "/images/Screenshot 2026-02-09 at 11.48.21.png",
      "/images/Screenshot 2026-02-09 at 12.32.37.png",
    ],
  },
  // Placeholder slides 2 and 3; we will replace copy/images next.
  { title: "Second slide headline", body: ["Short supporting copy."], img: "/images/landing-bg.svg" },
  { title: "Third slide headline", body: ["Short supporting copy."], img: "/images/landing-bg.svg" },
];

import { useEffect, useState } from "react";

function RotatingImage({ images, intervalMs = 10000, alt, priority = false }: { images: string[]; intervalMs?: number; alt: string; priority?: boolean }) {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);

  // Preload all images to avoid flashes during rotation
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true);
      const timeout = window.setTimeout(() => {
        setIdx((i) => (i + 1) % images.length);
        setFading(false);
      }, 300);
      return () => window.clearTimeout(timeout);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);
  return (
    <img
      src={images[idx]}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? ("high" as any) : ("auto" as any)}
      className={
        "w-[clamp(280px,90vw,960px)] h-auto rounded-xl border border-white/50 shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-opacity duration-600 ease-in-out " +
        (fading ? "opacity-0" : "opacity-100")
      }
    />
  );
}

export default function Carousel() {
  const scroller = useRef<HTMLDivElement>(null);
  return (
    <section aria-label="Highlights" className="w-full">
      <div
        ref={scroller}
        className="w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory hide-scrollbar py-1"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <div className="flex w-full">
          {slides.map((s, i) => (
            <article
              key={i}
              className="snap-start shrink-0 w-full min-h-[56vh] lg:min-h-[60vh] grid grid-cols-1 grid-rows-[auto,1fr] lg:grid-cols-2 lg:grid-rows-[auto,1fr] gap-y-2 lg:gap-y-3"
            >
              {/* Subheader spans full width */}
              <div className="px-6 lg:px-12 pt-1 pb-2 col-span-1 lg:col-span-2">
                {i === 0 ? (
                  <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                    <span className="text-brandBlue">Bespoke</span> privacy frameworks, <span className="text-brandBlue">custom tailored</span> to your organisation’s <span className="text-brandBlue">unique context</span>.
                  </h2>
                ) : (
                  <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">{s.title}</h2>
                )}
              </div>
              {/* Content row: equal-height columns; content vertically centers on lg+ */}
              <div className="col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 items-stretch px-6 lg:px-12 gap-6 lg:gap-8">
                <div className="flex items-start lg:items-center justify-start self-start lg:self-stretch h-full">
                  {Array.isArray(s.img) ? (
                    <RotatingImage images={s.img} alt="Product screenshot" intervalMs={10000} priority={i === 0} />
                  ) : (
                    <img
                      src={s.img}
                      alt="Product screenshot"
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                      fetchPriority={i === 0 ? ("high" as any) : ("auto" as any)}
                      className="w-[clamp(280px,90vw,960px)] h-auto rounded-xl border border-white/50 shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
                    />
                  )}
                </div>
                <div className="flex items-start lg:items-center justify-start self-start lg:self-stretch h-full">
                  <div className="max-w-2xl text-gray-900">
                    <ul role="list" className="list-none pl-0 text-gray-800 text-lg sm:text-xl leading-relaxed space-y-5">
                      {s.body.map((p, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <img src="/images/map-arrow-right-svgrepo-com.svg" alt="" className="w-5 h-5 mt-1 shrink-0 opacity-80" />
                          <div
                            dangerouslySetInnerHTML={{
                              __html: p
                                .replace("legally referenced, fully interactive privacy framework", "legally referenced, fully interactive privacy framework")
                                .replace("fully interactive privacy framework", "<strong>fully interactive privacy framework</strong>")
                                .replace("Everything your global privacy programme needs", "<strong>Everything your global privacy programme needs</strong>")
                                .replace("Forget", "<strong>Forget</strong>")
                                .replace("Say goodbye", "<strong>Say goodbye</strong>")
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
