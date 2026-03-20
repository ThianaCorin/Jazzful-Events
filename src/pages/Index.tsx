import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FormationsSection from "@/components/FormationsSection";
import EventsSection from "@/components/EventsSection";
import GallerySection from "@/components/GallerySection";
import RepertoireSection from "@/components/RepertoireSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ZoneSection from "@/components/ZoneSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FormationsSection />
      <EventsSection />
      <GallerySection />
      <RepertoireSection />
      <TestimonialsSection />
      <ZoneSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
