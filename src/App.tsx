import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Technology from './components/Technology';
import Team from './components/Team';
import Contact from './components/Contact';
import ThankYou from "./pages/ThankYou";

// import Error from "./pages/Error"; // optional

function App() {
  return (
    <Router>
      <Routes>
        {/* your other routes */}
        <Route path="/thank-you" element={<ThankYou />} />
        {/* <Route path="/error" element={<Error />} /> */}
      </Routes>
    </Router>
  );
}

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
      {/* Removed Navigation from here */}
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
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
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
