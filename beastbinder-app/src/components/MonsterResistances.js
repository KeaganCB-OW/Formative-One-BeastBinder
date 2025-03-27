import React from "react";
import "./MonsterResistances.css";

const resistanceColors = {
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
};

const MonsterResistances = ({ resistance }) => {
  const backgroundColor = resistanceColors[resistance] || resistanceColors.Default;

  return (
    <div className="monster-resistances-container">
      {/* Outer Box (Label) */}
      <div className="monster-resistances-label">Resistances</div>

      {/* Inner Box (Resistance Display Box) */}
      <div className="monster-resistances-box" style={{ backgroundColor }}>
        <span className={`resistance-text ${!resistance ? "placeholder" : ""}`}>
          {resistance || "Unknown"}
        </span>
      </div>
    </div>
  );
};

export default MonsterResistances;
