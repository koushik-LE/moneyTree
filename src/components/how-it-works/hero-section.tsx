"use client";

import {
  Flame,
  BookOpen,
  Clapperboard,
  CheckCircle2,
  Globe2,
  RefreshCcw,
  ArrowRight,
} from "lucide-react";

const previewItems = [
  {
    id: "1",
    title: "Five-Segment Lesson Architecture",
    description: "Every lesson: Learn → Watch → Assess → Apply → Reflect",
  },
  {
    id: "2",
    title: "Student–Parent–School Ecosystem",
    description: "Three stakeholders, one integrated experience",
  },
  {
    id: "3",
    title: "Gamified Progress & Real Money Rewards",
    description: "XP, badges, streaks, and reward marketplace",
  },
  {
    id: "4",
    title: "3-Tier Events Ecosystem",
    description: "School Expo → Regional → National Financial Olympiad",
  },
];

const lessonTabs = [
  {
    title: "Learn",
    icon: BookOpen,
    active: true,
    bg: "bg-[#F5F0FF]",
    text: "text-[#6B43C7]",
    border: "border-[#D8C7FF]",
  },
  {
    title: "Watch",
    icon: Clapperboard,
    active: false,
    bg: "bg-[#EDF5FF]",
    text: "text-[#2F6FE4]",
    border: "border-[#D8E8FF]",
  },
  {
    title: "Assess",
    icon: CheckCircle2,
    active: false,
    bg: "bg-[#FFF9EA]",
    text: "text-[#E29A0F]",
    border: "border-[#FFE2A4]",
  },
  {
    title: "Apply",
    icon: Globe2,
    active: false,
    bg: "bg-[#F1FBF3]",
    text: "text-[#2EAA58]",
    border: "border-[#CBEFD8]",
  },
  {
    title: "Reflect",
    icon: RefreshCcw,
    active: false,
    bg: "bg-[#FFF3F6]",
    text: "text-[#DE5B75]",
    border: "border-[#FFD3DD]",
  },
];

export default function HowItWorksHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0E1E71_0%,#1C4CB6_100%)]">
      {/* Background Glow */}
      <div className="absolute left-[35%] top-0 h-[400px] w-[400px] rounded-full bg-[#4F7EFF]/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-[#3A66FF]/20 blur-[120px]" />

      <div className="relative mx-auto max-w-[1280px] px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* LEFT */}
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-white/50">
              <span>Home</span>
              <span>›</span>
              <span className="text-white/80">How It Works</span>
            </div>

            {/* Badge */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <div className="h-2 w-2 rounded-full bg-[#00D757]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#83F3A3]">
                The Complete Learning System
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-[42px] font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-[52px] lg:text-[64px] xl:text-[68px]">
              From{" "}
              <span className="text-[#2BE34E]">
                Concept
              </span>
              <br />
              to{" "}
              <span className="text-[#FFD600]">
                Behaviour.
              </span>
              <br />
              Every Lesson.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[560px] text-sm leading-7 text-white/65 lg:text-[15px]">
              MoneyTreeCY is not a content app. It's a structured learning
              ecosystem — combining curriculum design, real-world projects,
              family integration, and competitive events into one progressive
              journey.
            </p>

            {/* Feature Cards */}
            <div className="mt-8 space-y-3">
              {previewItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.08]"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#2671FF] to-[#0D46AF] text-xs font-black text-white">
                    {item.id}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-[11px] text-white/50">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative mx-auto w-full max-w-[480px]">
            {/* Floating Level Card */}
            <div className="absolute -right-11 -top-15 z-20 hidden rounded-2xl bg-white px-4 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.15)] lg:block">
              <div className="text-center">
                <div className="text-base">🏆</div>
                <div className="mt-1 text-sm font-black text-[#10206E]">
                  Level 7
                </div>
                <div className="text-[9px] text-slate-400">
                  Current Stage
                </div>
              </div>
            </div>

            {/* Floating Streak Card */}
            <div className="absolute -bottom-13 -left-11 z-20 hidden rounded-2xl bg-white px-4 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.15)] lg:block">
              <div className="flex flex-col items-center">
                <Flame className="h-4 w-4 fill-orange-500 text-orange-500" />
                <div className="mt-1 text-sm font-black text-[#10206E]">
                  21 Days
                </div>
                <div className="text-[9px] text-slate-400">
                  Streak Active
                </div>
              </div>
            </div>

            {/* Main Card */}
            <div className="rounded-[24px] bg-[#F8F9FB] p-5 shadow-[0_25px_60px_rgba(0,0,0,0.18)] lg:p-6">
              {/* Mobile Badges */}
              <div className="mb-4 flex gap-2 lg:hidden">
                <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  🏆 Level 7
                </div>

                <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  🔥 21 Days
                </div>
              </div>

              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Current Lesson
                  </div>

                  <h3 className="mt-1 text-xl font-black text-[#10206E]">
                    Budgeting Systems
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-[#2CCB56] bg-white">
                  <div className="text-center">
                    <div className="text-[11px] font-black text-[#10206E]">
                      65%
                    </div>
                    <div className="text-[6px] font-bold uppercase text-[#2CCB56]">
                      Done
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="mt-5 grid grid-cols-5 gap-2">
                {lessonTabs.map((tab) => {
                  const Icon = tab.icon;

                  return (
                    <div
                      key={tab.title}
                      className={`
                        flex flex-col items-center rounded-xl border p-2 lg:p-3
                        ${tab.bg}
                        ${tab.text}
                        ${tab.border}
                      `}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span className="mt-1.5 text-[9px] font-bold">
                        {tab.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Lesson Content */}
              <div className="mt-5 rounded-2xl bg-[#EEF2F6] p-4">
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                  Learn — Concept Introduction
                </div>

                <p className="mt-2 text-xs leading-6 text-slate-600">
                  Study how to divide your money across categories — needs,
                  savings and wants — using the 50/30/20 framework adapted for
                  students.
                </p>
              </div>

              {/* Footer */}
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#FFD56B] bg-[#FFF9EA] px-3 py-1.5 text-[10px] font-bold text-[#E48C00]">
                  ⚡ +40 XP on completion
                </div>

                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1845A3] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#12347C]">
                  Next Segment
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}