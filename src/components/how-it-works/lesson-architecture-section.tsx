"use client";

const rewardSteps = [
  {
    id: "01",
    title: "Learn",
    subtitle: "Build Knowledge",
    icon: "📚",
    color: "#2F80FF",
    items: [
      "Lessons",
      "Daily Quizzes",
      "Weekly Challenges",
      "Activities",
      "Assessments",
    ],
  },
  {
    id: "02",
    title: "Earn Points",
    subtitle: "Every Action Counts",
    icon: "⭐",
    color: "#00D26A",
    items: [
      "Lesson Completion Points",
      "Quiz Points",
      "Assessment Rewards",
      "Activity Bonuses",
      "Streak Rewards",
    ],
  },
  {
    id: "03",
    title: "Convert to Real Money",
    subtitle: "Real Wallet Value",
    icon: "💰",
    color: "#FFB800",
    items: ["Points → Rewards Wallet", "Track Earnings", "Unlock Benefits"],
  },
  {
    id: "04",
    title: "Redeem",
    subtitle: "Use Your Rewards",
    icon: "🎁",
    color: "#C85BFF",
    items: [
      "Competition Registrations",
      "Event Tickets",
      "Workshops & Experiences",
      "Exclusive Merchandise",
      "Learning Resources",
    ],
  },
];

export default function RewardsSystemSection() {
  return (
    <section className="relative overflow-hidden bg-[#101D7A] py-14 lg:py-13">
      {/* Background Glow */}
      <div className="absolute left-1/4 top-0 h-[350px] w-[350px] rounded-full bg-[#315DFF]/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[#7C4DFF]/15 blur-[120px]" />

      <div className="relative mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-[900px] text-center">
          <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#8AF7D3]">
            How The Rewards System Works
          </div>

          <h2 className="mt-4 text-[34px] font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-[46px] lg:text-[58px]">
            {" "}
            Learn. Earn. Redeem.
            <br />
            <span className="text-[#FFD600]">
              Turn Learning into Real-World Rewards.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[580px] text-[14px] leading-7 text-white/60">
            {" "}
            Every learning action earns points. Points convert into real wallet
            value. Wallet value unlocks meaningful rewards, experiences, and
            opportunities.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {" "}
          {rewardSteps.map((step) => (
            <div
              key={step.id}
              className="group overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04]"
            >
              {/* Top Border */}
              <div
                className="h-[3px] w-full"
                style={{ backgroundColor: step.color }}
              />

              <div className="p-5">
                {/* Step */}
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">
                  Tile {step.id}
                </div>

                {/* Icon */}
                <div
                  className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl text-xl"
                  style={{
                    backgroundColor: `${step.color}20`,
                  }}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="mt-5 text-[22px] font-black tracking-[-0.03em] text-white">
                  {" "}
                  {step.title}
                </h3>

                <div
                  className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em]"
                  style={{ color: step.color }}
                >
                  {step.subtitle}
                </div>

                {/* Items */}
                <div className="mt-6 space-y-2.5">
                  {step.items.map((item, index) => (
                    <div
                      key={item}
                      className={`flex items-center gap-3 ${
                        index !== step.items.length - 1
                          ? "border-b border-white/5 pb-3"
                          : ""
                      }`}
                    >
                      <div
                        className="h-[5px] w-[5px] rounded-full"
                        style={{
                          backgroundColor: step.color,
                        }}
                      />

                      <span className="text-[12px] text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flow Bar */}
        <div className="mt-12 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3">
            <span className="text-xs font-bold text-[#2F80FF]">📚 LEARN</span>

            <span className="text-white/30">↓</span>

            <span className="text-xs font-bold text-[#00D26A]">
              ⭐ EARN POINTS
            </span>

            <span className="text-white/30">↓</span>

            <span className="text-xs font-bold text-[#FFD600]">
              💰 CONVERT TO REAL MONEY
            </span>

            <span className="text-white/30">↓</span>

            <span className="text-xs font-bold text-[#C85BFF]">
              🎁 REDEEM REWARDS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
