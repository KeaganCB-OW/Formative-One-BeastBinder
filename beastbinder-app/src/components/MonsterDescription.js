import React from "react";
import "./MonsterDescription.css";

const MonsterDescription = ({ description }) => {
  return (
    <div className="monster-description-container">
      {/* Outer Box (Label) */}
      <div className="monster-description-label">Description</div>

      {/* Inner Box (Scrollable Description Text Area) */}
      <div className="monster-description-box">
        <p className={`description-text ${!description ? "placeholder" : ""}`}>
          {description || "No Description Available"}
        </p>
      </div>
    </div>
  );
};

export default MonsterDescription;
