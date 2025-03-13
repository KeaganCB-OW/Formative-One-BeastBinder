import React, { useState } from "react";
import "./MonsterSearch.css";

const MonsterSearch = ({ onMonsterSelect }) => {
  // State for search input and selected monster
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonster, setSelectedMonster] = useState(null);

  // Hardcoded test monster list (now includes descriptions)
  const allMonsters = [
    { name: "Goblin", cr: 1, size: "Small", hp: 7, ac: 15, description: "A small, green creature that thrives in numbers." },
    { name: "Orc", cr: 2, size: "Medium", hp: 15, ac: 13, description: "A fierce warrior race known for their brute strength." },
    { name: "Dragon", cr: 15, size: "Huge", hp: 300, ac: 19, description: "A powerful, fire-breathing beast that rules the skies." },
    { name: "Beholder", cr: 13, size: "Large", hp: 180, ac: 18, description: "A floating, eye-covered monster with deadly magical rays." },
    { name: "Basilisk", cr: 6, size: "Medium", hp: 52, ac: 12, description: "A serpent-like creature whose gaze can turn foes to stone." },
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

        {/* Compare Button (Only visible if there are results) */}
        {filteredMonsters.length > 0 && <button className="compare-button">Compare</button>}
      </div>
    </div>
  );
};

export default MonsterSearch;
