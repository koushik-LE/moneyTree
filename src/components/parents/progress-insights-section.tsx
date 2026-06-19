const behaviourMetrics = [
  {
    label: "Asks about prices",
    value: 91,
    color: "bg-[#00C853]",
  },
  {
    label: "Saves before spending",
    value: 84,
    color: "bg-[#1E63D8]",
  },
  {
    label: "Resists impulse buys",
    value: 78,
    color: "bg-[#6D28D9]",
  },
  {
    label: "Discusses money openly",
    value: 88,
    color: "bg-[#009688]",
  },
  {
    label: "Questions value of purchases",
    value: 72,
    color: "bg-[#F59E0B]",
  },
];

const engagementMetrics = [
  {
    label: "Dashboard",
    value: "Daily",
    width: "w-[92%]",
    color: "bg-[#1E63D8]",
  },
  {
    label: "Validate",
    value: "Weekly",
    width: "w-[82%]",
    color: "bg-[#00C853]",
  },
  {
    label: "Messaging",
    value: "Monthly",
    width: "w-[63%]",
    color: "bg-[#6D28D9]",
  },
  {
    label: "Resources",
    value: "Monthly",
    width: "w-[72%]",
    color: "bg-[#00A896]",
  },
];

export function ProgressInsightsSection() {
  return (
    <section className="bg-[#F3F7FB] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-[720px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D8E5F5] bg-[#F7FBFF] px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-[#00C853]" />

            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#1E63D8]">
              Progress & Data
            </span>
          </div>

          <h2 className="mt-6 text-[44px] font-black leading-[0.95] tracking-[-0.05em] text-[#1D2B36] sm:text-[56px] lg:text-[66px]">
            See the Change
            <br />
            <span className="text-[#1E63D8]">Happening.</span>
          </h2>

          <p className="mt-7 max-w-[620px] text-[17px] leading-[1.9] text-[#6B7A8C]">
            MoneyTreeCY tracks more than XP. It tracks the behaviour change
            parents actually care about — in language they can understand.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          {/* LEFT CARD */}
          <div className="rounded-[30px] border border-[#DFE7F2] bg-white p-7 shadow-[0_15px_45px_rgba(15,35,95,0.06)] sm:p-9">
            {/* Badge */}
            <div className="inline-flex rounded-full bg-[#EEF5FF] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#1E63D8]">
              Behaviour Change
            </div>

            <h3 className="mt-5 text-[30px] font-black tracking-[-0.04em] text-[#132A67]">
              What Parents Notice at 3 Months
            </h3>

            <p className="mt-4 max-w-[620px] text-[15px] leading-[1.9] text-[#6C7A89]">
              We survey parents 3 months after enrolment. These are the changes
              they report most frequently — unprompted.
            </p>

            {/* Metrics */}
            <div className="mt-10 space-y-6">
              {behaviourMetrics.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <span className="text-[14px] font-semibold text-[#3B4C63]">
                      {item.label}
                    </span>

                    <span className="text-[13px] font-black text-[#132A67]">
                      {item.value}%
                    </span>
                  </div>

                  <div className="h-[8px] overflow-hidden rounded-full bg-[#E6EDF6]">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-[30px] border border-[#DFE7F2] bg-white p-7 shadow-[0_15px_45px_rgba(15,35,95,0.06)] sm:p-9">
            {/* Badge */}
            <div className="inline-flex rounded-full bg-[#F3FFF4] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#00A63E]">
              Outcome
            </div>

            <h3 className="mt-5 text-[28px] font-black tracking-[-0.04em] text-[#132A67]">
              Parent Confidence Score
            </h3>

            <p className="mt-4 text-[15px] leading-[1.9] text-[#6C7A89]">
              How confident are you that your child will make better financial
              decisions as an adult? Measured before and after 6 months.
            </p>

            {/* Main Stat */}
            <div className="mt-8 rounded-[24px] bg-[#F5F9FF] px-8 py-10 text-center">
              <div className="text-[64px] font-black leading-none tracking-[-0.05em] text-[#00B94D]">
                +61%
              </div>

              <p className="mt-4 text-[15px] leading-[1.7] text-[#6B7A8C]">
                Average increase in parent confidence
                <br />
                after 6 months
              </p>
            </div>

            {/* Bottom Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                {
                  value: "94%",
                  label: "Would recommend",
                },
                {
                  value: "3mo",
                  label: "To first visible change",
                },
                {
                  value: "4.9/5",
                  label: "Portal satisfaction",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[20px] border border-[#E4ECF5] bg-[#FBFDFF] px-4 py-5 text-center"
                >
                  <div className="text-[28px] font-black tracking-[-0.04em] text-[#132A67]">
                    {item.value}
                  </div>

                  <p className="mt-2 text-[12px] leading-[1.6] text-[#7A8796]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Engagement */}
          <div className="rounded-[30px] border border-[#DFE7F2] bg-white p-7 shadow-[0_15px_45px_rgba(15,35,95,0.06)] sm:p-9">
            <div className="inline-flex rounded-full bg-[#F4EEFF] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#7C3AED]">
              Engagement
            </div>

            <h3 className="mt-5 text-[30px] font-black tracking-[-0.04em] text-[#132A67]">
              How Parents Use the Portal
            </h3>

            <p className="mt-4 text-[15px] leading-[1.9] text-[#6C7A89]">
              Most parents check in 2—3 times per week. Validation typically
              takes under 3 minutes.
            </p>

            <div className="mt-10 space-y-6">
              {engagementMetrics.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[14px] font-semibold text-[#3B4C63]">
                      {item.label}
                    </span>

                    <span className="text-[13px] font-bold text-[#132A67]">
                      {item.value}
                    </span>
                  </div>

                  <div className="h-[8px] overflow-hidden rounded-full bg-[#E7EDF6]">
                    <div
                      className={`h-full rounded-full ${item.color} ${item.width}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sibling Effect */}
          <div className="rounded-[30px] border border-[#DFE7F2] bg-white p-7 shadow-[0_15px_45px_rgba(15,35,95,0.06)] sm:p-9">
            <div className="inline-flex rounded-full bg-[#FFF4E8] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#F59E0B]">
              Sibling Effect
            </div>

            <h3 className="mt-5 text-[30px] font-black tracking-[-0.04em] text-[#132A67]">
              When Siblings Both Enrol
            </h3>

            <p className="mt-4 text-[15px] leading-[1.9] text-[#6C7A89]">
              Families who enrol more than one child see dramatically faster
              behaviour change in both — driven by healthy competition and
              shared family vocabulary around money.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">
              <div className="rounded-[24px] bg-[#F6FBFF] px-6 py-8 text-center">
                <div className="text-[54px] font-black leading-none tracking-[-0.05em] text-[#00B94D]">
                  2×
                </div>

                <p className="mt-3 text-[14px] leading-[1.7] text-[#6C7A89]">
                  Faster project completion
                </p>
              </div>

              <div className="rounded-[24px] bg-[#F6FBFF] px-6 py-8 text-center">
                <div className="text-[54px] font-black leading-none tracking-[-0.05em] text-[#00B94D]">
                  +40%
                </div>

                <p className="mt-3 text-[14px] leading-[1.7] text-[#6C7A89]">
                  More parent engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
