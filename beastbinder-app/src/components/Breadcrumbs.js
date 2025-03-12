import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Breadcrumbs.css";

const Breadcrumbs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine if the current page is the Timeline Page
  const isTimelinePage = location.pathname === "/timeline";

  return (
    <div className="breadcrumbs-container">
      {/* Monsters Link (Dynamically styled based on page) */}
      <span
        className={`breadcrumb-text ${isTimelinePage ? "dimmed" : "bright"}`}
        onClick={() => navigate("/comparison")}
      >
        Monsters
      </span>

      {/* Chevron Icon (Dynamically styled based on page) */}
      <img
        src="/assets/chevron-icon.svg"
        alt="Chevron Icon"
        className={`breadcrumb-chevron ${isTimelinePage ? "bright" : "dimmed"}`}
      />

      {/* Encounter Timeline Link (Dynamically styled based on page) */}
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
