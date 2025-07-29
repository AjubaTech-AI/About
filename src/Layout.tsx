import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");

  const onNavigate = (sectionId: string) => {
    // List of sections available only on the homepage
    const homepageSections = ["hero", "about", "services", "technology", "team", "contact"];

    if (location.pathname === "/" && homepageSections.includes(sectionId)) {
      // Scroll smoothly on homepage sections
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // For other pages or service routes:
      // Map sectionId to route paths
      const routeMap: Record<string, string> = {
        services: "/services/web-development", // or main services page
        hero: "/",
        about: "/about",
        technology: "/technology", // if you have this page
        team: "/team",             // if you have this page
        contact: "/contact",
        // Add more mappings as needed
      };

      const path = routeMap[sectionId] || "/";

      // Navigate to the target route
      navigate(path);

      // Optional: scroll after navigation - requires additional handling
      // Could use state, context, or URL hash and scroll on page load
    }
  };

  useEffect(() => {
    // Active section tracking - works only on homepage
    if (location.pathname === "/") {
      const handleScroll = () => {
        const scrollPos = window.scrollY + 100;
        const sections = ["hero", "about", "services", "technology", "team", "contact"];
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && section.offsetTop <= scrollPos) {
            setActiveSection(sections[i]);
            break;
          }
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      // Clear active section on other pages
      setActiveSection("");
    }
  }, [location.pathname]);

  return (
    <>
      <Navigation activeSection={activeSection} onNavigate={onNavigate} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
