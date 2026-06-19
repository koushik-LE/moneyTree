"use client";

const tiers = [
  {
    number: "01",
    label: "Tier 1 · School Level",
    title: "Financial Expo",
    description:
      "A controlled financial ecosystem where students experience pricing, selling, spending, negotiation, and planning in real time.",
    items: [
      "Financial stalls & simulations",
      "Project showcase",
      "Budgeting games",
      "Market transactions",
      "Team challenges",
    ],
  },
  {
    number: "02",
    label: "Tier 2 · District / State",
    title: "Regional Competition",
    description:
      "Advanced learners participate in financial reasoning tasks, real-world case challenges, and strategic simulations evaluated by experts.",
    items: [
      "Decision challenge rounds",
      "Case-based simulations",
      "Expert interactions",
      "Collaborative reasoning tasks",
      "Comparative evaluation",
    ],
  },
  {
    number: "03",
    label: "Tier 3 · National",
    title: "National Financial Summit",
    description:
      "The highest-performing students engage in systems-level thinking, strategic simulations, and policy-oriented financial reasoning.",
    items: [
      "Strategic financial simulations",
      "Policy-oriented reasoning",
      "Risk evaluation scenarios",
      "Financial case solving",
      "National recognition",
    ],
  },
];

export default function EventsEcosystemSection() {
  return (
    <section className="relative overflow-hidden bg-[#081C97]">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(70,110,255,0.18),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A9C8FF]">
            Events Ecosystem
          </p>

          <h2 className="mt-4 text-[34px] font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-[46px] lg:text-[58px]">
            A National Financial
            <br />
            <span className="text-[#FFD600]">
              Literacy Ecosystem
            </span>
          </h2>

          <p className="mt-5 max-w-[620px] text-[14px] leading-8 text-[#B7C3F5] sm:text-[15px]">
            Learning extends beyond the app into large-scale experiential
            events designed to showcase financial thinking,
            decision-making, and real-world application.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.number}
              className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              {/* Background Number */}
              <span className="absolute right-4 top-2 text-[60px] font-black leading-none text-white/5">
                {tier.number}
              </span>

              {/* Label */}
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#FFD600]">
                {tier.label}
              </p>

              {/* Title */}
              <h3 className="mt-3 text-[24px] font-bold text-white">
                {tier.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[13px] leading-7 text-[#B7C3F5]">
                {tier.description}
              </p>

              {/* Divider */}
              <div className="my-5 h-px bg-white/10" />

              {/* Features */}
              <div className="space-y-3">
                {tier.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-[#00E676]" />

                    <span className="text-[13px] text-[#D7E1FF]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}