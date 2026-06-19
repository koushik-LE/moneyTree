"use client";

const journeyLevels = [
  {
    badge: "Levels 1–3 • Foundation",
    title: "Money Awareness & Basic Transactions",
    description:
      "Students begin by identifying money, understanding value, recognising needs vs wants, and participating in simple buying activities.",
    age: "Ages 4—8",
    grade: "Grades 1—3",
    tags: [
      "💰 Identify all coins & notes",
      "🛒 Makes a purchase independently",
      "🧠 Explain needs vs wants",
      "🏪 Participates in classroom stall",
    ],
  },
  {
    badge: "Levels 4–5 • Saving",
    title: "Saving, Goal-Setting & Temptation Management",
    description:
      "Students learn to delay gratification, set savings goals, track daily decisions, and build consistent saving habits.",
    age: "Ages 8—10",
    grade: "Grades 3—5",
    tags: [
      "🎯 Completes 30-day saving challenge",
      "📝 Maintains a spending diary",
      "🏦 Reviews a savings goal",
      "🧃 Resists impulse spending",
    ],
  },
  {
    badge: "Levels 6–7 • Budgeting",
    title: "Budgeting, Opportunity Cost & Financial Tracking",
    description:
      "Students plan and manage weekly budgets, track actual spending, understand opportunity cost, and observe family financial decisions.",
    age: "Ages 10—12",
    grade: "Grades 5—7",
    tags: [
      "📒 Creates a 7-week budget",
      "⚖️ Applies opportunity cost",
      "👨‍👩‍👧 Family budget observation",
      "📊 Tracks budget vs actuals",
    ],
  },
  {
    badge: "Levels 8–9 • Judgment",
    title: "Value, Social Influence & Financial Ethics",
    description:
      "Students critically evaluate brand value, social pressure, hidden costs, and ethical financial reasoning.",
    age: "Ages 12—14",
    grade: "Grades 7—9",
    tags: [
      "🛍️ Branded vs unbranded analysis",
      "📣 Ad persuasion audit",
      "🔍 Hidden costs investigation",
      "⚖️ Financial ethics debate",
    ],
  },
  {
    badge: "Levels 10–12 • Strategy",
    title: "Investing, Credit, Risk & Personal Financial Strategy",
    description:
      "Students model compound growth, compare investment options, understand credit and tax systems, identify fraud risks, and build long-term financial plans.",
    age: "Ages 14—18",
    grade: "Grades 9—12",
    tags: [
      "📈 Investment model built",
      "💳 Loan cost comparison",
      "🛡️ Fraud detection exercise",
      "🧠 5-year financial plan",
    ],
  },
];

export function StudentJourneySection() {
  return (
    <section className="bg-[#F4F7FB] py-20 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* TOP */}
        <div className="max-w-[720px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#CFE0FF] bg-[#EEF5FF] px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-[#00C853]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1E63D5]">
              Student Journey
            </span>
          </div>

          <h2 className="mt-6 text-[42px] font-black leading-[0.98] tracking-[-0.05em] text-[#1F2A37] sm:text-[58px]">
            A Journey from
            <br />
            <span className="text-[#1E63D5]">Recognition</span> to{" "}
            <span className="text-[#00A63E]">Strategy.</span>
          </h2>

          <p className="mt-6 max-w-[620px] text-[17px] leading-[1.9] text-[#6B7280]">
            Students move through a carefully structured progression — from
            identifying coins in early grades to building full personal
            financial strategies in higher levels.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative mt-16">
          {/* Line */}
          <div className="absolute left-[11px] top-4 hidden h-[calc(100%-40px)] w-[2px] bg-[#BFD3F7] lg:block" />

          <div className="space-y-7">
            {journeyLevels.map((level) => (
              <div key={level.title} className="relative flex gap-6">
                {/* DOT */}
                <div className="relative z-10 hidden pt-10 lg:block">
                  <div className="h-6 w-6 rounded-full border-[5px] border-[#1E63D5] bg-white shadow-[0_4px_14px_rgba(30,99,213,0.18)]" />
                </div>

                {/* CARD */}
                <div className="flex-1 rounded-[28px] border border-[#DCE5F0] bg-white px-6 py-7 shadow-[0_14px_40px_rgba(15,23,42,0.05)] sm:px-8">
                  {/* TOP */}
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="inline-flex items-center rounded-full bg-[#163EA8] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-white">
                        {level.badge}
                      </div>

                      <h3 className="mt-5 text-[30px] font-black leading-[1.15] tracking-[-0.04em] text-[#14267A]">
                        {level.title}
                      </h3>

                      <p className="mt-4 max-w-[820px] text-[15px] leading-[1.9] text-[#6B7280]">
                        {level.description}
                      </p>
                    </div>

                    {/* RIGHT */}
                    <div className="shrink-0 text-left lg:text-right">
                      <div className="text-[14px] font-semibold text-[#6B7280]">
                        {level.age}
                      </div>

                      <div className="mt-1 text-[14px] font-bold text-[#00A63E]">
                        {level.grade}
                      </div>
                    </div>
                  </div>

                  {/* TAGS */}
                  <div className="mt-7 flex flex-wrap gap-3">
                    {level.tags.map((tag) => (
                      <div
                        key={tag}
                        className="rounded-full border border-[#DDE7F5] bg-[#F6F9FF] px-4 py-2 text-[12px] font-medium text-[#3D4B63]"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
