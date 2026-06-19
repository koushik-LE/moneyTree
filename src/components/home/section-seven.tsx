"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CTASection() {
  return (
    <section className="overflow-hidden bg-[#F5F8FC]">
      {/* ================================================= */}
      {/* PARENTS + SCHOOLS */}
      {/* ================================================= */}

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-5 lg:grid-cols-2">
          {/* Parents */}
          <Card className="rounded-[28px] border border-[#E5EBF3] bg-white p-7 shadow-none">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2163CC]">
              For Parents
            </p>

            <h2 className="mt-4 max-w-[420px] text-[30px] font-black leading-[1.1] tracking-[-0.04em] text-[#1F2A37] sm:text-[36px]">
              Help Your Child Build
              <span className="text-[#2163CC]"> Real</span> Financial
              Understanding
            </h2>

            <p className="mt-4 max-w-[500px] text-[14px] leading-7 text-[#6B7280]">
              Financial literacy is about responsibility, planning, and
              long-term thinking. Parents participate as facilitators,
              observers, and reinforcement partners.
            </p>

            <Button
              variant="outline"
              className="mt-6 h-[42px] rounded-[12px] border-[#173FAE] px-5 text-[13px] font-semibold text-[#173FAE]"
            >
              Learn More
              <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Button>
          </Card>

          {/* Schools */}
          <Card className="overflow-hidden rounded-[28px] border-0 bg-[linear-gradient(135deg,#0B1E96_0%,#2C66C9_100%)] p-7 shadow-none">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C7FFE0]">
              For Schools
            </p>

            <h2 className="mt-4 max-w-[480px] text-[30px] font-black leading-[1.1] tracking-[-0.04em] text-white sm:text-[36px]">
              A Financial Literacy Ecosystem for
              <span className="text-[#FFD600]"> Modern Schools</span>
            </h2>

            <p className="mt-4 max-w-[520px] text-[14px] leading-7 text-[#D2DDFF]">
              Integrate experiential learning, competency-based assessment,
              financial expos and Olympiads aligned with NEP 2020.
            </p>

            <Button className="mt-6 h-[44px] rounded-[12px] bg-[#31D158] px-5 text-[13px] font-semibold text-[#06158F] hover:bg-[#28C04D]">
              Book School Demo
              <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Button>
          </Card>
        </div>
      </div>

      {/* ================================================= */}
      {/* FINAL CTA */}
      {/* ================================================= */}

      <div className="relative overflow-hidden bg-[linear-gradient(135deg,#06158F_0%,#245FC4_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_45%)]" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-center sm:px-8 lg:px-12 lg:py-24">
          <h2 className="text-[42px] font-black leading-[1] tracking-[-0.05em] text-white sm:text-[54px] lg:text-[68px]">
            Start Building
            <br />
            <span className="text-[#FFD600]">Financial Thinkers</span> Today
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[14px] leading-8 text-[#C7D4FF] sm:text-[15px]">
            Join a new generation of learning where children don't just study
            financial concepts — but learn how to think, decide, and act
            responsibly in the real world.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button className="h-[42px] rounded-[12px] bg-[#FFD600] px-6 text-[13px] font-bold text-[#06158F] shadow-[0_0_20px_rgba(255,214,0,0.35)] hover:bg-[#F5CB00]">
              Book a Demo
            </Button>

            <Button
              variant="outline"
              className="h-[42px] rounded-[12px] border-white/20 bg-transparent px-6 text-[13px] text-white hover:bg-white hover:text-[#06158F]"
            >
              Download App
            </Button>

            <Button
              variant="outline"
              className="h-[42px] rounded-[12px] border-white/20 bg-transparent px-6 text-[13px] text-white hover:bg-white hover:text-[#06158F]"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
