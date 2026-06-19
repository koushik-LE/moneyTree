"use client";
import HowItWorksHeroSection from "@/components/how-it-works/hero-section";
import RewardsSystemSection from "@/components/how-it-works/lesson-architecture-section";
import RewardsMarketplaceSection from "@/components/how-it-works/platform-ecosystem-section";
import PlatformEcosystemSection from "@/components/how-it-works/PlatformEcosystemSection";
import RolesJourneySection from "@/components/how-it-works/roles-journey-section";
import Footer from "@/components/layout/footer";
import NavBar from "@/components/layout/nav-bar";

export default function page() {
  return (
    <>
      <NavBar />
      <HowItWorksHeroSection />
      <RewardsSystemSection />
      <RewardsMarketplaceSection />
      <PlatformEcosystemSection />
      <RolesJourneySection />
      <Footer />
    </>
  );
}
