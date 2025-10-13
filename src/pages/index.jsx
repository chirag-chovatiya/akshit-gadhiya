import CallToActionSection from "./CallToActionSection";
import HeroSection from "./HeroSection";
import BlogSection from "./HomeBlogSection";
import ServicesSection from "./ServicesSection";
import PricingSection from "./PricingSection";
import SectionWrapper from "../components/SectionWrapper"; // Import SectionWrapper
import ReviewSection from "../components/reviews/ReviewSection";
import TeamSection from "../components/teams/teamsSection";
import StatsSection from "../components/StatsSection";
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden overflow-y-hidden">
      <SectionWrapper variants={fadeInUp} delay={0.1}>
        <HeroSection />
      </SectionWrapper>
      <SectionWrapper variants={fadeInRight} delay={0.2}>
        <ServicesSection />
      </SectionWrapper>
      <SectionWrapper variants={fadeInUp} delay={0.25}>
        <StatsSection />
      </SectionWrapper>
      <SectionWrapper variants={fadeInUp} delay={0.25}>
        <PricingSection />
      </SectionWrapper>
      <SectionWrapper variants={scaleUp} delay={0.25}>
        <TeamSection />
      </SectionWrapper>
      <SectionWrapper variants={fadeInUp} delay={0.3}>
        <BlogSection />
      </SectionWrapper>
      <SectionWrapper variants={scaleUp} delay={0.3}>
        <ReviewSection />
      </SectionWrapper>
      <SectionWrapper variants={fadeInUp} delay={0.4}>
        <CallToActionSection />
      </SectionWrapper>
    </div>
  );
}
