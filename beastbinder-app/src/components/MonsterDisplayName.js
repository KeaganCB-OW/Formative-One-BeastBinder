import React from "react";
import "./MonsterDisplayName.css";

const MonsterDisplayName = ({ monsterName }) => {
  return (
    <div className="monster-name-container">
      {/* Outer Box */}
      <div className="monster-label">Monster Name</div>

      {/* Inner Box */}
      <div className="monster-name-box">
        <span className={`monster-name-text ${!monsterName ? "placeholder" : ""}`}>
          {monsterName || "Select a Monster"}
        </span>
      </div>
    </div>
  );
};

export default MonsterDisplayName;
