import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Technology from "./components/Technology";
import Team from "./components/Team";
import ContactForm from "./components/ContactForm";  // <-- updated import here
import ThankYou from "./pages/ThankYou";

// Service Pages
import WebDevelopment from "./pages/services/WebDevelopment";
import MobileApps from "./pages/services/MobileApps";
import CloudSolutions from "./pages/services/CloudSolutions";
import DataAnalytics from "./pages/services/DataAnalytics";
import Cybersecurity from "./pages/services/Cybersecurity";
import UIUXDesign from "./pages/services/UIUXDesign";
import AIAgentSolutions from "./pages/services/AIAgentSolutions";
import AIImplementation from "./pages/services/AIImplementation";
import DigitalMarketing from "./pages/services/DigitalMarketing";

import Layout from "./Layout";

const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");

  // Smooth scrolling handler
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll listener to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "services", "technology", "team", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navigation handled in Layout */}
      <Hero />
      <About />
      <Services />
      <Technology />
      <Team />
      <section id="contact">
        {/* Use ContactForm directly on homepage for scroll */}
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
            path="/contact"
            element={
              <Layout>
                <ContactForm />  {/* Or create a dedicated Contact page if you want */}
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
          {/* ... other routes ... */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
