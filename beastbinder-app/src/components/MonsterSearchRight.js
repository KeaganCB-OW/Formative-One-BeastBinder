import React, { useEffect, useState } from "react";
import "./MonsterSearchRight.css";

const MonsterSearchRight = ({ onRightMonsterSelect }) => {
  const [monsterList, setMonsterList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedMonster, setSelectedMonster] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const capitalizeFirst = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const formatResistance = (resistanceStr) => {
    if (!resistanceStr || resistanceStr.trim() === "") return resistanceStr;

    const lowerCased = resistanceStr.toLowerCase();

    if (lowerCased.includes("nonmagical")) {
      return "Nonmagical";
    }

    return resistanceStr.charAt(0).toUpperCase() + resistanceStr.slice(1);
  };

  useEffect(() => {
    const fetchMonsters = async () => {
      const res = await fetch("https://www.dnd5eapi.co/api/monsters");
      const data = await res.json();
      setMonsterList(data.results);
    };
    fetchMonsters();
  }, []);

  const filteredMonsters = monsterList.filter((monster) =>
    monster.name.toLowerCase().startsWith(searchValue.toLowerCase())
  );

  const handleInputClick = () => {
    setSearchValue(""); // Clear the search bar
    setShowResults(true); // Show the results dropdown
  };

  const handleMonsterSelect = async (monster) => {
    try {
      const response = await fetch(`https://www.dnd5eapi.co${monster.url}`);
      const data = await response.json();

      const selected = {
        name: data.name || "Unknown",
        description: data.desc || capitalizeFirst(data.type),
        size: data.size || "Unknown Size",
        cr: data.challenge_rating?.toString() || "N/A",
        hp: data.hit_points?.toString() || "N/A",
        ac: data.armor_class?.[0]?.value?.toString() || "N/A",
        vulnerability: capitalizeFirst(
          data.damage_vulnerabilities?.[0] || "None"
        ),
        resistances: formatResistance(
          capitalizeFirst(data.damage_resistances?.[0] || "None")
        ),
        immunities: capitalizeFirst(data.damage_immunities?.[0] || "None"),
        attributes: {
          Strength: data.strength || 0,
          Dexterity: data.dexterity || 0,
          Constitution: data.constitution || 0,
          Intelligence: data.intelligence || 0,
          Wisdom: data.wisdom || 0,
          Charisma: data.charisma || 0,
        },
      };

      // Update state
      setSelectedMonster(selected.name); // Set the selected monster's name
      setSearchValue(selected.name); // Keep the selected monster's name in the search bar
      setShowResults(false); // Hide the results dropdown

      // Push the monster data up to EnhancedComparisonPage
      onRightMonsterSelect(selected);
    } catch (error) {
      console.error("Failed to fetch full monster details:", error);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Outer Search Box */}
      <div className="search-box-outer-right" onClick={handleInputClick}>
        <img
          src="/assets/magnifying-glass.svg"
          alt="Search"
          className="search-icon-right"
        />
        {/* Inner Search Box */}
        <div className="search-box-inner-right">
          <input
            className="search-input-right"
            type="text"
            placeholder="Search monsters..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>

      {showResults && (
        <div className="search-results-container-right">
          <div className="search-results-right">
            {filteredMonsters.length === 0 ? (
              <p className="empty-message-right">No monsters found.</p>
            ) : (
              filteredMonsters.map((monster) => (
                <div
                  key={monster.index}
                  className="search-result-right-entry"
                  onClick={() => handleMonsterSelect(monster)}
                >
                  <p className="monster-name-right">{monster.name}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MonsterSearchRight;
