"use client";

import { Card } from "@/components/ui/card";

const rewards = [
  {
    icon: "📚",
    title: "Books & Guides",
    xp: "500—1,200 XP",
  },
  {
    icon: "🎒",
    title: "School Supplies",
    xp: "300—800 XP",
  },
  {
    icon: "🔬",
    title: "Learning Kits",
    xp: "800—2,000 XP",
  },
  {
    icon: "🏅",
    title: "Academic Tools",
    xp: "400—1,000 XP",
  },
];

export default function RewardsSection() {
  return (
    <section className="bg-[#F5F8FC]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT CARD */}
          <Card className="rounded-[28px] border border-[#E5EBF3] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)] sm:p-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#5B6675]">
                Your Progress
              </p>

              <span className="text-[11px] font-semibold text-[#00C853]">
                Level 7
              </span>
            </div>

            {/* XP */}
            <div className="mt-5">
              <h3 className="text-[44px] font-black leading-none tracking-[-0.04em] text-[#173FAE] sm:text-[52px]">
                1,240
              </h3>

              <p className="mt-2 text-[13px] text-[#6B7280]">
                XP earned this semester
              </p>
            </div>

            {/* Badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "🏆 Olympiad Qualifier",
                "💰 Budget Master",
                "🚀 7 Projects",
              ].map((badge) => (
                <div
                  key={badge}
                  className="rounded-full border border-[#E2E8F0] bg-[#F8FAFD] px-3 py-2"
                >
                  <span className="text-[11px] font-medium text-[#4B5563]">
                    {badge}
                  </span>
                </div>
              ))}
            </div>

            {/* Streak */}
            <div className="mt-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#5B6675]">
                21-Day Streak
              </p>

              <div className="mt-3 grid grid-cols-7 gap-2">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                  <div
                    key={`${day}-${index}`}
                    className={`flex h-9 items-center justify-center rounded-md text-[11px] font-semibold ${
                      index === 6
                        ? "bg-[#E5E7EB] text-[#6B7280]"
                        : "bg-[#173FAE] text-white"
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#2163CC]">
              Rewards System
            </p>

            <h2 className="mt-4 text-[34px] font-black leading-[1.05] tracking-[-0.04em] text-[#1F2A37] sm:text-[44px] lg:text-[56px]">
              Learning That
              <span className="text-[#2163CC]"> Rewards</span>
              <br />
              Consistency & Growth
            </h2>

            <p className="mt-5 max-w-[620px] text-[14px] leading-8 text-[#6B7280] sm:text-[15px]">
              Students earn XP, badges, streaks, and achievement milestones
              through meaningful participation — not shortcuts. The future
              vision includes a real-world educational reward marketplace.
            </p>

            <div className="mt-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#5B6675]">
                Coming: Reward Marketplace
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {rewards.map((reward) => (
                  <div
                    key={reward.title}
                    className="flex items-center gap-3 rounded-[16px] border border-[#E5EBF3] bg-white px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5F8FC] text-lg">
                      {reward.icon}
                    </div>

                    <div>
                      <h3 className="text-[14px] font-semibold text-[#1F2A37]">
                        {reward.title}
                      </h3>

                      <p className="mt-1 text-[12px] text-[#2163CC]">
                        {reward.xp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
