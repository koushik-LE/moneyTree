"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  Zap,
} from "lucide-react";

const stats = [
  {
    value: "94%",
    label: "Parent Satisfaction",
    color: "text-[#00E35B]",
  },
  {
    value: "2×",
    label: "Faster Behaviour Change",
    color: "text-[#00E35B]",
  },
  {
    value: "1st",
    label: "Reporting In Cyprus",
    color: "text-[#8BFF6A]",
  },
];

const dashboardCards = [
  {
    name: "Nikos",
    level: "Level 6 • Budgeting Track",
    xp: "480 XP",
    color: "from-[#00D95F] to-[#00B84F]",
    icon: "🧒",
  },
  {
    name: "Eleni",
    level: "Level 3 • Saving Track",
    xp: "210 XP",
    color: "from-[#A855F7] to-[#7C3AED]",
    icon: "👧",
  },
];

const actions = [
  {
    label: "Validate Project",
    icon: ShieldCheck,
  },
  {
    label: "View Progress",
    icon: BarChart3,
  },
  {
    label: "Events",
    icon: Zap,
  },
  {
    label: "Messages",
    icon: MessageSquare,
  },
];

export default function ParentPortalHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#08176B_0%,#0A1E86_45%,#154EB7_100%)]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-150px] top-[80px] h-[320px] w-[320px] rounded-full bg-[#00D95F]/10 blur-[120px]" />

        <div className="absolute bottom-[-120px] right-[-120px] h-[400px] w-[400px] rounded-full bg-[#1E88FF]/20 blur-[140px]" />

        <div className="absolute left-[52%] top-[45%] h-8 w-8 rounded-full bg-white/5 blur-sm" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_430px] lg:items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="max-w-[560px]"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[11px] text-white/40">
              <span>Home</span>
              <span>›</span>
              <span>For Parents</span>
            </div>

            {/* Badge */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#1ED760]/15 bg-[#0A3D80]/60 px-3 py-1.5 backdrop-blur-md">
              <div className="h-1.5 w-1.5 rounded-full bg-[#00D95F]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#E3FFF0]">
                Parent Portal • Progress • Insights
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-5 text-[42px] font-black leading-[0.95] tracking-[-0.05em] text-white md:text-[58px] lg:text-[64px]">
              You're Part
              <br />
              of Every{" "}
              <span className="bg-gradient-to-r from-[#00E35B] to-[#00C853] bg-clip-text text-transparent">
                Lesson
              </span>
              <br />
              They{" "}
              <span className="bg-gradient-to-r from-[#FFE600] to-[#FFD400] bg-clip-text text-transparent">
                Learn.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[520px] text-[14px] leading-8 text-white/60">
              MoneyTreeCY isn't a platform that replaces parents — it's one that
              puts you at the centre. Track your child's progress, validate
              projects, and watch genuine financial behaviour form in front of
              you.
            </p>

            {/* Stats */}
            <div className="mt-8 grid max-w-[500px] grid-cols-3 overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] backdrop-blur-md">
              {stats.map((item, index) => (
                <div
                  key={item.label}
                  className={`px-4 py-5 text-center ${
                    index !== stats.length - 1 ? "border-r border-white/10" : ""
                  }`}
                >
                  <div
                    className={`text-[30px] font-black tracking-[-0.04em] ${item.color}`}
                  >
                    {item.value}
                  </div>

                  <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/40">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto w-full max-w-[430px]"
          >
            <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.22)]">
              {/* Header */}
              <div className="flex items-center justify-between bg-gradient-to-r from-[#1B348E] to-[#2E74DA] px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                    👨‍👩‍👧
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white">
                      Maria's Dashboard
                    </h3>

                    <p className="text-[11px] text-white/60">
                      Parent Portal • 2 children enrolled
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0FD45E]/15 px-2.5 py-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#00E35B]" />

                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#E8FFF0]">
                    Live
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="space-y-3 p-4">
                {/* Students */}
                {dashboardCards.map((card) => (
                  <div
                    key={card.name}
                    className="flex items-center justify-between rounded-[14px] border border-[#E7EDF8] bg-[#F8FBFF] px-3 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${card.color}`}
                      >
                        {card.icon}
                      </div>

                      <div>
                        <h4 className="text-[13px] font-bold text-[#12235C]">
                          {card.name}
                        </h4>

                        <p className="text-[11px] text-[#6D7898]">
                          {card.level}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-full bg-[#FFF4CA] px-2.5 py-1 text-[10px] font-bold text-[#E49A00]">
                      ⚡ {card.xp}
                    </div>
                  </div>
                ))}

                {/* Progress */}
                <div className="pt-1">
                  <div className="mb-2 flex items-center justify-between text-[12px]">
                    <span className="font-semibold text-[#13255B]">
                      Nikos — Current Project
                    </span>

                    <span className="font-bold text-[#1D63D8]">68%</span>
                  </div>

                  <div className="h-2 rounded-full bg-[#E7EDF8]">
                    <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-[#00D95F] to-[#1D63D8]" />
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {actions.map((item) => {
                    const Icon = item.icon;

                    return (
                      <button
                        key={item.label}
                        className="flex items-center gap-2 rounded-xl border border-[#DCE5F5] bg-[#F8FBFF] px-3 py-3 transition-all hover:bg-[#EEF5FF]"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm">
                          <Icon className="h-4 w-4 text-[#1D63D8]" />
                        </div>

                        <span className="text-[12px] font-semibold text-[#173269]">
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Alert */}
                <div className="flex items-center gap-3 rounded-xl border border-[#C7E8D0] bg-[#F3FFF5] px-3 py-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00D95F]/10">
                    <CheckCircle2 className="h-4 w-4 text-[#00B84F]" />
                  </div>

                  <p className="text-[12px] leading-5 text-[#1A4B2C]">
                    Nikos submitted{" "}
                    <span className="font-bold">30-Day Saving Tracker</span> —
                    awaiting your validation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
