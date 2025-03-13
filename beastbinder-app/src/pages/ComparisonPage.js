import React from "react";
import "./ComparisonPage.css";
import Breadcrumbs from "../components/Breadcrumbs";
import MonsterSearch from "../components/MonsterSearch";


const ComparisonPage = () => {
  return (
    <div className="comparison-page">
      <Breadcrumbs />
      <div className="comparison-title-container">
        <h2 className="comparison-title monsters-title">Monsters</h2>
        <h2 className="comparison-title details-title">Details</h2>
      </div>
      <div className="comparison-content-container">
      <MonsterSearch />
        {/* Future content will be placed here */}
      </div>
      
    </div>
  );
};

export default ComparisonPage;
