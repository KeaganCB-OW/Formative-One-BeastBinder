import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  const routes = {
    landing: '/',
    comparison: '/comparison',
    timeline: '/timeline',
  };

  return (
    <nav className="navbar">
      <div className="navbar-icons">
        {/* Landing Page Icon */}
        <Link
          to={routes.landing}
          className={`nav-icon ${
            location.pathname === routes.landing ? 'active' : ''
          }`}
        >
          <img src="\assets\landing-icon.svg" alt="Landing" />
        </Link>

        {/* Comparison Page Icon */}
        <Link
          to={routes.comparison}
          className={`nav-icon ${
            location.pathname === routes.comparison ? 'active' : ''
          }`}
        >
          <img src="/assets/comparison-icon.svg" alt="Comparison" />
        </Link>

        {/* Timeline Page Icon */}
        <Link
          to={routes.timeline}
          className={`nav-icon ${
            location.pathname === routes.timeline ? 'active' : ''
          }`}
        >
          <img src="/assets/timeline-icon.svg" alt="Timeline" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
