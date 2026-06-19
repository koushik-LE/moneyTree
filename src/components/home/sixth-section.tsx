"use client";

import { Card } from "@/components/ui/card";

const comparisonRows = [
  {
    area: "Learning Style",
    traditional: "Memorization of theory",
    moneytree: "Decision-making & application",
  },
  {
    area: "Assessment",
    traditional: "One-time tests, marks-focused",
    moneytree: "Continuous behavioural validation",
  },
  {
    area: "Engagement",
    traditional: "Passive learning, worksheets",
    moneytree: "Active participation, real projects",
  },
  {
    area: "Real World",
    traditional: "Classroom-only delivery",
    moneytree: "Market visits, simulations, expos",
  },
  {
    area: "Curriculum",
    traditional: "Static, disconnected chapters",
    moneytree: "Spiral progression, increasing rigor",
  },
  {
    area: "Parents",
    traditional: "No structured role",
    moneytree: "Integrated reflection & validation",
  },
  {
    area: "Outcomes",
    traditional: "Subject knowledge",
    moneytree: "Financial behaviour & competency",
  },
];

export default function ComparisonLearningScienceSection() {
  return (
    <section className="bg-[#F5F8FC]">
      {/* ========================= */}
      {/* COMPARISON SECTION */}
      {/* ========================= */}

      <div className="border-b border-[#E6EDF5]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#2163CC]">
              Why MoneyTreeCY
            </p>

            <h2 className="mt-4 text-[34px] font-black leading-[1.05] tracking-[-0.04em] text-[#1F2A37] sm:text-[44px] lg:text-[58px]">
              Not Another
              <span className="text-[#2163CC]"> Content App</span>
            </h2>

            <p className="mt-5 max-w-[620px] text-[14px] leading-8 text-[#6B7280] sm:text-[15px]">
              MoneyTreeCY is designed as a structured financial behaviour
              ecosystem — not a content delivery platform.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="mt-10 hidden overflow-hidden rounded-[24px] border border-[#E7EDF5] bg-white lg:block">
            <div className="grid grid-cols-3 bg-[#F8FAFD]">
              <div className="px-5 py-4 text-[12px] font-semibold text-[#5B6B7A]">
                Area
              </div>

              <div className="border-l border-[#EEF2F7] px-5 py-4 text-[12px] font-semibold text-[#5B6B7A]">
                Traditional Learning
              </div>

              <div className="border-l border-[#EEF2F7] px-5 py-4 text-[12px] font-semibold text-[#173FAE]">
                MoneyTreeCY
              </div>
            </div>

            {comparisonRows.map((row) => (
              <div
                key={row.area}
                className="grid grid-cols-3 border-t border-[#EEF2F7]"
              >
                <div className="px-5 py-4 text-[12px] font-semibold uppercase tracking-wide text-[#5B6B7A]">
                  {row.area}
                </div>

                <div className="border-l border-[#EEF2F7] px-5 py-4 text-[13px] text-[#667085]">
                  {row.traditional}
                </div>

                <div className="border-l border-[#EEF2F7] px-5 py-4 text-[13px] font-semibold text-[#173FAE]">
                  {row.moneytree}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Cards */}
          <div className="mt-8 space-y-3 lg:hidden">
            {comparisonRows.map((row) => (
              <Card key={row.area} className="rounded-2xl p-4">
                <h3 className="text-xs font-bold uppercase tracking-wide text-[#173FAE]">
                  {row.area}
                </h3>

                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-[11px] font-semibold text-gray-500">
                      Traditional
                    </p>
                    <p className="text-sm text-[#5B6B7A]">{row.traditional}</p>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold text-gray-500">
                      MoneyTreeCY
                    </p>
                    <p className="text-sm font-medium text-[#173FAE]">
                      {row.moneytree}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
