
import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { CertificationsSection } from "../components/CertificationSection";
import { Footer } from "../components/Footer";
import { StageSection } from "../components/StageSection";
/*import { Veille} from "../components/Veille"*/
import { ContactSection } from "../components/ContactSection";
import Veille from "../components/Veille";



export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      {/*StarBackground */}
       {/* Navbar */}
      <Navbar />
          <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <StageSection/>
        <Veille/>
        <ContactSection/>
        <Footer/>


 
      </main>
    </div>
  );
};