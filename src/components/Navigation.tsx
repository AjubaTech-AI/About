import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC<{ activeSection?: string; onNavigate?: (section: string) => void }> = ({
  activeSection = "",
  onNavigate = () => {},
}) => {
  const sections = [
    { id: "home", label: "Home", to: "/" },
    { id: "about", label: "About", to: "/" },
    { id: "services", label: "Services", to: "/" },
    { id: "technology", label: "Technology", to: "/" },
    { id: "team", label: "Team", to: "/" },
    { id: "contact", label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="bg-white shadow fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        <Link to="/" className="flex items-center">
          <img src="/Logo.png" alt="AjubaTech Logo" className="h-8 w-auto mr-2" />
          <span className="font-bold text-lg">AjubaTech</span>
        </Link>
        <div className="flex space-x-6">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.to}
              onClick={() => section.id !== "contact" && onNavigate(section.id)}
              className={`py-2 px-3 font-medium transition-all ${
                activeSection === section.id
                  ? "text-blue-700 border-b-2 border-blue-700"
                  : "text-gray-700 hover:text-blue-700"
              }`}
            >
              {section.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
