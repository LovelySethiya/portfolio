import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <ParticleBackground id="particles" />
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Languages />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;