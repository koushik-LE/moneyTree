"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const platformLinks = [
  "Curriculum",
  "How It Works",
  "Levels",
  "Projects",
  "Events & Olympiad",
  "Rewards System",
];

const audienceLinks = [
  "For Parents",
  "For Schools",
  "For Teachers",
  "Partners",
  "Investors",
];

const companyLinks = [
  "About",
  "Blog / Insights",
  "Pricing",
  "FAQs",
  "Contact",
  "Careers",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1D2D36]">
      {/* Top Gradient */}
      <div className="h-[4px] w-full bg-gradient-to-r from-[#142D92] via-[#1E63D5] to-[#2B7FFF]" />

      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-14">
        {/* Top */}
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
          {/* Brand */}
          <div className="max-w-[380px]">
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-white">
              MoneyTree
              <span className="text-[#00D26A]">CY</span>
            </h2>

            <p className="mt-4 text-[14px] leading-7 text-[#8C99A5]">
              A progressive financial literacy ecosystem helping children
              understand money, decisions, responsibility and real-world
              financial behaviour through structured experiential learning.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="h-[42px] rounded-[12px] bg-[#1E63D5] px-5 text-[13px] font-semibold text-white hover:bg-[#1554BB]">
                Book a Demo
              </Button>

              <Button
                variant="outline"
                className="h-[42px] rounded-[12px] border border-[#44525C] bg-transparent px-5 text-[13px] text-[#D2D8DE] hover:bg-[#263740] hover:text-white"
              >
                Download App
              </Button>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#6E7C87]">
              Platform
            </h3>

            <div className="space-y-3">
              {platformLinks.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block text-[14px] text-[#B8C2CB] transition-colors hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Audience */}
          <div>
            <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#6E7C87]">
              Audience
            </h3>

            <div className="space-y-3">
              {audienceLinks.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block text-[14px] text-[#B8C2CB] transition-colors hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#6E7C87]">
              Company
            </h3>

            <div className="space-y-3">
              {companyLinks.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block text-[14px] text-[#B8C2CB] transition-colors hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px bg-[#31414A]" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 pt-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <p className="text-[12px] text-[#74808B]">
            © 2025 MoneyTreeCY. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 lg:justify-start">
            <Link
              href="#"
              className="text-[12px] text-[#74808B] transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-[12px] text-[#74808B] transition-colors hover:text-white"
            >
              Terms
            </Link>

            <Link
              href="#"
              className="text-[12px] text-[#74808B] transition-colors hover:text-white"
            >
              Child Safety
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 lg:justify-end">
            <div className="h-2 w-2 rounded-full bg-[#00D26A]" />

            <span className="text-[12px] text-[#74808B]">NEP 2020 Aligned</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
