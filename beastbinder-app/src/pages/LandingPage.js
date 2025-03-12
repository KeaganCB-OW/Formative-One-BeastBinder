import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="hero-title-box">
        <h1>
          Welcome to <span className="highlight-text">BeastBinder</span>
        </h1>
      </div>

      <div className="hero-content-box">
        <div className="hero-text-block">
          <p>
            Are you a Dungeon Master looking to craft the perfect encounter for
            your players? BeastBinder is here to make the process effortless and
            exciting! Using the 5e API, our tool allows you to search for
            monsters based on Challenge Rating (CR), helping you build balanced
            and engaging battles tailored to your campaign.
            <br />
            <br />
            With BeastBinder, you’ll spend less time flipping through books and
            more time crafting unforgettable adventures. Start building your
            next encounter today!
          </p>
        </div>
      </div>

      <div className="hero-image-box">
        <img
          src="/assets/hero-Image.png"
          alt="BeastBinder Preview"
          className="hero-image"
        />
      </div>

      <div className="third-content-box">
  <div className="encounter-cr-graph-box">
    {/* Placeholder for Encounter CR Graph */}
    <p className="graph-placeholder-text">Encounter CR Graph Placeholder</p>
  </div>

  <div className="timeline-graph-box">
    {/* Placeholder for Timeline Graph */}
    <p className="graph-placeholder-text">Timeline Graph Placeholder</p>
  </div>
</div>
    </div>
    

  );
};

export default LandingPage;
