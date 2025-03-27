import React from "react";
import { useNavigate } from "react-router-dom";
import "./EnhancedComparisonTitle.css";

const EnhancedComparisonTitle = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/comparison");
  };

  return (
    <div className="enhanced-comparison-title-container">
      <button className="back-button" onClick={handleBackClick}>
        Back
      </button>
      <div className="comparison-title-text">Comparison</div>
    </div>
  );
};

export default EnhancedComparisonTitle;
