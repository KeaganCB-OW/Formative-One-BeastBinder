import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TimelinePage from "./pages/TimelinePage"; // Import the new page
import Navbar from "./components/Navbar"; // Ensure Navbar is included

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/timeline" element={<TimelinePage />} /> {/* New Route */}
      </Routes>
    </Router>
  );
}

export default App;

