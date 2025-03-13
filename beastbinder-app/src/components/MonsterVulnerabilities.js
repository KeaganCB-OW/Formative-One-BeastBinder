import React from "react";
import "./MonsterVulnerabilities.css";

const getVulnerabilityColor = (vulnerability) => {
  const colors = {
    Fire: "rgba(255, 165, 0, 1)", // Orange
    Cold: "rgba(0, 168, 255, 1)", // Cyan
    Poison: "rgba(83, 163, 81, 1)", // Green
    Psychic: "rgba(162, 50, 168, 1)", // Purple
    Lightning: "rgba(0, 116, 217, 1)", // Electric Blue
    Acid: "rgba(76, 187, 23, 1)", // Lime Green
    Necrotic: "rgba(108, 92, 231, 1)", // Dark Purple
    Radiant: "rgba(255, 223, 186, 1)", // Pale Yellow
    Thunder: "rgba(155, 89, 182, 1)", // Lavender
    Default: "rgba(78, 78, 78, 0.5)", // Gray for unknown values
  };
  return colors[vulnerability] || "rgba(78, 78, 78, 0.5)"; // Default Gray
};

const MonsterVulnerabilities = ({ vulnerability }) => {
  const displayText = vulnerability || "Unknown";
  const backgroundColor = getVulnerabilityColor(vulnerability);

  return (
    <div className="monster-vulnerabilities-container">
      {/* Outer Box (Label) */}
      <div className="monster-vulnerabilities-label">Vulnerabilities</div>

      {/* Inner Box (Vulnerability Display Box) */}
      <div className="monster-vulnerabilities-box" style={{ backgroundColor }}>
        <span className={`vulnerability-text ${!vulnerability ? "placeholder" : ""}`}>
          {displayText}
        </span>
      </div>
    </div>
  );
};

export default MonsterVulnerabilities;
