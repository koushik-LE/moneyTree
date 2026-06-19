"use client";

export default function ProblemSolutionSection() {
  return (
    <section className="bg-[#F6F6F6] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* LEFT CARD */}
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#08135C] via-[#0C1D7A] to-[#10249A] p-8 lg:p-12">
            {/* Decorative Glow */}
            <div className="absolute right-20 top-14 h-24 w-24 rounded-full bg-white/10 blur-3xl" />

            {/* Small Dot */}
            <div className="absolute bottom-24 right-44 h-4 w-4 rounded-full bg-white/10" />

            {/* Badge */}
            <div className="inline-flex rounded-full border border-[#FFD94A]/30 bg-[#FFD94A]/10 px-4 py-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#FFD94A]">
                The Problem
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-8 font-serif text-[42px] font-bold leading-[1.05] text-white">
              A Critical Gap
              <br />
              in <span className="italic text-[#FFD600]">Education.</span>
            </h2>

            {/* Stat */}
            <div className="mt-10">
              <span className="font-serif text-[72px] font-bold leading-none text-[#FFD600]">
                1 Cr
              </span>

              <sup className="ml-1 text-[28px] text-[#FFD600]">+</sup>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-sm text-[15px] leading-8 text-white/75">
              Students graduate every year without learning how money works. We
              help learners build the financial knowledge, skills, and judgment
              needed to make informed decisions in the real world.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-[32px] border border-[#DCE3EA] bg-[#EEF2F6] p-8 lg:p-12">
            {/* Badge */}
            <div className="inline-flex rounded-full border border-[#00D48A]/20 bg-[#00D48A]/10 px-4 py-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#00B97B]">
                Our Approach
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-8 font-serif text-[42px] font-bold leading-[1.05] text-[#2B333D]">
              Skill-Based,
              <br />
              Not <span className="italic text-[#2C72D8]">Age-Based.</span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-lg text-[15px] leading-8 text-[#5B6675]">
              A learner's progress is determined by mastery, not age. A
              5-year-old can learn concepts designed for older learners if they
              are ready, while every level builds upon and strengthens previous
              learning.
            </p>

            {/* Progress Bars */}
            <div className="mt-10 space-y-5">
              {/* Foundation */}
              <div>
                <div className="mb-2 flex items-center justify-between text-[12px]">
                  <span className="font-semibold text-[#1F2937]">
                    Foundation
                  </span>

                  <span className="font-semibold text-[#2C72D8]">Mastered</span>
                </div>

                <div className="h-[4px] overflow-hidden rounded-full bg-gray-300">
                  <div className="h-full w-full rounded-full bg-[#2C72D8]" />
                </div>
              </div>

              {/* Growth */}
              <div>
                <div className="mb-2 flex items-center justify-between text-[12px]">
                  <span className="font-semibold text-[#1F2937]">Growth</span>

                  <span className="font-semibold text-[#23B26D]">72%</span>
                </div>

                <div className="h-[4px] overflow-hidden rounded-full bg-gray-300">
                  <div className="h-full w-[72%] rounded-full bg-[#23B26D]" />
                </div>
              </div>

              {/* Strategy */}
              <div>
                <div className="mb-2 flex items-center justify-between text-[12px]">
                  <span className="font-semibold text-[#1F2937]">Strategy</span>

                  <span className="font-semibold text-[#F59E0B]">38%</span>
                </div>

                <div className="h-[4px] overflow-hidden rounded-full bg-gray-300">
                  <div className="h-full w-[38%] rounded-full bg-[#F59E0B]" />
                </div>
              </div>
            </div>

            {/* Bottom Notice */}
            <div className="mt-8 rounded-2xl border border-[#D7E0EA] bg-[#E6EDF6] px-5 py-4">
              <p className="text-[13px] font-medium text-[#17336D]">
                Every level unlocks when mastered — not when a birthday arrives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
