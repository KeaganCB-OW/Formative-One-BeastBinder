import React from "react";
import "./MonsterHP.css";

const MonsterHP = ({ hp }) => {
  return (
    <div className="monster-hp-container">
      {/* Outer Box (Label) */}
      <div className="monster-hp-label">HP</div>

      {/* Inner Box (HP Value Box) */}
      <div className="monster-hp-box">
        <span className={`hp-text ${!hp ? "placeholder" : ""}`}>
          {hp || "N/A"}
        </span>
      </div>
    </div>
  );
};

export default MonsterHP;
