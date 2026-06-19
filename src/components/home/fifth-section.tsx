"use client";

import {
  BadgeDollarSign,
  BriefcaseBusiness,
  ClipboardList,
  LineChart,
  Scale,
  ShoppingCart,
  Trophy,
} from "lucide-react";

import { Card } from "@/components/ui/card";

const learningCards = [
  {
    level: "Levels 3 — 5",
    title: "Market Observation & Price Comparison",
    description:
      "Students visit a local market, compare prices for the same item, and document value differences.",
    icon: ShoppingCart,
    bg: "from-[#DCEEFF] to-[#BFE0FF]",
  },
  {
    level: "Levels 4 — 6",
    title: "30-Day Saving Tracker Challenge",
    description:
      "Students set a savings goal, track daily decisions, and reflect on temptation & discipline.",
    icon: BadgeDollarSign,
    bg: "from-[#DFF4E4] to-[#CBE9D2]",
  },
  {
    level: "Levels 6 — 7",
    title: "Family Budget Observation Project",
    description:
      "Students observe household spending, categorize expenses, and create a mini budget plan.",
    icon: ClipboardList,
    bg: "from-[#DDF6FF] to-[#C6EEF7]",
  },
  {
    level: "Levels 8 — 9",
    title: "Brand Value Trade-off Analysis",
    description:
      "Students compare branded vs unbranded products, evaluating quality, price, and social influence.",
    icon: Scale,
    bg: "from-[#E5E8FF] to-[#D4D8F6]",
  },
  {
    level: "School Expo",
    title: "Financial Stall Simulation",
    description:
      "Students manage a simulated stall — pricing, inventory, transactions, and profit tracking.",
    icon: BriefcaseBusiness,
    bg: "from-[#F0DFFF] to-[#E3C9F3]",
  },
  {
    level: "Levels 10—12",
    title: "Risk & Investment Strategy Plan",
    description:
      "Students evaluate financial products, model risk scenarios, and build a strategic financial plan.",
    icon: LineChart,
    bg: "from-[#FFF3C9] to-[#FFE18D]",
  },
];

const eventTiers = [
  {
    tier: "Tier 1 · School Level",
    number: "01",
    title: "Financial Expo",
    description:
      "A controlled financial ecosystem where students experience pricing, selling, spending negotiations, and planning in real time.",
    points: [
      "Financial stalls & simulations",
      "Project showcase",
      "Budgeting games",
      "Market transactions",
      "Team challenges",
    ],
  },
  {
    tier: "Tier 2 · District / State",
    number: "02",
    title: "Regional Competition",
    description:
      "Advanced teams participate in financial reasoning tasks, real-world case challenges, and strategic simulations evaluated by experts.",
    points: [
      "Decision challenge rounds",
      "Case-based simulations",
      "Expert interactions",
      "Collaborative reasoning tasks",
      "Comparative evaluation",
    ],
  },
  {
    tier: "Tier 3 · National",
    number: "03",
    title: "Financial Olympiad",
    description:
      "The highest-performing students engage in systems-level thinking, strategic simulations, and policy-oriented financial reasoning.",
    points: [
      "Strategic financial simulations",
      "Policy-oriented reasoning",
      "Risk evaluation scenarios",
      "Financial case solving",
      "National recognition",
    ],
  },
];

export default function ProjectsEventsSection() {
  return (
    <section className="overflow-hidden bg-[#F5F8FC]">
      {/* ========================================= */}
      {/* REAL WORLD LEARNING */}
      {/* ========================================= */}

      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        {/* TOP */}
        <div className="max-w-[760px]">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#1E63D5]" />

            <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#1E63D5]">
              Real-World Learning
            </span>
          </div>

          <h2 className="mt-5 text-[46px] font-black leading-[1] tracking-[-0.05em] text-[#1F2A37] sm:text-[64px] xl:text-[72px]">
            Learning Beyond <span className="text-[#1E63D5]">Screens</span>
          </h2>

          <p className="mt-7 max-w-[680px] text-[18px] leading-[2] text-[#6B7280]">
            Students don&apos;t just answer questions. They investigate markets,
            compare prices, plan budgets, manage simulated stalls, and make real
            financial decisions.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {learningCards.map((card) => {
            const Icon = card.icon;

            return (
              <Card
                key={card.title}
                className="overflow-hidden rounded-[26px] border p-0 border-[#E6EDF5] bg-white shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
              >
                {/* TOP BG */}
                <div
                  className={`flex h-[145px] items-center justify-center bg-gradient-to-br ${card.bg}`}
                >
                  <div className="flex h-[64px] w-[64px] items-center justify-center rounded-2xl bg-white/70 shadow-sm backdrop-blur-md">
                    <Icon className="h-8 w-8 text-[#1D3FAE]" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  {/* LEVEL */}
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#1E63D5]">
                    {card.level}
                  </span>

                  {/* TITLE */}
                  <h3 className="mt-3 text-[22px] font-bold leading-[1.3] tracking-[-0.03em] text-[#1F2A37]">
                    {card.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-3 text-[15px] leading-[1.8] text-[#6B7280]">
                    {card.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* ========================================= */}
      {/* EVENTS ECOSYSTEM */}
      {/* ========================================= */}

      <div className="relative overflow-hidden bg-[#06158F]">
        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(58,89,255,0.15),transparent_35%)]" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          {/* TOP */}
          <div className="max-w-[760px]">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#00E676]" />

              <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#9FFFD0]">
                Events Ecosystem
              </span>
            </div>

            <h2 className="mt-5 text-[46px] font-black leading-[1] tracking-[-0.05em] text-white sm:text-[64px] xl:text-[72px]">
              A National Financial
              <br />
              <span className="text-[#FFD600]">Literacy Ecosystem</span>
            </h2>

            <p className="mt-7 max-w-[700px] text-[18px] leading-[2] text-[#A7B1D6]">
              Learning extends beyond the app into large-scale experiential
              events designed to showcase financial thinking, decision-making,
              and real-world application.
            </p>
          </div>

          {/* EVENT CARDS */}
          <div className="mt-16 grid gap-6 xl:grid-cols-3">
            {eventTiers.map((tier) => (
              <Card
                key={tier.title}
                className="relative overflow-hidden rounded-[30px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.05)] p-8 shadow-none backdrop-blur-[14px]"
              >
                {/* BIG NUMBER */}
                <span className="absolute right-6 top-5 text-[72px] font-black leading-none tracking-[-0.05em] text-[rgba(255,255,255,0.05)]">
                  {tier.number}
                </span>

                {/* TIER */}
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FFD600]">
                  {tier.tier}
                </span>

                {/* TITLE */}
                <h3 className="mt-5 text-[34px] font-black tracking-[-0.04em] text-white">
                  {tier.title}
                </h3>

                {/* DESC */}
                <p className="mt-5 text-[15px] leading-[1.9] text-[#A7B1D6]">
                  {tier.description}
                </p>

                {/* POINTS */}
                <div className="mt-8 space-y-4">
                  {tier.points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <div className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[#00E676]" />

                      <p className="text-[15px] text-[#DCE4FF]">{point}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
