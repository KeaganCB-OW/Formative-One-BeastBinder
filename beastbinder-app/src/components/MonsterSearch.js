import React, { useEffect, useState } from "react";
import "./MonsterSearch.css";
import { useNavigate } from "react-router-dom";

const MonsterSearch = ({ onMonsterSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [monsterResults, setMonsterResults] = useState([]);
  const [selectedMonsterIndex, setSelectedMonsterIndex] = useState(null);
  const [selectedMonster, setSelectedMonster] = useState(null);
  const navigate = useNavigate();

  // Fetch full list of monsters on load
  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const response = await fetch("https://www.dnd5eapi.co/api/monsters");
        const data = await response.json();
        setMonsterResults(data.results);
      } catch (error) {
        console.error("Failed to fetch monster list", error);
      }
    };

    fetchMonsters();
  }, []);

  // When a monster is selected, fetch full details
  const handleMonsterClick = async (monster) => {
    try {
      const response = await fetch(
        `https://www.dnd5eapi.co/api/monsters/${monster.index}`
      );
      const data = await response.json();

      const formattedMonster = {
        name: data.name || "Unknown",
        description: data.desc || capitalizeFirst(data.type),
        size: data.size || "Unknown Size",
        cr: data.challenge_rating?.toString() || "N/A",
        hp: data.hit_points?.toString() || "N/A",
        ac: data.armor_class?.[0]?.value?.toString() || "N/A",
        vulnerability: capitalizeFirst(data.damage_vulnerabilities?.[0] || "None"),
        resistances: formatResistance(capitalizeFirst(data.damage_resistances?.[0] || "None")),
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

      setSelectedMonsterIndex(monster.index);
      setSelectedMonster(formattedMonster);
      onMonsterSelect(formattedMonster);
    } catch (error) {
      console.error("Error fetching monster details", error);
    }
  };

  const capitalizeFirst = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const formatResistance = (resistanceStr) => {
    if (!resistanceStr || resistanceStr.trim() === "") return resistanceStr;
  
    const lowerCased = resistanceStr.toLowerCase();
  
    if (
      lowerCased.includes("nonmagical")
    ) {
      return "Nonmagical";
    }
  
    // Capitalize the first letter only, return as-is otherwise
    return resistanceStr.charAt(0).toUpperCase() + resistanceStr.slice(1);
  };
  

  const handleCompare = () => {
    if (selectedMonster) {
      navigate("/enhanced-comparison", {
        state: {
          selectedMonsterLeft: selectedMonster,
        },
      });
    } else {
      console.log("No monster selected");
    }
  };

  const filteredResults = monsterResults.filter((monster) =>
    monster.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search Bar */}
      <div className="search-box-outer">
        <img
          src="/assets/magnifying-glass.svg"
          alt="Search"
          className="search-icon"
        />
        <div className="search-box-inner">
          <input
            type="text"
            placeholder="Search monsters..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {/* Results Box */}
      <div className="search-results-container">
        <div className="search-results">
          {searchTerm &&
            filteredResults.map((monster) => (
              <div
                key={monster.index}
                className={`monster-entry ${
                  selectedMonsterIndex === monster.index ? "selected" : ""
                }`}
                onClick={() => handleMonsterClick(monster)}
              >
                <span className="monster-name">{monster.name}</span>
                <span className="cr-label">CR</span>
                <div className="cr-box">
                <div className="cr-box-text">
                  {selectedMonsterIndex === monster.index &&
                  selectedMonster?.cr
                    ? selectedMonster.cr
                    : "--"}
                    </div>
                </div>
              </div>
            ))}
          {!searchTerm && (
            <div className="empty-message">Start typing to find monsters.</div>
          )}
        </div>

        {/* Compare Button */}
        <button className="compare-button" onClick={handleCompare}>
          Compare
        </button>
      </div>
    </div>
  );
};

export default MonsterSearch;
