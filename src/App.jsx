import React, { useState, useEffect } from 'react';
import { techStoryNodes } from './data/portfolioData';
import { SkillUniverseCanvas } from './components/canvas/SkillUniverseCanvas';
import { Navbar } from './components/ui/Navbar';
import { Hero } from './components/ui/Hero';
import { ScrollStoryOverlay } from './components/ui/ScrollStoryOverlay';
import { About } from './components/ui/About';
import { Experience } from './components/ui/Experience';
import { Projects } from './components/ui/Projects';
import { Skills } from './components/ui/Skills';
import { Education } from './components/ui/Education';
import { Contact } from './components/ui/Contact';
import { Footer } from './components/ui/Footer';

export function App() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isFinalScene, setIsFinalScene] = useState(false);
  const [isInsideStory, setIsInsideStory] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, window.scrollY / (totalHeight || 1)));
      setScrollProgress(progress);

      // Check if user is inside #scroll-story-container
      const storyEl = document.getElementById('scroll-story-container');
      if (storyEl) {
        const rect = storyEl.getBoundingClientRect();
        const inside = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsInsideStory(inside);
      }

      // Section observer simple check
      const sections = ['hero', 'scroll-story-container', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#07070a] text-slate-100 font-sans selection:bg-[#00ff88]/30 selection:text-[#00ff88]">
      
      {/* 3D WebGL Canvas Layer (Fixed Background) */}
      <SkillUniverseCanvas
        nodes={techStoryNodes}
        activeIndex={activeIndex}
        isFinalScene={isFinalScene}
        onActiveIndexChange={setActiveIndex}
        onFinalSceneChange={setIsFinalScene}
      />

      {/* Glass Navigation Header */}
      <Navbar activeSection={activeSection} scrollProgress={scrollProgress} />

      {/* Main Page Scrollable Content */}
      <main className="relative z-10">
        
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: 3D Scroll Journey Stage (Tall Track) */}
        <section id="scroll-story-container" className="relative h-[600vh]">
          {/* Floating HUD Overlay - Strictly hidden when outside this section */}
          <ScrollStoryOverlay
            nodes={techStoryNodes}
            activeIndex={activeIndex}
            isFinalScene={isFinalScene}
            isInsideStory={isInsideStory}
          />
        </section>

        {/* Section 3: About */}
        <About />

        {/* Section 4: Work Experience */}
        <Experience />

        {/* Section 5: Projects Showcase */}
        <Projects />

        {/* Section 6: Interactive Skill Matrix */}
        <Skills />

        {/* Section 7: Education & Certifications */}
        <Education />

        {/* Section 8: Terminal Contact (Matching User Reference Image) */}
        <Contact />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
