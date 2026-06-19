"use client";
import EventsEcosystemSection from "@/components/home/EventsEcosystemSection";
import ProblemSolutionSection from "@/components/home/first-section";
import ArchitectureSection from "@/components/home/fourth-section";
import HeroSection from "@/components/home/hero-section";
import RealWorldLearningSection from "@/components/home/RealWorldLearningSection";
import RewardsSection from "@/components/home/RewardsSection";
import ProblemSection from "@/components/home/second-section";
import CTASection from "@/components/home/section-seven";
import ComparisonLearningScienceSection from "@/components/home/sixth-section";
import EcosystemSection from "@/components/home/third-section";
import Footer from "@/components/layout/footer";
import NavBar from "@/components/layout/nav-bar";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ProblemSolutionSection />
      <ProblemSection />
      <EcosystemSection />
      <ArchitectureSection />
      <RealWorldLearningSection />
      <EventsEcosystemSection />
      <RewardsSection />
      <ComparisonLearningScienceSection />
      <CTASection />
      <Footer />
    </>
  );
}
