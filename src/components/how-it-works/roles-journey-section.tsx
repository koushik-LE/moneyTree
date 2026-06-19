"use client";

const tabs = [
  {
    label: "Student",
    icon: "🎓",
    active: true,
  },
  {
    label: "Parent",
    icon: "👨‍👩‍👧",
  },
];

const journeySteps = [
  {
    number: "1",
    title: "Start a New Lesson",
    description:
      "Open the app, enter the current level, and begin the five-segment lesson. Each lesson is self-paced and designed for 20–30 minutes of focused engagement.",
    tag: "📱 Student App",
  },
  {
    number: "2",
    title: "Complete All Five Segments",
    description:
      "Progress through Learn → Watch → Assess → Apply → Reflect. Each segment must be completed before unlocking the next.",
    tag: "🧠 5-Segment Flow",
  },
  {
    number: "3",
    title: "Complete the Real-World Project",
    description:
      "Every level includes a real-world activity — market visit, budget plan, saving tracker, or simulation submitted through the app.",
    tag: "🌍 Real World Apply",
  },
  {
    number: "4",
    title: "Earn XP, Badges & Streaks",
    description:
      "Each completed segment, lesson, and project earns XP and unlocks badges.",
    tag: "⚡ Gamification",
  },
  {
    number: "5",
    title: "Qualify for Events and National Summits",
    description:
      "High performers unlock invitations to School Expos, District Competitions, and National Olympiads.",
    tag: "🏆 Events Tier",
  },
];

const features = [
  "Self-paced, level-appropriate learning",
  "Engaging five-segment lesson flow",
  "Real-world activities and projects",
  "XP, badges, streaks, and rewards",
  "Competitive Olympiad pathway",
];

export default function RolesJourneySection() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(135deg,#091774_0%,#0B1F8A_55%,#0A2399_100%)] py-14 lg:py-16">
      <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
        {/* HEADER */}
        <div className="max-w-[520px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-[#00E676]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#9FD0FF]">
              Roles & Journeys
            </span>
          </div>

          <h2 className="mt-4 text-[34px] font-black leading-[1] tracking-[-0.04em] text-white md:text-[48px]">
            Three Roles.
            <br />
            <span className="text-[#FFD600]">
              One Shared Journey.
            </span>
          </h2>

          <p className="mt-4 max-w-[520px] text-[14px] leading-7 text-white/55">
            MoneyTreeCY is designed so every stakeholder — student, parent, and
            school — has a clear, structured role that reinforces the others.
          </p>
        </div>

        {/* TABS */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold transition-all ${
                tab.active
                  ? "bg-[#00C853] text-[#08156F]"
                  : "border border-white/10 bg-white/5 text-white/70"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* LEFT TIMELINE */}
          <div className="relative">
            <div className="absolute left-[15px] top-4 h-[calc(100%-35px)] w-px bg-white/10" />

            <div className="space-y-5">
              {journeySteps.map((step) => (
                <div
                  key={step.number}
                  className="relative flex gap-4"
                >
                  {/* NUMBER */}
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#00C853] to-[#00E676] text-[11px] font-black text-[#071A72]">
                    {step.number}
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 border-b border-white/10 pb-5">
                    <h3 className="text-[18px] font-black text-white">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-6 text-white/55">
                      {step.description}
                    </p>

                    <div className="mt-3 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white/80">
                      {step.tag}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="h-fit rounded-[24px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            {/* ICON */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E63D5] to-[#0D47A1] text-xl">
              🎓
            </div>

            <div className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9FD0FF]">
              Primary User
            </div>

            <h3 className="mt-2 text-[28px] font-black text-white">
              The Student
            </h3>

            {/* QUOTE */}
            <div className="mt-5 border-l-2 border-[#00E676] pl-4">
              <p className="text-[13px] leading-6 text-white/70">
                “I don't just learn about money — I actually go to the market,
                track my savings, and make real decisions. It feels like a game
                but I'm genuinely learning.”
              </p>
            </div>

            {/* FEATURES */}
            <div className="mt-5 space-y-3">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3"
                >
                  <div className="mt-2 h-[5px] w-[5px] rounded-full bg-[#00E676]" />

                  <p className="text-[13px] leading-6 text-white/65">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}