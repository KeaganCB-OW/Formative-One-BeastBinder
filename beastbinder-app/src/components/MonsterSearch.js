import React, { useState } from "react";
import "./MonsterSearch.css";
import { useNavigate } from "react-router-dom"; 

const MonsterSearch = ({ onMonsterSelect }) => {
  // State for search input and selected monster
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonster, setSelectedMonster] = useState(null);
  const navigate = useNavigate(); 
  // Hardcoded test monster list
  const allMonsters = [
    {
      name: "Beholder",
      description: "A floating orb of flesh with a large central eye and many smaller eyestalks.",
      size: "Large",
      cr: "13",
      hp: "180",
      ac: "18",
      vulnerability: "None",
      resistances: "None",
      immunities: "Charm",
      attributes: {
        strength: 10,
        dexterity: 14,
        constitution: 18,
        intelligence: 17,
        wisdom: 15,
        charisma: 12,
      },
    },
    {
      name: "Basilisk",
      description: "A reptilian monster whose gaze can turn creatures to stone.",
      size: "Medium",
      cr: "3",
      hp: "52",
      ac: "15",
      vulnerability: "Cold",
      resistances: "Poison",
      immunities: "None",
      attributes: {
        strength: 16,
        dexterity: 8,
        constitution: 15,
        intelligence: 2,
        wisdom: 8,
        charisma: 7,
      },
    },
    {
      name: "Goblin",
      description: "A small, green-skinned humanoid known for its trickery and mischief.",
      size: "Small",
      cr: "1/4",
      hp: "7",
      ac: "13",
      vulnerability: "None",
      resistances: "None",
      immunities: "None",
      attributes: {
        strength: 8,
        dexterity: 14,
        constitution: 10,
        intelligence: 10,
        wisdom: 8,
        charisma: 8,
      },
    },
    {
      name: "Fire Elemental",
      description: "A being of pure fire that ignites everything it touches.",
      size: "Large",
      cr: "5",
      hp: "102",
      ac: "14",
      vulnerability: "Cold",
      resistances: "Fire",
      immunities: "Burn",
      attributes: {
        strength: 10,
        dexterity: 17,
        constitution: 16,
        intelligence: 6,
        wisdom: 10,
        charisma: 7,
      },
    },
    {
      name: "Lich",
      description: "A powerful undead spellcaster who has bound its soul to a phylactery.",
      size: "Medium",
      cr: "21",
      hp: "135",
      ac: "17",
      vulnerability: "Radiant",
      resistances: "Necrotic",
      immunities: "Poison",
      attributes: {
        strength: 11,
        dexterity: 16,
        constitution: 16,
        intelligence: 20,
        wisdom: 14,
        charisma: 16,
      },
    },
  ];
  

  // Dynamically filter monsters based on strict search input matching
  const filteredMonsters = searchTerm
    ? allMonsters.filter((monster) =>
        monster.name.toLowerCase().startsWith(searchTerm.toLowerCase()) // Strict matching
      )
    : [];

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle monster selection
  const handleMonsterClick = (index) => {
    setSelectedMonster(index);
    const selected = filteredMonsters[index];
    console.log("Selected Monster:", selected); // Logs selected monster's details

    if (onMonsterSelect) {
      onMonsterSelect(selected); // Pass selected monster's data to parent component
    }
  };

  const handleCompare = () => {
    navigate("/enhanced-comparison");
  };
  

  return (
    <div className="search-box-outer">
      {/* Magnifying Glass Icon */}
      <img src="/assets/magnifying-glass.svg" alt="Search" className="search-icon" />

      {/* Search Box Inner */}
      <div className="search-box-inner">
        <input
          type="text"
          className="search-input"
          placeholder="Search for a monster..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Search Results List (Always Visible) */}
      <div className="search-results-container">
        <div className="search-results">
          {filteredMonsters.length > 0 ? (
            filteredMonsters.map((monster, index) => (
              <div
                key={index}
                className={`monster-entry ${selectedMonster === index ? "selected" : ""}`}
                onClick={() => handleMonsterClick(index)}
              >
                <span className="monster-name">{monster.name}</span>
                <span className="cr-label">CR</span>
                <div className="cr-box">
                  <span className="cr-number">{monster.cr}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="empty-message">No monsters found</p>
          )}
        </div>


        {filteredMonsters.length > 0 && (
          <button className="compare-button" onClick={handleCompare}>
            Compare
          </button>
        )}
      </div>
    </div>
  );
};

export default MonsterSearch;
