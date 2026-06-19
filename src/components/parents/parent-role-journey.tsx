"use client";

const journeySteps = [
  {
    step: "STEP 01",
    title: "School Enrols",
    icon: "🏫",
    color: "from-[#163E9C] to-[#1E63D8]",
    description:
      "Your child's school registers with MoneyTreeCY. You receive a parent invitation with login details.",
  },
  {
    step: "STEP 02",
    title: "Set Up Profile",
    icon: "👤",
    color: "from-[#00A63E] to-[#00C853]",
    description:
      "Create your Parent Portal account and link your child's profile. Add multiple children if needed.",
  },
  {
    step: "STEP 03",
    title: "Follow the Journey",
    icon: "📋",
    color: "from-[#00897B] to-[#00BFA5]",
    description:
      "Track lessons, projects and XP earned in real time. Get notified when milestones are completed.",
  },
  {
    step: "STEP 04",
    title: "Validate Projects",
    icon: "✅",
    color: "from-[#5B21E6] to-[#7C3AED]",
    description:
      "Real-world projects require your sign-off. Confirm activities happened and reflect together.",
  },
  {
    step: "STEP 05",
    title: "Watch Them Grow",
    icon: "📈",
    color: "from-[#F59E0B] to-[#FFCC00]",
    description:
      "See behavioural change tracked over time through savings habits and financial confidence.",
  },
];

export function ParentRoleJourney() {
  return (
    <section id="how-it-works" className="bg-[#EEF3F8] py-14 lg:py-16">
      <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
        {/* Header */}
        <div className="max-w-[520px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D9E6F8] bg-white px-3 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-[#00C853]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#1E63D8]">
              Your Role
            </span>
          </div>

          <h2 className="mt-4 text-[34px] font-black leading-[1] tracking-[-0.04em] text-[#1F2D3A] md:text-[48px]">
            You Don't Just Watch.
            <br />
            <span className="text-[#1E63D8]">You're Involved.</span>
          </h2>

          <p className="mt-4 max-w-[500px] text-[14px] leading-7 text-[#6C7A89]">
            MoneyTreeCY is built around the principle that financial habits form
            at home. Parents aren't passengers — they're co-pilots.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Desktop Connector */}
          <div className="absolute left-[8%] right-[8%] top-[20px] hidden h-px bg-[#CFE5D9] lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {journeySteps.map((item) => (
              <div
                key={item.title}
                className="relative flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div
                  className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-[0_8px_20px_rgba(0,0,0,0.12)]`}
                >
                  <span className="text-base">{item.icon}</span>
                </div>

                {/* Step */}
                <div className="mt-3 text-[9px] font-black uppercase tracking-[0.18em] text-[#00C853]">
                  {item.step}
                </div>

                {/* Title */}
                <h3 className="mt-2 text-[18px] font-black text-[#1D2B36]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 max-w-[190px] text-[12px] leading-6 text-[#708090]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
