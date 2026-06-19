"use client";

const rewards = [
  {
    icon: "⚡",
    title: "XP — Experience Points",
    description:
      "Earned by completing lessons, assessments, real-world projects, and parent validations. XP unlocks levels and rewards.",
    bg: "bg-[#EEF4FF]",
  },
  {
    icon: "🏅",
    title: "Achievement Badges",
    description:
      "Milestone badges for saving challenges, streak completion, perfect assessments, and Olympiad participation.",
    bg: "bg-[#FFF6E6]",
  },
  {
    icon: "🔥",
    title: "Daily Streaks",
    description:
      "Consistent daily engagement builds financial habits through streak rewards and behavioural reinforcement.",
    bg: "bg-[#FFF1EE]",
  },
  {
    icon: "🛍️",
    title: "Reward Marketplace",
    description:
      "Students redeem XP for books, learning kits, educational tools, and school supplies.",
    bg: "bg-[#EEFDF4]",
    badge: "Coming Soon",
  },
];

const eventTiers = [
  {
    number: "01",
    label: "Tier 1 • School Level",
    title: "Financial Expo",
    description:
      "Students run stalls, complete budgeting games, make transactions, and present real-world financial projects.",
    items: [
      "Financial stalls & market simulation",
      "Project showcase to teachers & parents",
      "Budgeting & negotiation challenges",
      "Team-based financial games",
      "Certificates for all participants",
    ],
  },
  {
    number: "02",
    label: "Tier 2 • District / State",
    title: "Regional Competition",
    description:
      "Advanced financial reasoning tasks, real-world case challenges, and expert-reviewed simulations.",
    items: [
      "Multi-round decision challenges",
      "Expert-evaluated case simulations",
      "Collaborative reasoning tasks",
      "Industry expert interactions",
      "District & state certification",
    ],
  },
  {
    number: "03",
    label: "Tier 3 • National",
    title: "Financial Olympiad",
    description:
      "National finals focused on systems-level thinking, strategic simulations, and policy-oriented reasoning.",
    items: [
      "Strategic financial simulations",
      "Policy & systems reasoning",
      "Risk evaluation & modelling",
      "National certificates & recognition",
      "Industry leader interactions",
    ],
  },
];

