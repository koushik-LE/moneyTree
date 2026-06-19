"use client";

import { Card } from "@/components/ui/card";

const features = [
  {
    icon: "📚",
    title: "Progressive Curriculum",
    description:
      "Spiral progression from basic money recognition to strategic financial systems thinking.",
  },
  {
    icon: "🌍",
    title: "Real-World Projects",
    description:
      "Students investigate, observe, compare, and reflect through structured real-world activities.",
  },
  {
    icon: "🧠",
    title: "Decision-Based Learning",
    description:
      "Focus on choices, reasoning, and consequences — not memorization.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Parent-Integrated Reflection",
    description:
      "Parents validate behavioural understanding and reinforce learning in everyday life.",
  },
];

const ecosystemItems = [
  "Curriculum",
  "Assessments",
  "Real Projects",
  "Activities",
  "Behavioural Validation",
  "Gamification",
  "Financial Expos",
  "Reward Marketplace",
  "Parent Portal",
  "Financial National Summits",
];

export default function EcosystemSection() {
  return (
    <section className="bg-[#F5F8FC]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid items-center gap-12 xl:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#2163CC]">
              WHAT IS MONEYTREECY
            </p>

            <h2 className="mt-4 max-w-[620px] text-[36px] font-black leading-[1.05] tracking-[-0.04em] text-[#1F2A37] sm:text-[46px] lg:text-[58px]">
              A Financial Literacy
              <br />
              <span className="text-[#2163CC]">Ecosystem.</span>
              <br />
              Not Just an App.
            </h2>

            <p className="mt-5 max-w-[580px] text-[14px] leading-8 text-[#6B7280] sm:text-[15px]">
              MoneyTreeCY combines curriculum, assessments, projects, real-world
              activities, behavioural validation, gamification, expos, Olympiads
              and parent participation into one progressive ecosystem.
            </p>

            {/* Features */}
            <div className="mt-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex gap-4 py-5 ${
                    index !== features.length - 1
                      ? "border-b border-[#E4EAF3]"
                      : ""
                  }`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#CDEDD9] bg-[#ECFBF3] text-base">
                    {feature.icon}
                  </div>

                  <div>
                    <h3 className="text-[18px] font-semibold text-[#1F2A37]">
                      {feature.title}
                    </h3>

                    <p className="mt-1 text-[13px] leading-6 text-[#6B7280]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <Card className="rounded-[28px] border border-[#E7EDF5] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#5D6B79]">
                THE ECOSYSTEM
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {ecosystemItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-[#DEE7F1] bg-[#F8FBFF] px-3 py-3 transition-colors hover:bg-[#F2F7FF]"
                  >
                    <div className="h-2 w-2 shrink-0 rounded-full bg-[#00D26A]" />

                    <span className="text-[12px] font-medium text-[#223548]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
