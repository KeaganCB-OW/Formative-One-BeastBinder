import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TimelinePage from "./pages/TimelinePage";
import ComparisonPage from "./pages/ComparisonPage"; 
import Navbar from "./components/Navbar"; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/comparison" element={<ComparisonPage />} /> {/* New Route */}
      </Routes>
    </Router>
  );
}

export default App;
