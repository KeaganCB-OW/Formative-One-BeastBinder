import React from "react";
import { useNavigate } from "react-router-dom";
import "./SearchMonstersButton.css"; 

const SearchMonstersButton = () => {
  const navigate = useNavigate();

  return (
    <button className="search-monsters-button" onClick={() => navigate("/comparison")}>
      Search Monsters
    </button>
  );
};

export default SearchMonstersButton;
