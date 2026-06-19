"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

import logo from "@/assets/logo.png";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "For Parents", href: "/parents" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E6EBF2] bg-[#F8FAFC]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[84px] w-full max-w-[1440px] items-center justify-between px-6 lg:px-12">
        {/* LEFT */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src={logo}
            alt="MoneyTreeCY Logo"
            priority
            width={180}
            height={40}
            style={{ width: "auto", height: "auto" }}
            className="w-[165px] object-contain xl:w-[180px]"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-10 xl:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[15px] font-medium tracking-[-0.01em] transition-colors duration-200 ${
                  isActive
                    ? "text-[#1D3FAE]"
                    : "text-[#5E6B7A] hover:text-[#1D3FAE]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT BUTTONS */}
        <div className="hidden items-center gap-3 xl:flex">
          <Button
            variant="outline"
            className="h-[46px] rounded-[14px] border-[#2446B8] bg-transparent px-7 text-[15px] font-semibold text-[#2446B8] shadow-none transition-all hover:bg-[#2446B8] hover:text-white"
          >
            Log In
          </Button>

          <Button className="h-[46px] rounded-[14px] bg-[#1E63D5] px-7 text-[15px] font-semibold text-white shadow-none transition-all hover:bg-[#1554BB]">
            Book a Demo
          </Button>
        </div>

        {/* MOBILE MENU */}
        <div className="xl:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open Menu"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D9E1EC] bg-white text-[#1D3FAE]"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] border-l border-[#E6EBF2] bg-white p-0"
            >
              <div className="flex h-full flex-col">
                <div className="border-b border-[#EEF2F7] px-6 py-5">
                  <Image
                    src={logo}
                    alt="MoneyTreeCY Logo"
                    width={170}
                    height={40}
                    style={{ width: "auto", height: "auto" }}
                    className="w-[160px]"
                  />
                </div>

                <nav className="flex flex-col px-6 py-4">
                  {navItems.map((item) => {
                    const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`border-b border-[#F2F5F9] py-4 text-[15px] font-medium transition-colors ${
                          isActive
                            ? "text-[#1D3FAE]"
                            : "text-[#5E6B7A] hover:text-[#1D3FAE]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-auto flex flex-col gap-3 px-6 pb-8 pt-4">
                  <Button
                    variant="outline"
                    className="h-12 rounded-xl border-[#2446B8] text-[15px] font-semibold text-[#2446B8]"
                  >
                    Log In
                  </Button>

                  <Button className="h-12 rounded-xl bg-[#1E63D5] text-[15px] font-semibold text-white hover:bg-[#1554BB]">
                    Book a Demo
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
