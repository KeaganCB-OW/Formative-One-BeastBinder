import React from "react";
import "./TimelinePage.css";
import Breadcrumbs from "../components/Breadcrumbs";

const TimelinePage = () => {
  return (
    <div className="timeline-page">
      <Breadcrumbs />
      <div className="timeline-container">
        <div className="timeline-chart-box">
          <p className="graph-placeholder-text">Timeline Graph Placeholder</p>
        </div>
        <div className="encounter-cr-chart-box">
          <p className="graph-placeholder-text">Encounter CR Graph Placeholder</p>
        </div>
        <div className="encounter-stat-chart-box">
          <p className="graph-placeholder-text">Encounter Stat Graph Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
