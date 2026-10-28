
import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { CertificationsSection } from "../components/CertificationSection";
import { Footer } from "../components/Footer";
import { ContactSection } from "../components/ContactSection";
import Veille from "../components/Veille";



export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <Navbar />
          <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <Veille/>
        <ContactSection/>
        <Footer/>


 
      </main>
    </div>
  );
};
