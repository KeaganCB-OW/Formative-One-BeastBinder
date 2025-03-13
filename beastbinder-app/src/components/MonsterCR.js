import React from "react";
import "./MonsterCR.css";

const MonsterCR = ({ cr }) => {
  return (
    <div className="monster-cr-container">
      {/* Outer Box (Label) */}
      <div className="monster-cr-label">CR</div>

      {/* Inner Box (CR Value Box) */}
      <div className="monster-cr-box">
        <span className={`cr-text ${!cr ? "placeholder" : ""}`}>
          {cr || "N/A"}
        </span>
      </div>
    </div>
  );
};

export default MonsterCR;
