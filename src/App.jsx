import Navbar from "./components/comman/Navbar";
import Footer from "./components/comman/Footer";
import HeroSection from "./pages/HeroSection";
import ServicesSection from "./pages/ServicesSection";
import AboutSection from "./pages/AboutSection";
import BlogSection from "./pages/HomeBlogSection";
import CallToActionSection from "./components/comman/CallToActionSection";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar /> {/* Navbar is now part of App */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BlogSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}

export default App;
