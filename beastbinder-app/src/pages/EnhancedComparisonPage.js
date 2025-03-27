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
import MonsterSearchRight from "../components/MonsterSearchRight";
import HpComparisonPieChart from "../components/HpComparisonPieChart";
import MonsterStatsBarChart from "../components/MonsterStatsBarChart";

const EnhancedComparisonPage = () => {
  const location = useLocation();
  const [selectedMonster, setSelectedMonster] = useState(null); // LEFT monster
  const [selectedMonsterRight, setSelectedMonsterRight] = useState(null); // RIGHT monster

  useEffect(() => {
    if (location.state?.selectedMonsterLeft) {
      setSelectedMonster(location.state.selectedMonsterLeft);
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
        <div className="enhanced-monster-cr-wrapper">
          <MonsterCR cr={selectedMonster?.cr} />
        </div>
        <div className="enhanced-monster-size-wrapper">
          <MonsterSize size={selectedMonster?.size} />
        </div>
        <div className="enhanced-monster-vulnerability-wrapper">
          <MonsterVulnerabilities
            vulnerability={selectedMonster?.vulnerability}
          />
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
        <div className="enhanced-monster-cr-wrapper-right">
          <MonsterCR cr={selectedMonsterRight?.cr} />{" "}
          {/* cr={selectedMonsterRight.cr} */}
        </div>

        <div className="enhanced-monster-size-wrapper-right">
          <MonsterSize size={selectedMonsterRight?.size} />{" "}
          {/* size={selectedMonsterRight.size} */}
        </div>

        <div className="enhanced-monster-vulnerabilities-wrapper-right">
          <MonsterVulnerabilities
            vulnerability={selectedMonsterRight?.vulnerability}
          />{" "}
          {/* vulnerability={selectedMonsterRight.vulnerability} */}
        </div>

        <div className="enhanced-monster-resistances-wrapper-right">
          <MonsterResistances resistance={selectedMonsterRight?.resistances} />{" "}
          {/* resistance={selectedMonsterRight.resistances} */}
        </div>

        <div className="enhanced-monster-immunities-wrapper-right">
          <MonsterImmunities immunity={selectedMonsterRight?.immunities} />{" "}
          {/* immunity={selectedMonsterRight.immunities} */}
        </div>

        <div className="enhanced-monster-hp-wrapper-right">
          <MonsterHP hp={selectedMonsterRight?.hp} />{" "}
          {/* hp={selectedMonsterRight.hp} */}
        </div>

        <div className="enhanced-monster-ac-wrapper-right">
          <MonsterAC ac={selectedMonsterRight?.ac} />{" "}
          {/* ac={selectedMonsterRight.ac} */}
        </div>

        <div className="comparison-graph-placeholder">
          <AttributeRadarGraph
            monsterLeft={selectedMonster}
            monsterRight={selectedMonsterRight}
          />
        </div>
        <div className="comparison-bargraph-placeholder">
          <MonsterStatsBarChart
            monsterLeft={selectedMonster}
            monsterRight={selectedMonsterRight}
          />
        </div>
        <div className="comparison-bargraph-label">Stats Comparison</div>

        
        <div className="comparison-piechart-placeholder">
          {selectedMonster && selectedMonsterRight && (
            <HpComparisonPieChart
              hpLeft={selectedMonster.hp}
              hpRight={selectedMonsterRight.hp}
              nameLeft={selectedMonster.name}
              nameRight={selectedMonsterRight.name}
            />
          )}
        </div>
        <div className="comparison-piechart-label">HP Comparison</div>
        <div className="enhanced-monster-name-wrapper-right">
          <MonsterSearchRight onRightMonsterSelect={setSelectedMonsterRight} />
        </div>
      </div>
    </div>
  );
};

export default EnhancedComparisonPage;
