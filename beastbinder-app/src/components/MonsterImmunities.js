import React from "react";
import "./MonsterImmunities.css";

const MonsterImmunities = ({ immunity }) => {
  // Function to determine background color based on immunity type
  const getBackgroundColor = (immunity) => {
    const colorMap = {
      Fire: "rgba(255, 69, 58, 1)", // Red
      Lightning: "rgba(0, 116, 217, 1)", // Electric Blue
      Cold: "rgba(0, 168, 255, 1)", // Cyan
      Necrotic: "rgba(108, 92, 231, 1)", // Purple
      Poison: "rgba(83, 163, 81, 1)", // Green
      Burn: "rgb(180, 184, 97)", // Green
      "Unknown": "rgba(78, 78, 78, 0.5)", // Default Gray
    };
    return colorMap[immunity] || colorMap["Unknown"];
  };

  return (
    <div className="monster-immunities-container">
      {/* Outer Box (Label) */}
      <div className="monster-immunities-label">Immunities</div>

      {/* Inner Box (Immunity Display Box) */}
      <div
        className="monster-immunities-box"
        style={{ backgroundColor: getBackgroundColor(immunity) }}
      >
        <span className={`immunity-text ${!immunity ? "placeholder" : ""}`}>
          {immunity || "Unknown"}
        </span>
      </div>
    </div>
  );
};

export default MonsterImmunities;
