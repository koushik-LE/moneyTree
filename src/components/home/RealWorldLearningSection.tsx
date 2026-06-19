"use client";

import { Card } from "@/components/ui/card";

const activities = [
  {
    level: "LEVELS 3 — 5",
    title: "Market Observation & Price Comparison",
    description:
      "Students visit a local market, compare prices for the same item, and document value differences.",
    icon: "🛒",
    bg: "bg-[#DDEEFF]",
  },
  {
    level: "LEVELS 4 — 6",
    title: "30-Day Saving Tracker Challenge",
    description:
      "Students set a savings goal, track daily decisions, and reflect on temptation vs discipline.",
    icon: "💰",
    bg: "bg-[#DDEFD8]",
  },
  {
    level: "LEVELS 6 — 7",
    title: "Family Budget Observation Project",
    description:
      "Students observe household spending, categorize expenses, and create a mini budget plan.",
    icon: "📋",
    bg: "bg-[#D8F4FA]",
  },
  {
    level: "LEVELS 8 — 9",
    title: "Brand Value Trade-off Analysis",
    description:
      "Students compare branded vs unbranded products, evaluating quality, price, and social influence.",
    icon: "⚖️",
    bg: "bg-[#E4E8F8]",
  },
  {
    level: "SCHOOL EXPO",
    title: "Financial Stall Simulation",
    description:
      "Students manage a simulated stall — pricing, inventory, transactions, and profit tracking.",
    icon: "🏪",
    bg: "bg-[#F0DDF7]",
  },
  {
    level: "LEVELS 10—12",
    title: "Risk & Investment Strategy Plan",
    description:
      "Students evaluate financial products, model risk scenarios, and build a strategic financial plan.",
    icon: "📈",
    bg: "bg-[#FFF1B8]",
  },
];

export default function RealWorldLearningSection() {
  return (
    <section className="bg-[#F5F8FC]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#2163CC]">
            Real-World Learning
          </p>

          <h2 className="mt-4 text-[34px] font-black leading-[1.05] tracking-[-0.04em] text-[#1F2A37] sm:text-[44px] lg:text-[58px]">
            Learning
            <span className="text-[#2163CC]"> Beyond Screens</span>
          </h2>

          <p className="mt-5 max-w-[620px] text-[14px] leading-8 text-[#6B7280] sm:text-[15px]">
            Students don't just answer questions. They investigate markets,
            compare prices, plan budgets, manage simulated stalls, and make real
            financial decisions.
          </p>
        </div>

        {/* Activity Grid */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {activities.map((activity) => (
            <Card
              key={activity.title}
              className="overflow-hidden rounded-[20px] border border-[#E5EBF3] bg-white p-0 shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Top Banner */}
              <div
                className={`flex h-[120px] items-center justify-center ${activity.bg}`}
              >
                <span className="text-4xl">{activity.icon}</span>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#2163CC]">
                  {activity.level}
                </p>

                <h3 className="mt-2 text-[18px] font-bold leading-6 text-[#1F2A37]">
                  {activity.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#6B7280]">
                  {activity.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
