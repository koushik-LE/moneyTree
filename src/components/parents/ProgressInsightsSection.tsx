const stories = [
  {
    quote:
      "I was sceptical at first. My son is 9 — how much can he really understand about money? After three months, he’s the one stopping me at the supermarket and saying ‘Mum, that’s not on the list.’ I didn’t teach him that. MoneyTreeCY did.",
    name: "Maria Georgiou",
    role: "Mother of Nikos, 9 · Nicosia",
    avatar: "👩",
    featured: true,
  },
  {
    quote:
      "The validation feature is what sold me. I’m not just being informed — I’m being included. When I sit with my daughter and we go through the reflect prompt together, that five minutes is worth more than any lesson she attends.",
    name: "Christos Papadopoulos",
    role: "Father of Sofia, 13 · Limassol",
    avatar: "👨",
  },
  {
    quote:
      "I’ve enrolled both my boys. The older one started saying things like ‘that’s not good value’ when we were shopping. The younger one picked it up from him. Something has genuinely shifted in our house around money conversations.",
    name: "Irene Theocharous",
    role: "Mother of two · Larnaca",
    avatar: "👩",
  },
  {
    quote:
      "My daughter brought home her 30-day saving tracker and showed me every entry she’d made. The level of detail and the honesty about the moments she struggled — that’s not something a worksheet produces. That’s real learning.",
    name: "Andreas Constantinou",
    role: "Father of Anna, 11 · Paphos",
    avatar: "👨",
  },
  {
    quote:
      "The parent portal is genuinely well designed. I check it on my commute. I can see exactly what lesson they’re on, what project is due, and what’s coming up. It’s the first school platform I’ve actually used voluntarily.",
    name: "Elena Nikolaou",
    role: "Mother of Kyros, 14 · Nicosia",
    avatar: "👩",
  },
  {
    quote:
      "We went to the Family Finance Day event together. Watching my son stand at his stall, price his products, handle transactions — I nearly cried. He was so confident. That’s what this programme builds: confidence with money, not just knowledge.",
    name: "Despina Kleanthous",
    role: "Mother of Pavlos, 12 · Limassol",
    avatar: "👩",
  },
];

export function ParentStoriesSection() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(135deg,#071B78_0%,#0B1F82_50%,#112B97_100%)] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-[760px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0B7B7B] bg-[#073B66] px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-[#00D26A]" />

            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-white">
              Parent Stories
            </span>
          </div>

          <h2 className="mt-6 text-[44px] font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-[56px] lg:text-[66px]">
            What Parents <span className="text-[#FFD600]">Actually Say.</span>
          </h2>

          <p className="mt-7 max-w-[620px] text-[17px] leading-[1.9] text-white/60">
            Not cherry-picked — these are representative responses from our
            post-semester parent survey.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {stories.map((story, index) => (
            <div
              key={story.name}
              className={`group relative overflow-hidden rounded-[28px] border p-7 transition-all duration-300 hover:-translate-y-1 ${
                story.featured
                  ? "border-[#1D4ED8]/40 bg-[linear-gradient(180deg,#102D8B_0%,#14286E_100%)]"
                  : "border-white/10 bg-white/[0.05]"
              }`}
            >
              {/* Glow */}
              <div className="absolute right-0 top-0 h-[160px] w-[160px] rounded-full bg-white/[0.03] blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* Stars */}
              <div className="relative z-10 flex items-center gap-1 text-[15px] text-white">
                {"★★★★★"}
              </div>

              {/* Quote */}
              <p className="relative z-10 mt-6 text-[15px] italic leading-[2] text-white/75">
                "{story.quote}"
              </p>

              {/* Footer */}
              <div className="relative z-10 mt-10 flex items-center gap-4">
                {/* Avatar */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD84D] text-[22px] shadow-[0_10px_25px_rgba(255,216,77,0.22)]">
                  {story.avatar}
                </div>

                {/* Info */}
                <div>
                  <h4 className="text-[16px] font-black text-white">
                    {story.name}
                  </h4>

                  <p className="mt-1 text-[13px] text-white/50">{story.role}</p>
                </div>
              </div>

              {/* Border Glow */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#FFD600] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
