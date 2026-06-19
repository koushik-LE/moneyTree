"use client";

const ecosystemCards = [
  {
    id: "01",
    icon: "📱",
    title: "Student App",
    description:
      "The core learning platform where students progress through lessons, complete projects, track XP, and participate in assessments — anytime, anywhere.",
    tags: [
      "12-Level Curriculum",
      "Gamified Progress",
      "XP & Badges",
      "Project Submissions",
    ],
    gradient: "bg-[linear-gradient(135deg,#101F85_0%,#16288D_100%)]",
  },
  {
    id: "02",
    icon: "👨‍👩‍👧",
    title: "Parent Portal",
    description:
      "Parents don't just observe — they actively validate behavioural learning, participate in reflect segments, and reinforce financial habits in everyday life.",
    tags: [
      "Reflect Validation",
      "Progress Dashboard",
      "Activity Prompts",
      "Weekly Reports",
    ],
    gradient: "bg-[linear-gradient(135deg,#2B63C8_0%,#2A59B8_100%)]",
  },
  {
    id: "03",
    icon: "🏆",
    title: "Events & Summits",
    description:
      "A three-tier competitive ecosystem — School Financial Expo, District/State Regional, and the National Financial Olympiad — bringing learning into the real world.",
    tags: [
      "School Expo",
      "District Finals",
      "National Olympiad",
      "Certificates",
    ],
    gradient: "bg-[linear-gradient(135deg,#FFAA16_0%,#F26A00_100%)]",
  },
];

const stats = [
  {
    icon: "📚",
    value: "12",
    label: "Progressive curriculum levels",
  },
  {
    icon: "🌎",
    value: "30+",
    label: "Real-world projects & activities",
  },
  {
    icon: "🧩",
    value: "5",
    label: "Segments per lesson",
  },
  {
    icon: "🎖️",
    value: "3",
    label: "Olympiad tiers",
  },
];

export default function PlatformEcosystemSection() {
  return (
    <section className="bg-[#F4F7FB] py-14 lg:py-16">
      <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
        {/* Header */}
        <div className="max-w-[520px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D8E6FF] bg-[#EEF5FF] px-3 py-1.5">
            <div className="h-2 w-2 rounded-full bg-[#22C55E]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#2D67D8]">
              The Platform
            </span>
          </div>

          <h2 className="mt-4 text-[34px] font-black leading-[1] tracking-[-0.04em] text-[#1F2D3D] md:text-[48px]">
            More Than an App.
            <br />
            <span className="text-[#22A447]">A Full Ecosystem.</span>
          </h2>

          <p className="mt-4 max-w-[500px] text-[14px] leading-7 text-[#6E7B8C]">
            MoneyTreeCY brings together every component needed to develop
            genuine financial behaviour — not just financial knowledge.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {ecosystemCards.map((card) => (
            <div
              key={card.id}
              className={`relative overflow-hidden rounded-[24px] ${card.gradient} p-5 lg:p-6`}
            >
              {/* Number */}
              <div className="absolute right-5 top-3 text-[56px] font-black leading-none text-white/10">
                {card.id}
              </div>

              {/* Icon */}
              <div className="text-xl">{card.icon}</div>

              {/* Content */}
              <div className="relative z-10 mt-5">
                <h3 className="text-[24px] font-black text-white">
                  {card.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-white/70">
                  {card.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[20px] bg-white px-5 py-5 text-center shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
            >
              <div className="text-lg">{stat.icon}</div>

              <div className="mt-2 text-[32px] font-black text-[#132D8A]">
                {stat.value}
              </div>

              <p className="mt-1 text-[11px] text-[#7B8794]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
