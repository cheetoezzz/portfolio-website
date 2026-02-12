import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Navbar />
      <Hero />

      <Section
        id="about"
        title="About Me"
        subtitle="Learn more about my background and expertise"
      >
        <About />
      </Section>

      <Section
        id="projects"
        title="Projects"
        subtitle="A selection of my recent work and personal projects"
      >
        <Projects />
      </Section>

      <Section
        id="skills"
        title="Skills"
        subtitle="Technologies and tools I work with"
      >
        <Skills />
      </Section>

      <Section
        id="contact"
        title="Get In Touch"
        subtitle="Let's connect and discuss opportunities"
      >
        <Contact />
      </Section>

      <Footer />
    </div>
  );
}

export default App;
