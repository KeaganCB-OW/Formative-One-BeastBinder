import React, { useState } from "react";
import "./EnhancedComparisonPage.css";
import Breadcrumbs from "../components/Breadcrumbs";
import MonsterDisplayName from "../components/MonsterDisplayName";
import MonsterDescription from "../components/MonsterDescription";
import MonsterSize from "../components/MonsterSize";
import MonsterCR from "../components/MonsterCR";
import MonsterHP from "../components/MonsterHP";
import MonsterAC from "../components/MonsterAC";
import MonsterVulnerabilities from "../components/MonsterVulnerabilities";
import MonsterResistances from "../components/MonsterResistances";
import MonsterImmunities from "../components/MonsterImmunities";

const EnhancedComparisonPage = () => {
  const [selectedMonster1, setSelectedMonster1] = useState({
    name: "",
    description: "",
    size: "",
    cr: "",
    hp: "",
    ac: "",
    vulnerability: "",
    resistances: "",
    immunities: "",
  });

  const [selectedMonster2, setSelectedMonster2] = useState({
    name: "",
    description: "",
    size: "",
    cr: "",
    hp: "",
    ac: "",
    vulnerability: "",
    resistances: "",
    immunities: "",
  });

  return (
    <div className="enhanced-comparison-page">
      <Breadcrumbs />
      <div className="comparison-title-container">
        <h2 className="comparison-title">Comparison</h2>
      </div>
      
      <div className="comparison-content-container">
        {/* Monster 1 Section */}
        <div className="monster-section">
          <MonsterDisplayName monsterName={selectedMonster1.name} />
          <MonsterDescription description={selectedMonster1.description} />
          <MonsterSize size={selectedMonster1.size} />
          <MonsterCR cr={selectedMonster1.cr} />
          <MonsterHP hp={selectedMonster1.hp} />
          <MonsterAC ac={selectedMonster1.ac} />
          <MonsterVulnerabilities vulnerability={selectedMonster1.vulnerability} />
          <MonsterResistances resistance={selectedMonster1.resistances} />
          <MonsterImmunities immunity={selectedMonster1.immunities} />
        </div>

        {/* Monster 2 Section */}
        <div className="monster-section">
          <MonsterDisplayName monsterName={selectedMonster2.name} />
          <MonsterDescription description={selectedMonster2.description} />
          <MonsterSize size={selectedMonster2.size} />
          <MonsterCR cr={selectedMonster2.cr} />
          <MonsterHP hp={selectedMonster2.hp} />
          <MonsterAC ac={selectedMonster2.ac} />
          <MonsterVulnerabilities vulnerability={selectedMonster2.vulnerability} />
          <MonsterResistances resistance={selectedMonster2.resistances} />
          <MonsterImmunities immunity={selectedMonster2.immunities} />
        </div>
      </div>

      {/* Placeholder for Bar Graph */}
      <div className="attribute-graph-box">BAR GRAPH</div>
    </div>
  );
};

export default EnhancedComparisonPage;
