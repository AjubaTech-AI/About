// src/Layout.tsx
import React from "react";
import Navigation from "./components/Navigation";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;

import Footer from './components/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Navigation />
    <main>{children}</main>
    <Footer />
  </>
);
