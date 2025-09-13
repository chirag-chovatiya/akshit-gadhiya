import AboutSection from "./AboutSection";
import CallToActionSection from "./CallToActionSection";
import HeroSection from "./HeroSection";
import BlogSection from "./HomeBlogSection";
import ServicesSection from "./ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen mb-5 flex flex-col">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BlogSection />
      <CallToActionSection />
    </div>
  );
}
