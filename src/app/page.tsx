import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070B19] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden relative">
      {/* Background Ambience & Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-cyan-600/10 blur-[150px] rounded-full" />
        <div className="absolute top-1/2 -right-48 w-[500px] h-[400px] bg-purple-600/10 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 pt-4 space-y-12">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}