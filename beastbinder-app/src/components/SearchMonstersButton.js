import React from "react";
import { useNavigate } from "react-router-dom";
import "./SearchMonstersButton.css"; // Import the CSS file for styling

const SearchMonstersButton = () => {
  const navigate = useNavigate();

  return (
    <button className="search-monsters-button" onClick={() => navigate("/comparison")}>
      Search Monsters
    </button>
  );
};

export default SearchMonstersButton;
