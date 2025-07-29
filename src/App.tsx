import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Technology from './components/Technology';
import Team from './components/Team';
import Contact from './components/Contact';

// Service Pages
import WebDevelopment from './pages/services/WebDevelopment';
import MobileApps from './pages/services/MobileApps';
import CloudSolutions from './pages/services/CloudSolutions';
import DataAnalytics from './pages/services/DataAnalytics';
import Cybersecurity from './pages/services/Cybersecurity';
import UIUXDesign from './pages/services/UIUXDesign';
import AIAgentSolutions from './pages/services/AIAgentSolutions';
import AIImplementation from './pages/services/AIImplementation';
import DigitalMarketing from './pages/services/DigitalMarketing';

const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Handle smooth scrolling to sections
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'technology', 'team', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      <Hero />
      <About />
      <Services />
      <Technology />
      <Team />
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/mobile-apps" element={<MobileApps />} />
          <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/services/data-analytics" element={<DataAnalytics />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/services/ai-agent-solutions" element={<AIAgentSolutions />} />
          <Route path="/services/ai-implementation" element={<AIImplementation />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;