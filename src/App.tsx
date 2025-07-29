import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
// ... other imports for your site pages/components

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Navigation />
    <main className="pt-20">{children}</main>
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
