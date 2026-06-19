"use client";

import { useEffect, useState } from "react";

const navItems = [
  {
    label: "How it works",
    id: "how-it-works",
  },
  {
    label: "Parent Portal",
    id: "parent-portal",
  },
  {
    label: "FAQ",
    id: "faq",
  },
];

export function ParentsPageNav() {
  const [activeSection, setActiveSection] = useState("how-it-works");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const navbarHeight = 72;
    const stickyNavHeight = 64;

    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight -
      stickyNavHeight;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sticky top-[72px] z-40 border-y border-[#E5EBF5] bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1280px] items-center overflow-x-auto px-4 lg:px-8">
        {navItems.map((item) => {
          const active = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                relative
                shrink-0
                px-5
                py-4
                text-[13px]
                font-semibold
                transition-all
                duration-300
                ${
                  active
                    ? "text-[#1E63D8]"
                    : "text-[#667085] hover:text-[#132A67]"
                }
              `}
            >
              {item.label}

              <span
                className={`
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  bg-[#1E63D8]
                  transition-all
                  duration-300
                  ${active ? "w-full opacity-100" : "w-0 opacity-0"}
                `}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
