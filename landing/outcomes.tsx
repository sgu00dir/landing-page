"use client";
import { useState } from "react";

export type Outcome = {
  title: string;
  frontItems: [string, string, string];
  backItems: [string, string, string];
};

export const outcomes: Outcome[] = [
  {
    title: "Reduce Costs",
    frontItems: [
      "Reduce spend and labour hours",
      "Scale the privacy function without increasing headcount",
      "Significantly lower audit and assessment costs",
    ],
    backItems: [
      "Less manual analysis, less duplication, fewer ad hoc documents",
      "A small team operates like a larger, mature programme",
      "Always-current posture eliminates expensive, time-intensive review cycles",
    ],
  },
  {
    title: "Reduce Risks",
    frontItems: [
      "Reduce regulatory exposure across jurisdictions",
      "Strengthen governance and prevent compliance drift",
      "Eliminate single points of failure",
    ],
    backItems: [
      "Stronger coverage, fewer gaps, and improved audit defensibility",
      "Continuous tracking replaces reactive, last-minute compliance",
      "Knowledge persists beyond individuals",
    ],
  },
  {
    title: "Stronger Teams",
    frontItems: [
      "Reduce cognitive load for privacy teams",
      "Increase legitimacy and organisational support",
      "Strengthen collaboration across legal, privacy, and risk",
    ],
    backItems: [
      "Structure replaces mental overhead and fragmentation",
      "Stakeholders clearly see the scope and value of the function",
      "Teams operate from a shared, consistent framework",
    ],
  },
  {
    title: "Productivity",
    frontItems: [
      "Accelerate programme progress",
      "Dramatically faster onboarding of team members and consultants",
      "Real-time visibility for executives and stakeholders",
    ],
    backItems: [
      "Structured workflows replace fragmented effort",
      "Immediate understanding of obligations and priorities",
      "No manual reporting—decisions happen in real time",
    ],
  },
];

type OutcomeCardProps = Outcome & { className?: string };

export function OutcomeCard({ title, frontItems, backItems, className = "" }: OutcomeCardProps) {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((v) => !v);

  return (
    <div className={`group relative h-full ${className}`} style={{ perspective: 1000 }}>
      <div
        className={
          "relative h-[280px] lg:h-[320px] w-full rounded-none shadow-none cursor-pointer select-none " +
          "[transform-style:preserve-3d] transition-transform duration-300 ease-[cubic-bezier(.2,.8,.2,1)] " +
          (flipped ? "[transform:rotateY(180deg)]" : "")
        }
        style={{ background: "rgba(248,249,246,0.70)" }}
        role="button"
        tabIndex={0}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        aria-pressed={flipped}
      >
        {/* Hover affordance: long, thin arrow bottom-right that moves on its own hover */}
        <div className="absolute bottom-3 right-3 text-gray-700 pointer-events-none">
          <svg
            aria-hidden
            className="lf-arrow w-16 h-3 lg:w-20 lg:h-3.5"
            viewBox="0 0 56 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 6H49"/>
            <path d="M43 1l6 5-6 5"/>
          </svg>
        </div>

        {/* Front side */}
        <div className="absolute inset-0 p-5 lg:p-6 flex flex-col gap-3 justify-start" style={{ backfaceVisibility: "hidden" }}>
          <h3 className="text-lg lg:text-xl font-semibold text-gray-900">{title}</h3>
          <div className="mt-1 flex flex-col gap-2 text-gray-900 text-sm lg:text-[15px] leading-snug">
            {frontItems.map((headline, i) => (
              <div key={i}>{headline}</div>
            ))}
          </div>
        </div>

        {/* Back side */}
        <div
          className="absolute inset-0 p-5 lg:p-6 flex flex-col gap-3 justify-start [transform:rotateY(180deg)]"
          style={{ backfaceVisibility: "hidden" }}
          aria-hidden={!flipped}
        >
          <h3 className="text-lg lg:text-xl font-semibold text-gray-900">{title}</h3>
          <div className="mt-1 flex flex-col gap-2 text-gray-700 text-sm lg:text-[15px] leading-snug">
            {backItems.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OutcomesGrid() {
  return (
    <section aria-labelledby="outcomes-heading" className="w-full mt-4 md:mt-6">
      <div className="px-6 lg:px-12 pb-6 lg:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[2px] items-stretch">
          {outcomes.map((o, i) => (
            <OutcomeCard key={i} {...o} />
          ))}
        </div>
      </div>
    </section>
  );
}
