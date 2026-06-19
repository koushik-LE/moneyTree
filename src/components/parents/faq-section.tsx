"use client";

const faqs = [
  {
    question: "How much time does the Parent Portal require from me each week?",
    answer:
      "Most parents spend around 10–15 minutes weekly reviewing reflections, validating behavioural activities, and checking progress updates.",
  },
  {
    question: "Will I receive updates on my child's progress?",
    answer:
      "Yes. Through the Parent Portal, you can track completed projects, view progress across levels, and receive notifications when your review or validation is needed.",
  },
  {
    question: "How do I enrol my child?",
    answer:
      "You can enrol your child directly through MoneyTreeCY's Home Enrolment option. Once registered, you'll receive access to the Parent Portal and your child can begin their learning journey immediately.",
  },
  {
    question: "Do I need any financial expertise to help my child?",
    answer:
      "No. MoneyTreeCY is designed for all parents, regardless of their financial background. The Parent Portal provides simple guidance, explanations, and conversation prompts.",
  },
  {
    question: "What age groups does MoneyTreeCY support?",
    answer:
      "MoneyTreeCY is designed for children aged 3–17, with a structured curriculum that grows with your child. Each level is age-appropriate and progressively builds financial decision-making skills.",
  },
  {
    question: "What devices can my child use to access MoneyTreeCY?",
    answer:
      "MoneyTreeCY can be accessed on Android and iOS smartphones, allowing students to learn anytime and anywhere through their mobile device.",
  },
  {
    question: "What will my child learn in MoneyTreeCY?",
    answer:
      "Students learn budgeting, saving, investing, entrepreneurship, responsible spending, financial planning, and practical money management through real-world projects and activities.",
  },
  {
    question:
      "How is MoneyTreeCY different from traditional financial literacy programs?",
    answer:
      "Most programs focus on knowledge. MoneyTreeCY focuses on behaviour. Students learn through projects, reflection, parent validation, and real-life application.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-[#F4F7FB] py-14 lg:py-16">
      <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
        {/* HEADER */}
        <div className="max-w-[560px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D8E4F7] bg-[#EEF5FF] px-3 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-[#00C853]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#1E63D8]">
              FAQ
            </span>
          </div>

          <h2 className="mt-4 text-[34px] font-black leading-[1] tracking-[-0.04em] text-[#1D2B36] md:text-[54px]">
            Questions <span className="text-[#1E63D8]">Parents Ask.</span>
          </h2>

          <p className="mt-4 max-w-[520px] text-[14px] leading-7 text-[#708090]">
            Answered clearly — because you deserve straight answers before you
            commit your child's time to anything.
          </p>
        </div>

        {/* FAQ GRID */}
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="
                rounded-[22px]
                border
                border-[#DCE5F2]
                bg-[#F7FAFF]
                p-5
                transition-all
                duration-300
                hover:border-[#C8D8F0]
                hover:shadow-[0_10px_30px_rgba(15,23,42,0.05)]
              "
            >
              <div className="flex items-start gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#163E9C] text-[11px] font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="text-[15px] font-bold leading-6 text-[#163E9C]">
                  {faq.question}
                </h3>
              </div>

              <div className="mt-4 h-px w-full bg-[#E4ECF7]" />

              <p className="mt-4 text-[13px] leading-7 text-[#708090]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#0B1F8A_0%,#1565D8_100%)] px-8 py-10 lg:px-12 lg:py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* LEFT */}
            <div className="max-w-[560px]">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
                Start Today
              </div>

              <h3 className="mt-3 text-[32px] font-black leading-[1] text-white md:text-[48px]">
                Give Your Child a <span className="text-[#FFD600]">Real</span>
                <br />
                Financial Education.
              </h3>

              <p className="mt-5 text-[14px] leading-7 text-white/75">
                Join families building lifelong financial habits through
                structured lessons, real-world projects, and parent involvement.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="h-12 rounded-xl bg-[#FFD600] px-7 text-[14px] font-bold text-[#111827] transition-all duration-300 hover:scale-[1.02]">
                Enrol Your Child →
              </button>

              <button className="h-12 rounded-xl border border-white/20 px-7 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-white/10">
                Book Info Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
