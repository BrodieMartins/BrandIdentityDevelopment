import { Hero } from "../sections/Hero";
import { ServicesSection } from "../sections/ServicesSection";
import { HowItWorksSection } from "../sections/HowItWorksSection";
import { ShopSection } from "../sections/ShopSection";
import { RealisationsSection } from "../sections/RealisationsSection";
import { MethodeSection } from "../sections/MethodeSection";
import { SecteursSection } from "../sections/SecteursSection";
import { ContactSection } from "../sections/ContactSection";

export function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <HowItWorksSection />
      <ShopSection />
      <RealisationsSection />
      <MethodeSection />
      <SecteursSection />
      <ContactSection />
    </>
  );
}
