"use client";

import {
  BookOpen,
  Clapperboard,
  CheckSquare,
  Rocket,
  RefreshCcw,
} from "lucide-react";

import { Card } from "@/components/ui/card";

const lessonSegments = [
  {
    number: "01",
    icon: BookOpen,
    title: "Learn",
    description:
      "Structured concept learning with guided explanations, examples and micro-practice.",
  },
  {
    number: "02",
    icon: Clapperboard,
    title: "Watch",
    description:
      "Story-driven videos with relatable characters and financial situations.",
  },
  {
    number: "03",
    icon: CheckSquare,
    title: "Assess",
    description:
      "LOT, MOT and HOT questions measuring understanding and application.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Apply",
    description:
      "Real-world activities including budgeting, saving and simulations.",
  },
  {
    number: "05",
    icon: RefreshCcw,
    title: "Parent Evaluation",
    description:
      "Behavioural validation, reasoning and real-life decision quality.",
  },
];

export default function ArchitectureSection() {
  return (
    <section className="bg-[#F5F8FC]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12 lg:py-10">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#2163CC]">
            Learning Architecture
          </p>

          <h2 className="mt-4 text-[34px] font-black leading-[1.05] tracking-[-0.04em] text-[#1F2A37] sm:text-[44px] lg:text-[58px]">
            Every Lesson.
            <span className="text-[#2163CC]"> Five Segments.</span>
          </h2>

          <p className="mt-5 max-w-[560px] text-[14px] leading-8 text-[#6B7280] sm:text-[15px]">
            A carefully designed architecture that transforms financial concepts
            into real behavioural capability.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {lessonSegments.map((segment) => {
            const Icon = segment.icon;

            return (
              <Card
                key={segment.number}
                className="relative overflow-hidden rounded-[22px] border border-[#E7EDF5] bg-white p-5 shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Number */}
                <span className="absolute left-4 top-3 text-[38px] font-black leading-none tracking-[-0.04em] text-[#E9EDF2]">
                  {segment.number}
                </span>

                {/* Icon */}
                <div className="relative z-10 mt-10 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1748B8]">
                  <Icon className="h-4 w-4 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-4">
                  <h3 className="text-[18px] font-bold text-[#1D3FAE]">
                    {segment.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-[#6B7280]">
                    {segment.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
