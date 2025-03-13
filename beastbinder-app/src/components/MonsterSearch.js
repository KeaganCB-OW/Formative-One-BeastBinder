import React, { useState } from "react";
import "./MonsterSearch.css";

const MonsterSearch = ({ onMonsterSelect }) => {
  // State for search input and selected monster
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonster, setSelectedMonster] = useState(null);

  // Hardcoded test monster list (to be replaced with API data later)
  const allMonsters = [
    { name: "Goblin", cr: 1 },
    { name: "Orc", cr: 2 },
    { name: "Dragon", cr: 15 },
    { name: "Beholder", cr: 13 },
    { name: "Basilisk", cr: 6 },
  ];

  // Dynamically filter monsters based on strict search input matching
  const filteredMonsters = searchTerm
    ? allMonsters.filter((monster) =>
        monster.name.toLowerCase().startsWith(searchTerm.toLowerCase()) // Strict matching from the start of the word
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
      onMonsterSelect(selected); // Pass selected monster data to parent component
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

      {/* Search Results List (Results container is always visible) */}
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
            <p className="empty-message">No monsters found</p> // Placeholder message when no results match
          )}
        </div>

        {/* Compare Button (Only visible if there are results) */}
        {filteredMonsters.length > 0 && <button className="compare-button">Compare</button>}
      </div>
    </div>
  );
};

export default MonsterSearch;
