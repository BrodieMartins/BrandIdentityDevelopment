import { Hero } from "../sections/Hero";
import { ServicesSection } from "../sections/ServicesSection";
import { HowItWorksSection } from "../sections/HowItWorksSection";
import { ShopSection } from "../sections/ShopSection";
import { RealisationsSection } from "../sections/RealisationsSection";
import { MethodeSection } from "../sections/MethodeSection";
import { SecteursSection } from "../sections/SecteursSection";
import { ContactSection } from "../sections/ContactSection";
import { RouteProgress } from "../components/RouteProgress";
import { TapeMarquee } from "../components/decor";

export function HomePage() {
  return (
    <>
      {/* Le camion suit la tournée au fil du scroll (desktop) */}
      <RouteProgress />
      <Hero />
      <ServicesSection />
      <HowItWorksSection />
      <ShopSection />
      <RealisationsSection />
      <TapeMarquee flip />
      <MethodeSection />
      <SecteursSection />
      <ContactSection />
    </>
  );
}
