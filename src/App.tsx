import BackgroundEffect from "./components/BackgroundEffect";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen text-neutral-200">
      {/* Immersive animated red glow background layout */}
      <BackgroundEffect />

      {/* Main floating pill-shaped header navigation */}
      <Navbar />

      {/* Core Portfolio Sections */}
      <main className="space-y-4">
        {/* 1. Hero / Landing section */}
        <Hero />

        {/* 2. Biography section */}
        <About />

        {/* 3. Skill Matrices categories */}
        <Skills />

        {/* 4. Active club experience timeline */}
        <Experience />

        {/* 5. Production engineering showcases */}
        <Projects />

        {/* 6. Milestones Achievements track-record */}
        <Achievements />

        {/* 7. Contact portal & dynamic feedback form */}
        <Contact />
      </main>
    </div>
  );
}
