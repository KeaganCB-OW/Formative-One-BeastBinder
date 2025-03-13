import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Breadcrumbs.css";

const Breadcrumbs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine if the current page is the Timeline Page
  const isTimelinePage = location.pathname === "/timeline";

  // Use different chevron icons based on the page
  const chevronSrc = isTimelinePage
    ? "/assets/chevron-bright.svg" // Bright Chevron
    : "/assets/chevron-dimmed.svg"; // Dimmed Chevron

  return (
    <div className="breadcrumbs-container">
      {/* Monsters Link */}
      <span
        className={`breadcrumb-text ${isTimelinePage ? "dimmed" : "bright"}`}
        onClick={() => navigate("/comparison")}
      >
        Monsters
      </span>

      {/* Chevron Icon - Uses different assets based on state */}
      <img src={chevronSrc} alt="Chevron Icon" className="breadcrumb-chevron" />

      {/* Encounter Timeline Link */}
      <span
        className={`breadcrumb-text ${isTimelinePage ? "bright" : "dimmed"}`}
        onClick={() => navigate("/timeline")}
      >
        Encounter Timeline
      </span>
    </div>
  );
};

export default Breadcrumbs;
