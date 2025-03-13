import React from "react";
import "./MonsterAC.css";

const MonsterAC = ({ ac }) => {
  return (
    <div className="monster-ac-container">
      {/* Outer Box (Label) */}
      <div className="monster-ac-label">AC</div>

      {/* Inner Box (AC Value Box) */}
      <div className="monster-ac-box">
        <span className={`ac-text ${!ac ? "placeholder" : ""}`}>
          {ac || "N/A"}
        </span>
      </div>
    </div>
  );
};

export default MonsterAC;
