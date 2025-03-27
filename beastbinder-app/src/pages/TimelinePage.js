import React from "react";
import "./TimelinePage.css";
import Breadcrumbs from "../components/Breadcrumbs";
import RecentCRChart from "../components/RecentCRChart";

const TimelinePage = () => {
  return (
    <div className="timeline-page">
      <Breadcrumbs />
      <div className="timeline-container">
        <div className="timeline-chart-box">
        <RecentCRChart />
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
