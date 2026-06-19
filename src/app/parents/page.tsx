import Footer from "@/components/layout/footer";
import NavBar from "@/components/layout/nav-bar";
import { FAQSection } from "@/components/parents/faq-section";
import ParentPortalHeroSection from "@/components/parents/hero-section";
import { ParentPortalSection } from "@/components/parents/parent-portal-section";
import { ParentRoleJourney } from "@/components/parents/parent-role-journey";
import { ParentsPageNav } from "@/components/parents/parents-page-nav";

export default function page() {
  return (
    <>
      <NavBar />
      <ParentPortalHeroSection />
      <ParentsPageNav />
      <section id="how-it-works">
        <ParentRoleJourney />
      </section>

      <section id="parent-portal">
        <ParentPortalSection />
      </section>

      <section id="faq">
        <FAQSection />
      </section>
      <Footer />
    </>
  );
}
