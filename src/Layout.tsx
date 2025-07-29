import React from "react";
import Navigation from "./components/Navigation";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Scroll handler for in-page navigation
  const onNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navigation activeSection="" onNavigate={onNavigate} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
