"use client";

const portalCards = [
  {
    title: "Live Progress Dashboard",
    badge: "REAL-TIME",
    icon: "📊",
    highlighted: true,
    tag: "CORE FEATURE",
    description:
      "See exactly where your child is in the curriculum — which level, which project, how much XP they've earned, and what's coming next.",
    points: [
      "Live XP tracker with milestone alerts",
      "Level completion certificates sent instantly",
      "Side-by-side comparison of siblings",
      "Weekly digest email every Sunday",
    ],
  },
  {
    title: "Project Validation",
    badge: "YOUR JOB",
    icon: "✅",
    description:
      "Real-world projects only count when you confirm they happened. Your validation is what makes MoneyTreeCY different.",
    points: [
      "One-tap approve or flag for follow-up",
      "Guided reflection prompts",
      "Evidence upload support",
      "Conversation starters built in",
    ],
  },
  {
    title: "Smart Notifications",
    badge: "STAY INFORMED",
    icon: "🔔",
    description:
      "Get the right alert at the right moment — when projects, levels, or events matter.",
    points: [
      "Project submission alerts",
      "Level-up celebrations",
      "Event reminders",
      "Daily, weekly or instant updates",
    ],
  },
  {
    title: "Event Registration",
    badge: "EVENTS",
    icon: "📅",
    description:
      "Discover, filter, and register for workshops, seminars, and Olympiads.",
    points: [
      "Personalised recommendations",
      "One-click family registration",
      "Calendar integration",
      "Post-event recap and XP credit",
    ],
  },
  {
    title: "Parent Resource Hub",
    badge: "RESOURCES",
    icon: "📚",
    description:
      "Guides and resources to help reinforce financial lessons at home.",
    points: [
      "Money conversation guides",
      "Project support sheets",
      "Research summaries",
      "Monthly parent newsletter",
    ],
  },
];

export function ParentPortalSection() {
  return (
    <section id="parent-portal" className="bg-[#EEF3F8] py-14 lg:py-16">
      <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
        {/* Header */}
        <div className="max-w-[540px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D7E3F5] bg-white px-3 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-[#00C853]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#1E63D8]">
              Parent Portal
            </span>
          </div>

          <h2 className="mt-4 text-[34px] font-black leading-[1] tracking-[-0.04em] text-[#1D2B36] md:text-[48px]">
            Everything You Need
            <br />
            to Stay <span className="text-[#1E63D8]">Connected.</span>
          </h2>

          <p className="mt-4 max-w-[520px] text-[14px] leading-7 text-[#6C7A89]">
            The Parent Portal is your window into your child's financial
            education — designed for parents who care deeply but are short on
            time.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {portalCards.map((card) => (
            <div
              key={card.title}
              className={`group relative overflow-hidden rounded-[22px] border transition-all duration-300 hover:-translate-y-1 ${
                card.highlighted
                  ? "border-[#163E9C] bg-gradient-to-b from-[#0C2D8B] to-[#0A256F] shadow-[0_16px_40px_rgba(13,52,149,0.15)]"
                  : "border-[#DFE7F1] bg-white"
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 pt-5">
                <div
                  className={`rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] ${
                    card.highlighted
                      ? "bg-[#1A5DE0] text-white"
                      : "bg-[#F2FFF4] text-[#18A957] border border-[#D8ECD9]"
                  }`}
                >
                  {card.badge}
                </div>

                {card.tag && (
                  <div className="rounded-full bg-[#00C853] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white">
                    {card.tag}
                  </div>
                )}
              </div>

              {/* Icon */}
              <div className="px-5 pt-4 text-[28px]">{card.icon}</div>

              {/* Content */}
              <div className="px-5 pb-5 pt-3">
                <h3
                  className={`text-[20px] font-black ${
                    card.highlighted ? "text-white" : "text-[#132A67]"
                  }`}
                >
                  {card.title}
                </h3>

                <p
                  className={`mt-3 text-[13px] leading-6 ${
                    card.highlighted ? "text-white/70" : "text-[#6C7A89]"
                  }`}
                >
                  {card.description}
                </p>

                <div className="mt-5 space-y-2.5">
                  {card.points.map((point) => (
                    <div key={point} className="flex items-start gap-2.5">
                      <div className="mt-[7px] h-[5px] w-[5px] rounded-full bg-[#00C853]" />

                      <p
                        className={`text-[12px] leading-5 ${
                          card.highlighted ? "text-white/75" : "text-[#5E6B79]"
                        }`}
                      >
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Glow */}
              {card.highlighted && (
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-white/5 blur-3xl" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
