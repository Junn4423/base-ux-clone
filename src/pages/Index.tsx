import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { LogoCarousel } from "@/components/LogoCarousel";
import { ProductSection } from "@/components/ProductSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { BaseAISection } from "@/components/BaseAISection";
import { JourneySection } from "@/components/JourneySection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TrustedSection } from "@/components/TrustedSection";
import { AwardsSection } from "@/components/AwardsSection";
import { FAQSection } from "@/components/FAQSection";
import { BlogSection } from "@/components/BlogSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <LogoCarousel />
        <ProductSection />
        <IndustriesSection />
        <BaseAISection />
        <JourneySection />
        <IntegrationsSection />
        <TestimonialsSection />
        <TrustedSection />
        <AwardsSection />
        <FAQSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
