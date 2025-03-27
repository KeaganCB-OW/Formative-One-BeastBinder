import React, { useEffect, useState } from "react";
import "./MonsterSearchRight.css";

const MonsterSearchRight = ({ onRightMonsterSelect }) => {
  const [monsterList, setMonsterList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedMonster, setSelectedMonster] = useState(null);
  const [showResults, setShowResults] = useState(false);

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
    setSearchValue("");
    setShowResults(true);
  };

  const handleMonsterSelect = async (monster) => {
    const res = await fetch(`https://www.dnd5eapi.co${monster.url}`);
    const data = await res.json();
    setSelectedMonster(data);
    setSearchValue(data.name); // Display name in input
    setShowResults(false); // Hide results after selection
    onRightMonsterSelect(data);
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
  className="search-result-right-entry "
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
