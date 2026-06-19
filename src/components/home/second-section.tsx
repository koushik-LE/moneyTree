"use client";

import { Check, X } from "lucide-react";

const traditionalPoints = [
  "Memorizing formulas, not financial choices",
  "Theory without real-world application",
  "No budgeting, saving or spending skills",
  "No understanding of risk or decisions",
  "Children unprepared for digital economy",
];

const moneytreePoints = [
  "Decision-based, real-world financial learning",
  "Progressive curriculum across 12 levels",
  "Budgeting, saving, and planning skills",
  "Risk awareness and financial judgment",
  "Behavioural validation by parents",
];

const features = [
  "Spiral Learning Levels",
  "Integrated Lessons",
  "Multi-Tier Events",
];

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-[#071A92]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_35%)]" />

      <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(65,105,255,0.12),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#B9C4FF]">
            The Gap We're Closing
          </p>

          <h2 className="mt-4 text-[36px] font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-[46px] lg:text-[58px]">
            Children Learn Equations.
            <br />
            But Not <span className="text-[#FFD600]">Money.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-[14px] leading-8 text-[#A9B4E6] sm:text-[15px]">
            Schools teach academic performance. Very few systems teach financial
            decision-making, budgeting, spending behaviour, or money
            responsibility.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {/* Traditional */}
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <X className="h-4 w-4 text-red-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8F9BD0]">
                Traditional Education
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {traditionalPoints.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <X className="h-2.5 w-2.5 text-[#8F9BD0]" />
                  </div>

                  <p className="text-[13px] leading-6 text-[#AAB5E6]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* MoneyTree */}
          <div className="rounded-[24px] border border-[#00E676]/20 bg-[#00E676]/[0.04] p-6 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#00E676]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#00E676]">
                MoneyTreeCY Approach
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {moneytreePoints.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#00E676]">
                    <Check className="h-2.5 w-2.5 text-[#071A92]" />
                  </div>

                  <p className="text-[13px] leading-6 text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Feature Blocks */}
        <div className="mt-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur-xl">
          <div className="grid md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature}
                className={`flex min-h-[110px] items-center justify-center px-6 py-8 text-center ${
                  index !== features.length - 1
                    ? "border-b border-white/10 md:border-b-0 md:border-r"
                    : ""
                } border-white/10`}
              >
                <h3 className="text-lg font-medium text-[#FFD600] lg:text-xl">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
