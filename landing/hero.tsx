"use client";
import { useEffect, useState } from "react";

const Hero = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const suffixes = ["framed", "imagined", "defined"] as const;
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timers: number[] = [];
    timers.push(window.setTimeout(() => setIdx(1), 3800));
    timers.push(window.setTimeout(() => setIdx(2), 7600));
    timers.push(window.setTimeout(() => setIdx(0), 11400));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      aria-labelledby="hero-heading"
      className="w-full flex flex-col gap-4 items-start px-6 lg:px-12 pt-12 lg:pt-20"
    >
      <h1 id="hero-heading" className="text-gray-900 font-semibold text-5xl sm:text-6xl tracking-wide leading-tight">
        <span className="inline-flex items-center gap-2">
          <span className="text-brandBlue">Privacy,</span>
          <span className="inline-flex items-baseline">
            <span className="text-brandOrange">Re</span>
            <span className="relative" style={{ minWidth: "8ch", height: "1em" }}>
              <span key={idx} className="inline-block word-fade text-brandOrange">
                {suffixes[idx]}
              </span>
            </span>
          </span>
        </span>
      </h1>

    </section>
  );
};
export default Hero;
