import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./EnhancedComparisonPage.css";
import EnhancedComparisonTitle from "../components/EnhancedComparisonTitle";
import MonsterDisplayName from "../components/MonsterDisplayName";
import MonsterDescription from "../components/MonsterDescription";
import MonsterCR from "../components/MonsterCR";
import MonsterSize from "../components/MonsterSize";
import MonsterVulnerabilities from "../components/MonsterVulnerabilities";
import MonsterResistances from "../components/MonsterResistances";
import MonsterImmunities from "../components/MonsterImmunities";
import MonsterHP from "../components/MonsterHP";
import MonsterAC from "../components/MonsterAC";
import AttributeRadarGraph from "../components/AttributeRadarGraph";

const EnhancedComparisonPage = () => {
  const location = useLocation();
  const [selectedMonster, setSelectedMonster] = useState(null); // LEFT monster
  const [selectedMonsterRight, setSelectedMonsterRight] = useState(null); // RIGHT monster

  useEffect(() => {
    if (location.state?.monster) {
      setSelectedMonster(location.state.monster);
    }
  }, [location.state]);

  return (
    <div className="enhanced-comparison-page">
      {/* Breadcrumbs */}
      <EnhancedComparisonTitle />
      {/* Comparison Container */}
      <div className="enhanced-comparison-container">
        <div className="enhanced-monster-name-wrapper">
          <MonsterDisplayName monsterName={selectedMonster?.name} />
        </div>
        <div className="enhanced-monster-description-wrapper">
          <MonsterDescription description={selectedMonster?.description} />
        </div>
        <div className="enhanced-monster-cr-wrapper">
          <MonsterCR cr={selectedMonster?.cr} />
        </div>
        <div className="enhanced-monster-size-wrapper">
          <MonsterSize size={selectedMonster?.size} />
        </div>
        <div className="enhanced-monster-vulnerability-wrapper">
          <MonsterVulnerabilities vulnerability={selectedMonster?.vulnerability} />
        </div>
        <div className="enhanced-monster-resistances-wrapper">
          <MonsterResistances resistance={selectedMonster?.resistances} />
        </div>
        <div className="enhanced-monster-immunities-wrapper">
          <MonsterImmunities immunity={selectedMonster?.immunities} />
        </div>
        <div className="enhanced-monster-hp-wrapper">
          <MonsterHP hp={selectedMonster?.hp} />
        </div>
        <div className="enhanced-monster-ac-wrapper">
          <MonsterAC ac={selectedMonster?.ac} />
        </div>
        <div className="enhanced-monster-name-wrapper-right">
          <MonsterDisplayName /> {/*monsterName={selectedMonsterRight.name}*/}
        </div>
        <div className="enhanced-monster-description-wrapper-right">
          <MonsterDescription /> {/* description={selectedMonsterRight.description} */}
        </div>
        <div className="enhanced-monster-cr-wrapper-right">
          <MonsterCR /> {/* cr={selectedMonsterRight.cr} */}
        </div>
        <div className="enhanced-monster-size-wrapper-right">
          <MonsterSize /> {/* size={selectedMonsterRight.size} */}
        </div>
        <div className="enhanced-monster-vulnerabilities-wrapper-right">
          <MonsterVulnerabilities /> {/* vulnerability={selectedMonsterRight.vulnerability} */}
        </div>
        <div className="enhanced-monster-resistances-wrapper-right">
          <MonsterResistances /> {/* resistances={selectedMonsterRight.resistances} */}
        </div>
        <div className="enhanced-monster-immunities-wrapper-right">
          <MonsterImmunities /> {/* immunities={selectedMonsterRight.immunities} */}
        </div>
        <div className="enhanced-monster-hp-wrapper-right">
          <MonsterHP /> {/* hp={selectedMonsterRight.hp} */}
        </div>
        <div className="enhanced-monster-ac-wrapper-right">
          <MonsterAC /> {/* ac={selectedMonsterRight.ac} */}
        </div>
        <div className="comparison-graph-placeholder">
          <AttributeRadarGraph
            monsterLeft={selectedMonster}
            monsterRight={selectedMonsterRight}
          />
        </div>
      </div>
    </div>
  );
};

export default EnhancedComparisonPage;