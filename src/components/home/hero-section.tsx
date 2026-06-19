"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F8FC]">
      {/* Bottom Gradient Border */}
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid items-center gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1748B8] px-4 py-1.5 shadow-sm">
              <div className="h-2 w-2 rounded-full bg-[#00D26A]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                NEP 2020 Aligned • Grades 1—12
              </span>
            </div>

            {/* Heading */}
            <div className="mt-5">
              <h1 className="max-w-[560px] text-[42px] font-black leading-[0.95] tracking-[-0.05em] text-[#1F2A37] sm:text-[52px] xl:text-[64px]">
                Building
                <br />
                <span className="text-[#2163CC]">Financial Thinkers</span>
                <br />
                <span>for </span>
                <span className="text-[#00C853]">Life</span>
              </h1>
            </div>

            {/* Description */}
            <p className="mt-5 max-w-[560px] text-[15px] leading-7 text-[#70798A] xl:text-[16px]">
              A progressive financial literacy ecosystem helping children
              understand money, decisions, responsibility, and planning through
              real-world projects, simulations, and behavioural learning.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button className="h-[48px] rounded-[14px] bg-[#1F63D5] px-6 text-[14px] font-semibold text-white shadow-[0_10px_25px_rgba(31,99,213,0.2)] hover:bg-[#1857BF]">
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Link
                href="#"
                className="flex items-center gap-2 text-[14px] font-medium text-[#6B7280] hover:text-[#1E63D5]"
              >
                <Download className="h-4 w-4" />
                Download App
              </Link>
            </div>

            {/* Features */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              {[
                "12-Level Curriculum",
                "Real-World Projects",
                "Olympiad Ecosystem",
                "Parent-Integrated",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#00C853]" />

                  <span className="text-[13px] text-[#6B7280]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VISUALS */}
          <div className="relative hidden min-h-[480px] items-center justify-center xl:flex">
            {/* LEFT CARD */}
            <Card className="absolute left-[-40px] top-[250px] z-10 w-[140px] rounded-[18px] border border-[#E8EEF5] bg-white p-3 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EEF4FF]">
                📊
              </div>

              <h3 className="mt-3 text-[12px] font-bold text-[#1F2937]">
                Budget Challenge
              </h3>

              <p className="mt-1 text-[10px] text-[#7B8794]">
                Completed · 96 pts
              </p>
            </Card>

            {/* MAIN CARD */}
            <Card className="relative z-20 w-[260px] rounded-[24px] border border-[#E8EEF5] bg-white p-4 shadow-[0_24px_50px_rgba(15,23,42,0.06)]">
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#6B7280]">
                Student Progress Dashboard
              </p>

              <div className="mt-4 flex items-center justify-between gap-2">
                <span className="text-[38px] font-bold leading-none text-[#172B85]">
                  7
                </span>

                <div className="rounded-full border border-[#D8E2F0] px-3 py-1.5">
                  <span className="text-[10px] font-medium text-[#1E3A8A]">
                    Budgeting & Planning
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <div className="h-[5px] w-full overflow-hidden rounded-full bg-[#E5E7EB]">
                  <div className="h-full w-[62%] rounded-full bg-[#00C853]" />
                </div>

                <p className="mt-2 text-[11px] text-[#6B7280]">
                  65% complete — 4 activities remaining
                </p>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                <div className="rounded-xl border border-[#E8EEF5] bg-[#F8FAFD] p-3">
                  <p className="text-[16px] font-bold text-[#172B85]">1,240</p>

                  <p className="mt-1 text-[8px] uppercase text-[#7B8794]">
                    XP Earned
                  </p>
                </div>

                <div className="rounded-xl border border-[#E8EEF5] bg-[#F8FAFD] p-3">
                  <p className="text-[16px] font-bold text-[#172B85]">14</p>

                  <p className="mt-1 text-[8px] uppercase text-[#7B8794]">
                    Projects
                  </p>
                </div>

                <div className="rounded-xl border border-[#E8EEF5] bg-[#F8FAFD] p-3">
                  <p className="text-[16px] font-bold text-[#172B85]">🔥 21</p>

                  <p className="mt-1 text-[8px] uppercase text-[#7B8794]">
                    Day Streak
                  </p>
                </div>
              </div>
            </Card>

            {/* RIGHT CARD */}
            <Card className="absolute right-[-15px] top-[80px] z-10 w-[130px] rounded-[18px] border border-[#E8EEF5] bg-white p-3 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFF8E8]">
                🏆
              </div>

              <h3 className="mt-3 text-[12px] font-bold text-[#1F2937]">
                District Olympiad
              </h3>

              <p className="mt-1 text-[10px] text-[#7B8794]">
                Qualified · Round 2
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
