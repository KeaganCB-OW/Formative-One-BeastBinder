import React from "react";
import "./MonsterSize.css";

const MonsterSize = ({ size }) => {
  return (
    <div className="monster-size-container">
      {/* Outer Box (Label) */}
      <div className="monster-size-label">Size</div>

      {/* Inner Box (Size Display Box) */}
      <div className="monster-size-box">
        <span className={`size-text ${!size ? "placeholder" : ""}`}>
          {size || "Size"}
        </span>
      </div>
    </div>
  );
};

export default MonsterSize;
