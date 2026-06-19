"use client";

const marketplaceCards = [
  {
    badge: "🎪 Experiences",
    icon: "🎪",
    title: "Events & Experiences",
    description:
      "Use your reward wallet to access live financial learning events and exclusive sessions.",
    color: "from-[#163C9B] to-[#2F64E5]",
    dot: "bg-[#163C9B]",
    items: [
      "Financial Expos",
      "Summits",
      "Workshops",
      "Special Sessions",
    ],
  },
  {
    badge: "🏆 Compete",
    icon: "🏆",
    title: "Competitions",
    description:
      "Register for leagues, challenges and national championships using earned rewards.",
    color: "from-[#147A27] to-[#2FC84A]",
    dot: "bg-[#2FC84A]",
    items: [
      "Challenge Registrations",
      "League Entries",
      "National Competitions",
      "Championship Access",
    ],
  },
  {
    badge: "🛍 Merch",
    icon: "👕",
    title: "Merchandise",
    description:
      "Redeem rewards for exclusive MoneyTreeCY branded gear and collectibles.",
    color: "from-[#D96A00] to-[#FFBE00]",
    dot: "bg-[#FF9A00]",
    items: [
      "Hoodies",
      "T-Shirts",
      "Stationery",
      "Collectibles",
    ],
  },
  {
    badge: "📖 Learn More",
    icon: "📖",
    title: "Learning Resources",
    description:
      "Unlock premium content, toolkits and curated resources to go deeper.",
    color: "from-[#7A33B9] to-[#B47AD6]",
    dot: "bg-[#A03DD9]",
    items: [
      "Books",
      "Toolkits",
      "Learning Kits",
      "Premium Content",
    ],
  },
];

export default function RewardsMarketplaceSection() {
  return (
    <section className="bg-[#F3F5F9] py-16 lg:py-20">
      <div className="mx-auto max-w-[1180px] px-5">
        {/* Header */}
        <div className="mx-auto max-w-[760px] text-center">
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2F64E5]">
            The Rewards Marketplace
          </div>

          <h2 className="mt-4 text-[34px] font-black leading-[1.05] text-[#243040] md:text-[52px]">
            Turn Learning Into
            <br />
            <span className="text-[#2F64E5] italic">
              Real-World Experiences.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[560px] text-[14px] leading-7 text-[#707D8D]">
            Every reward earned through learning can be spent in our exclusive
            student marketplace. Learners use their rewards wallet to access
            experiences, competitions, events, merchandise and learning
            resources.
          </p>
        </div>

        {/* Workflow */}
        <div className="mt-10 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-[#E4E8F0] bg-white px-5 py-3 text-[11px] font-semibold text-[#556274] shadow-sm">
            <span>📚 LEARN</span>
            <span>↓</span>
            <span>⭐ EARN POINTS</span>
            <span>↓</span>
            <span>₹ CONVERT TO ₹</span>
            <span>↓</span>
            <span>👜 REWARDS WALLET</span>
            <span>↓</span>
            <span>🛒 MARKETPLACE</span>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {marketplaceCards.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-[24px] bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)]"
            >
              {/* Header */}
              <div
                className={`h-[92px] bg-gradient-to-r ${card.color} flex items-center justify-center`}
              >
                <div className="text-[42px]">{card.icon}</div>
              </div>

              {/* Body */}
              <div className="p-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#F6F8FC] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#566375]">
                  {card.badge}
                </div>

                <h3 className="mt-4 text-[24px] font-black text-[#243040]">
                  {card.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#768394]">
                  {card.description}
                </p>

                <div className="mt-5 space-y-3">
                  {card.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 border-b border-[#EEF2F7] pb-3"
                    >
                      <div
                        className={`h-[5px] w-[5px] rounded-full ${card.dot}`}
                      />
                      <span className="text-[12px] text-[#4B5563]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}