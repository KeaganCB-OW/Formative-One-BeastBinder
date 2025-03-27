import React from "react";
import "./MonsterImmunities.css";

const MonsterImmunities = ({ immunity }) => {
  // Function to determine background color based on immunity type
  const getBackgroundColor = (immunity) => {
    const colorMap = {
      Fire: "rgba(255, 165, 0, 1)",         // Orange
      Cold: "rgba(0, 168, 255, 1)",         // Cyan
      Poison: "rgba(83, 163, 81, 1)",       // Green
      Psychic: "rgba(162, 50, 168, 1)",     // Purple
      Lightning: "rgba(0, 116, 217, 1)",    // Electric Blue
      Acid: "rgba(76, 187, 23, 1)",         // Lime Green
      Necrotic: "rgba(108, 92, 231, 1)",    // Dark Purple
      Radiant: "rgba(255, 223, 186, 1)",    // Pale Yellow
      Thunder: "rgba(155, 89, 182, 1)",     // Lavender
      Bludgeoning: "rgba(200, 200, 200, 1)", // Light Gray
      Piercing: "rgba(180, 180, 180, 1)",   // Medium Gray
      Slashing: "rgba(160, 160, 160, 1)",   // Dark Gray
      Force: "rgba(0, 255, 255, 1)",        // Bright Cyan
      Default: "rgba(78, 78, 78, 0.5)",     // Fallback Gray
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
