"use client";

import { ArrowRight } from "lucide-react";

const comparisonRows = [
  {
    dimension: "Learning Goal",
    typical: "Complete videos, answer questions",
    moneytree: "Behavioural change in real life",
  },
  {
    dimension: "Assessment",
    typical: "MCQ tests at end of module",
    moneytree: "LOT + MOT + HOT + parent validation",
  },
  {
    dimension: "Real World",
    typical: "None — stays on screen",
    moneytree: "Market visits, budgets, saving trackers",
  },
  {
    dimension: "Parents",
    typical: "No structured role",
    moneytree: "Integrated validation in every lesson",
  },
  {
    dimension: "Curriculum Design",
    typical: "Static content chapters",
    moneytree: "Spiral progression, cognitive milestones",
  },
  {
    dimension: "Events",
    typical: "None",
    moneytree: "3-tier Olympiad ecosystem",
  },
  {
    dimension: "Gamification",
    typical: "Points for screen time",
    moneytree: "XP tied to genuine learning outcomes",
  },
  {
    dimension: "Outcome Measurement",
    typical: "Completion rates only",
    moneytree: "Financial competency benchmarks",
  },
];

export function BehaviourSystemSection() {
  return (
    <section className="bg-[#F4F7FB] py-20 sm:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        {/* TOP */}
        <div className="max-w-[720px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D6E3F7] bg-[#EEF5FF] px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-[#00C853]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1E63D5]">
              Why MoneyTreeCY
            </span>
          </div>

          <h2 className="mt-6 text-[42px] font-black leading-[0.98] tracking-[-0.05em] text-[#1E2B36] sm:text-[58px]">
            Not a Content Platform.
            <br />
            <span className="text-[#1E63D5]">A Behaviour System.</span>
          </h2>

          <p className="mt-6 max-w-[650px] text-[17px] leading-[1.9] text-[#6B7280]">
            Most financial education stops at knowledge delivery. MoneyTreeCY is
            designed around a single question: does the student behave
            differently in real life?
          </p>
        </div>

        {/* TABLE */}
        <div className="mt-14 overflow-hidden rounded-[28px] border border-[#DFE7F1] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          {/* HEADER */}
          <div className="grid grid-cols-3 border-b border-[#E7EDF5] bg-[#F8FBFF]">
            <div className="px-6 py-5 text-[12px] font-black uppercase tracking-[0.12em] text-[#7B8798] sm:px-8">
              Dimension
            </div>

            <div className="border-l border-[#E7EDF5] px-6 py-5 text-[12px] font-black uppercase tracking-[0.12em] text-[#7B8798] sm:px-8">
              Typical EdTech / Content App
            </div>

            <div className="border-l border-[#E7EDF5] px-6 py-5 text-[12px] font-black uppercase tracking-[0.12em] text-[#163EA8] sm:px-8">
              MoneyTreeCY
            </div>
          </div>

          {/* ROWS */}
          {comparisonRows.map((row, index) => (
            <div
              key={row.dimension}
              className={`grid grid-cols-3 ${
                index !== comparisonRows.length - 1
                  ? "border-b border-[#E7EDF5]"
                  : ""
              }`}
            >
              {/* LEFT */}
              <div className="px-6 py-5 sm:px-8">
                <p className="text-[12px] font-black uppercase tracking-[0.12em] text-[#7B8798]">
                  {row.dimension}
                </p>
              </div>

              {/* MIDDLE */}
              <div className="border-l border-[#E7EDF5] px-6 py-5 sm:px-8">
                <p className="text-[14px] leading-[1.8] text-[#5F6B7A]">
                  {row.typical}
                </p>
              </div>

              {/* RIGHT */}
              <div className="border-l border-[#E7EDF5] px-6 py-5 sm:px-8">
                <p className="text-[14px] font-semibold leading-[1.8] text-[#163EA8]">
                  {row.moneytree}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA CARD */}
        <div className="mt-20 overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#08156F_0%,#0E2C98_55%,#1E63D5_100%)] p-8 shadow-[0_30px_90px_rgba(9,30,140,0.35)] sm:p-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            {/* LEFT */}
            <div className="max-w-[620px]">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#A5D4FF]">
                Ready To Get Started?
              </div>

              <h3 className="mt-5 text-[40px] font-black leading-[1] tracking-[-0.05em] text-white sm:text-[58px]">
                See <span className="text-[#FFD600]">How It Works</span>
                <br />
                in Your School Today
              </h3>

              <p className="mt-6 max-w-[560px] text-[16px] leading-[1.9] text-white/65">
                Book a live demo and explore the complete MoneyTreeCY learning
                ecosystem — from the student app to the parent portal, school
                dashboard, and Olympiad pipeline.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex w-full max-w-[280px] flex-col gap-4">
              <button className="flex h-[62px] items-center justify-center gap-3 rounded-[18px] bg-[#FFD600] px-8 text-[16px] font-black text-[#08156F] shadow-[0_16px_40px_rgba(255,214,0,0.4)] transition-all duration-300 hover:-translate-y-1">
                Book a Demo
                <ArrowRight className="h-5 w-5" />
              </button>

              <button className="flex h-[58px] items-center justify-center rounded-[18px] border border-white/15 bg-white/5 px-8 text-[15px] font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10">
                Explore Curriculum
              </button>

              <button className="flex h-[58px] items-center justify-center rounded-[18px] border border-white/15 bg-white/5 px-8 text-[15px] font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10">
                Download App
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
