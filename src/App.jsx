import React from 'react';
import Navbar from './components/Navbar';
import InteractiveBackground from './components/InteractiveBackground';
import MouseSpotlight from './components/MouseSpotlight';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Feedback from './components/Feedback';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#010736] text-[#E2E8F0] overflow-x-hidden selection:bg-[#FCF1D0] selection:text-[#010736]">
      {/* Scroll Progress Bar at the very top */}
      <ScrollProgress />

      {/* Interactive GPU-accelerated animated background */}
      <InteractiveBackground />

      {/* Interactive Mouse Cursor Glow Spotlight on desktop */}
      <MouseSpotlight />

      {/* Glassmorphic Sticky Header */}
      <Navbar />

      {/* Main Content Area containing all 9 sections */}
      <main className="relative z-10">
        {/* 1. Home (Hero Section) */}
        <Hero />

        {/* 2. About Section */}
        <About />

        {/* 3. Education Section */}
        <Education />

        {/* 4. Experience Section */}
        <Experience />

        {/* 5. Skills Section */}
        <Skills />

        {/* 6. Projects Section */}
        <Projects />

        {/* 7. Feedback (Testimonials) Section */}
        <Feedback />

        {/* 8. Services Section */}
        <Services />

        {/* 9. Contact / Get in Touch Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
