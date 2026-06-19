const validationSteps = [
  {
    number: "1",
    title: "Your child submits evidence",
    description:
      "Photos, notes, receipts, or a structured form are uploaded directly in the app. You get notified immediately with context about what to look for.",
  },
  {
    number: "2",
    title: "You get a reflect prompt",
    description:
      "Not a checkbox — a specific question that prompts a short conversation. 'Has she become more aware of prices?' gives you something real to observe and answer.",
  },
  {
    number: "3",
    title: "You approve or flag",
    description:
      "One tap to approve and award XP. Or flag it — which sends the project back with a note. Your judgement as a parent is what makes the credential credible.",
  },
  {
    number: "4",
    title: "XP and badges are credited",
    description:
      "The moment you approve, XP is added, the badge unlocks, and your child sees the result in real time. The reward loop closes with you — not the algorithm.",
  },
];

export function ProjectValidationSection() {
  return (
    <section className="bg-[#F4F7FB] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-12">
        {/* LEFT MOCKUP */}
        <div className="relative">
          {/* Shadow Glow */}
          <div className="absolute left-10 top-10 h-[280px] w-[280px] rounded-full bg-[#1E63D8]/10 blur-3xl" />

          {/* Card */}
          <div className="relative overflow-hidden rounded-[28px] border border-[#DCE6F3] bg-white shadow-[0_25px_60px_rgba(15,35,95,0.10)]">
            {/* Header */}
            <div className="flex items-center justify-between bg-[linear-gradient(90deg,#0B2C8B_0%,#1E63D8_100%)] px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00C853] text-white shadow-lg">
                  ✅
                </div>

                <div>
                  <p className="text-[15px] font-bold text-white">
                    Validate Project
                  </p>

                  <p className="mt-1 text-[12px] text-white/70">
                    30-Day Saving Tracker Challenge
                  </p>
                </div>
              </div>

              {/* XP */}
              <div className="rounded-full bg-white/10 px-4 py-2 text-right backdrop-blur-xl">
                <p className="text-[13px] font-black text-[#FFD600]">
                  ⚡ +120 XP
                </p>

                <p className="mt-1 text-[11px] text-white/70">
                  Credited to Nikos
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-5 p-6">
              {/* Submission */}
              <div className="rounded-[20px] border border-[#DFE8F3] bg-[#F8FBFF] p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#143B96] text-white">
                    💰
                  </div>

                  <div className="flex-1">
                    <h4 className="text-[17px] font-black text-[#142B67]">
                      30-Day Saving Tracker
                    </h4>

                    <p className="mt-2 text-[13px] leading-[1.8] text-[#6F7E8F]">
                      Submitted by Nikos • Level 6 • 2 hours ago
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {[
                        "📷 3 photos added",
                        "📝 2 notes",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-full border border-[#D8E5F5] bg-white px-3 py-1 text-[11px] font-semibold text-[#4B5D78]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Reflection */}
              <div className="rounded-[20px] border border-[#DFE8F3] bg-white p-5">
                <div className="inline-flex items-center rounded-full bg-[#EEF5FF] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#1E63D8]">
                  Your Reflect Prompt
                </div>

                <p className="mt-4 text-[14px] leading-[1.9] text-[#566578]">
                  Has Nikos shown more conscious, reasoning-based spending or
                  saving behaviour since starting this project? Can he explain
                  why he chose to save instead of spend in at least one real
                  situation?
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <button className="flex-1 rounded-[14px] bg-[#00C853] px-5 py-4 text-[14px] font-black text-white shadow-[0_15px_35px_rgba(0,200,83,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00B44B]">
                  Approve & Award XP
                </button>

                <button className="rounded-[14px] border border-[#DCE5F2] bg-white px-5 py-4 text-[14px] font-semibold text-[#66768A] transition-all duration-300 hover:border-[#C9D9EC]">
                  Flag
                </button>
              </div>

              {/* Footer */}
              <div className="flex items-center gap-3 rounded-[18px] border border-[#E7EEF7] bg-[#FFFDF7] px-4 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF3C4] text-[18px]">
                  🏅
                </div>

                <div>
                  <p className="text-[14px] font-black text-[#142B67]">
                    Level 7 Unlocked
                  </p>

                  <p className="mt-1 text-[12px] text-[#6C7A89]">
                    2 projects to go
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D6E5F7] bg-[#F8FBFF] px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-[#00C853]" />

            <span className="text-[11px] font-black uppercase tracking-[0.24em] text-[#1E63D8]">
              Your Responsibility
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-[44px] font-black leading-[0.95] tracking-[-0.05em] text-[#1F2D3A] sm:text-[56px] lg:text-[66px]">
            The{" "}
            <span className="text-[#1E63D8]">Validation</span>{" "}
            That
            <br />
            Makes It{" "}
            <span className="text-[#00B94D]">Real.</span>
          </h2>

          {/* Paragraph */}
          <p className="mt-7 max-w-[560px] text-[17px] leading-[1.9] text-[#6B7B8D]">
            Every project at MoneyTreeCY requires a parent to confirm it
            happened. This isn’t admin — it’s the most important moment in the
            process.
          </p>

          {/* Steps */}
          <div className="mt-12 space-y-7">
            {validationSteps.map((item) => (
              <div
                key={item.number}
                className="flex items-start gap-5"
              >
                {/* Number */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#143B96] text-[15px] font-black text-white shadow-[0_12px_24px_rgba(20,59,150,0.18)]">
                  {item.number}
                </div>

                {/* Content */}
                <div className="flex-1 border-b border-[#E1E9F3] pb-7">
                  <h3 className="text-[22px] font-black tracking-[-0.03em] text-[#132A67]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-[1.9] text-[#6C7A89]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}