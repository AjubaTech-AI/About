import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Technology from './components/Technology';
import Team from './components/Team';
import ContactForm from './components/ContactForm'; // <-- use ContactForm here
import ThankYou from './pages/ThankYou';

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

import Layout from './Layout';

const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth scroll navigation handler
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll listener to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'technology', 'team', 'contact']; 
      // Make sure this matches your Contact section's id attribute
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
      {/* Navigation is expected to be in Layout */}
      <Hero />
      <About />
      <Services />
      <Technology />
      <Team />
      {/* Wrap ContactForm in a section with matching id for scrolling */}
      <section id="contact">
        <ContactForm />
      </section>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/thank-you"
            element={
              <Layout>
                <ThankYou />
              </Layout>
            }
          />
          <Route
            path="/services/web-development"
            element={
              <Layout>
                <WebDevelopment />
              </Layout>
            }
          />
          <Route
            path="/services/mobile-apps"
            element={
              <Layout>
                <MobileApps />
              </Layout>
            }
          />
          <Route
            path="/services/cloud-solutions"
            element={
              <Layout>
                <CloudSolutions />
              </Layout>
            }
          />
          <Route
            path="/services/data-analytics"
            element={
              <Layout>
                <DataAnalytics />
              </Layout>
            }
          />
          <Route
            path="/services/cybersecurity"
            element={
              <Layout>
                <Cybersecurity />
              </Layout>
            }
          />
          <Route
            path="/services/ui-ux-design"
            element={
              <Layout>
                <UIUXDesign />
              </Layout>
            }
          />
          <Route
            path="/services/ai-agent-solutions"
            element={
              <Layout>
                <AIAgentSolutions />
              </Layout>
            }
          />
          <Route
            path="/services/ai-implementation"
            element={
              <Layout>
                <AIImplementation />
              </Layout>
            }
          />
          <Route
            path="/services/digital-marketing"
            element={
              <Layout>
                <DigitalMarketing />
              </Layout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