export function MotivationEventsSection() {
  return (
    <>
      {/* REWARDS SECTION */}
      <section className="bg-[#F4F7FB] py-20 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#CFE0FF] bg-[#EEF5FF] px-4 py-2">
                <div className="h-2 w-2 rounded-full bg-[#00C853]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1E63D5]">
                  Motivation System
                </span>
              </div>

              <h2 className="mt-6 text-[42px] font-black leading-[0.98] tracking-[-0.05em] text-[#1E2B36] sm:text-[58px]">
                Learning That <span className="text-[#1E63D5]">Rewards</span>
                <br />
                Real Progress.
              </h2>

              <p className="mt-6 max-w-[620px] text-[17px] leading-[1.9] text-[#6B7280]">
                Every meaningful action earns recognition — not shortcuts.
                MoneyTreeCY’s reward system reinforces consistency, effort, and
                real-world behavioural growth.
              </p>

              {/* REWARD CARDS */}
              <div className="mt-10 space-y-5">
                {rewards.map((reward) => (
                  <div
                    key={reward.title}
                    className="rounded-[24px] border border-[#DFE7F1] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                  >
                    <div className="flex gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-[22px] ${reward.bg}`}
                      >
                        {reward.icon}
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-[22px] font-black tracking-[-0.03em] text-[#1E2B36]">
                            {reward.title}
                          </h3>

                          {reward.badge && (
                            <div className="rounded-full bg-[#D9FFE7] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#00A63E]">
                              {reward.badge}
                            </div>
                          )}
                        </div>

                        <p className="mt-3 text-[15px] leading-[1.8] text-[#6B7280]">
                          {reward.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT DASHBOARD */}
            <div className="rounded-[34px] border border-[#E1E8F2] bg-white p-7 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8">
              {/* TOP */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="text-[13px] font-semibold text-[#7B8798]">
                    Arjun Sharma • Grade 7
                  </div>

                  <div className="mt-3 text-[56px] font-black leading-none tracking-[-0.05em] text-[#14267A]">
                    1,840
                  </div>
                </div>

                <div className="rounded-full bg-[#14267A] px-4 py-2 text-[12px] font-bold text-white">
                  Level 7 — Budgeting
                </div>
              </div>

              {/* XP */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-[12px] font-semibold text-[#6B7280]">
                  <span>Current XP</span>

                  <span>2,400 XP → Level 8</span>
                </div>

                <div className="mt-3 h-[10px] overflow-hidden rounded-full bg-[#E5EAF2]">
                  <div className="h-full w-[76%] rounded-full bg-[linear-gradient(90deg,#00C853_0%,#1E63D5_100%)]" />
                </div>
              </div>

              {/* BADGES */}
              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "🏆 Olympiad Qualifier",
                  "💰 Budget Master",
                  "🎯 Goal Achiever",
                  "🔥 21-Day Streak",
                ].map((badge) => (
                  <div
                    key={badge}
                    className="rounded-full border border-[#DDE5EF] bg-[#F8FBFF] px-4 py-2 text-[12px] font-semibold text-[#334155]"
                  >
                    {badge}
                  </div>
                ))}
              </div>

              {/* WEEK */}
              <div className="mt-10">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1E63D5]">
                  This Week’s Streak
                </div>

                <div className="mt-5 flex gap-2">
                  {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                    <div
                      key={day + index}
                      className={`flex h-10 w-10 items-center justify-center rounded-xl text-[13px] font-bold ${
                        index !== 6
                          ? "bg-[#163EA8] text-white"
                          : "bg-[#E5EAF2] text-[#6B7280]"
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>

              {/* STATS */}
              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  {
                    value: "18",
                    label: "Projects Done",
                  },
                  {
                    value: "94%",
                    label: "Avg Score",
                  },
                  {
                    value: "21",
                    label: "Day Streak",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[20px] border border-[#E3EAF3] bg-[#F9FBFF] px-4 py-5 text-center"
                  >
                    <div className="text-[30px] font-black tracking-[-0.04em] text-[#14267A]">
                      {item.value}
                    </div>

                    <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#7B8798]">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS SECTION */}
      <section className="overflow-hidden bg-[linear-gradient(135deg,#08156F_0%,#0A1A8C_55%,#091C9C_100%)] py-20 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          {/* TOP */}
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
              <div className="h-2 w-2 rounded-full bg-[#00E676]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9FD0FF]">
                Events Ecosystem
              </span>
            </div>

            <h2 className="mt-6 text-[42px] font-black leading-[0.98] tracking-[-0.05em] text-white sm:text-[58px]">
              Learning Meets{" "}
              <span className="text-[#FFD600]">Competition.</span>
            </h2>

            <p className="mt-6 max-w-[640px] text-[17px] leading-[1.9] text-white/55">
              Three tiers of experiential events transform financial learning
              into demonstrated capability — in front of peers, experts, and
              industry leaders.
            </p>
          </div>

          {/* EVENT CARDS */}
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {eventTiers.map((tier) => (
              <div
                key={tier.number}
                className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md"
              >
                {/* BG NUMBER */}
                <div className="absolute bottom-2 right-5 text-[100px] font-black leading-none tracking-[-0.06em] text-white/[0.04]">
                  {tier.number}
                </div>

                {/* TOP */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#1E63D5_0%,#0D47A1_100%)] text-[18px] font-black text-white shadow-[0_12px_30px_rgba(30,99,213,0.3)]">
                  {tier.number}
                </div>

                <div className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FFD600]">
                  {tier.label}
                </div>

                <h3 className="mt-4 text-[34px] font-black tracking-[-0.04em] text-white">
                  {tier.title}
                </h3>

                <p className="mt-5 text-[15px] leading-[1.9] text-white/60">
                  {tier.description}
                </p>

                {/* LIST */}
                <div className="mt-7 space-y-4">
                  {tier.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-2 h-[7px] w-[7px] rounded-full bg-[#00E676]" />

                      <p className="text-[14px] leading-[1.8] text-white/70">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
