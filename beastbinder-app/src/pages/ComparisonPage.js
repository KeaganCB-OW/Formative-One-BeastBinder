import React, { useState } from "react";
import "./ComparisonPage.css";
import Breadcrumbs from "../components/Breadcrumbs";
import MonsterSearch from "../components/MonsterSearch";
import MonsterDisplayName from "../components/MonsterDisplayName";
import MonsterDescription from "../components/MonsterDescription";
import MonsterSize from "../components/MonsterSize";
import MonsterCR from "../components/MonsterCR";
import MonsterHP from "../components/MonsterHP";
import MonsterAC from "../components/MonsterAC";


const ComparisonPage = () => {
  const [selectedMonster, setSelectedMonster] = useState({
    name: "",
    description: "",
    size: "",
    cr: "",
    hp: "",
  });

  return (
    <div className="comparison-page">
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs />

      {/* Title Section */}
      <div className="comparison-title-container">
        <h2 className="comparison-title monsters-title">Monsters</h2>
        <h2 className="comparison-title details-title">Details</h2>
      </div>

      {/* Content Placement Container */}
      <div className="comparison-content-container">
        {/* Monster Search Component */}
        <MonsterSearch
          onMonsterSelect={(monster) => setSelectedMonster(monster)}
        />

        {/* Monster Display Name Component */}
        <div className="monster-name-wrapper">
          <MonsterDisplayName monsterName={selectedMonster.name} />
        </div>

        {/* Monster Description Component */}
        <div className="monster-description-wrapper">
          <MonsterDescription description={selectedMonster.description} />
        </div>

        {/* Monster Size Component */}
        <div className="monster-size-wrapper">
          <MonsterSize size={selectedMonster.size} />
        </div>

        {/* Monster CR Component */}
        <div className="monster-cr-wrapper">
          <MonsterCR cr={selectedMonster.cr} />
        </div>

        {/* Monster AC Component (TEMPORARY TESTING) */}
<div className="monster-ac-wrapper">
  <MonsterAC ac={selectedMonster.ac} />
</div>
        
      </div>
    </div>
  );
};

export default ComparisonPage;
