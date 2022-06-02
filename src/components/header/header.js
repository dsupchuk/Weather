import React from "react";
import "./header_link.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <h2>Weather</h2>
      </Link>
      <div className="header-right">
        <Link to="/" className="home-link">
          Home
        </Link>
        <Link to="/contact" className="contact-link">
          Contact
        </Link>
        <Link to="/help" className="help-link">
          Help
        </Link>
      </div>
    </div>
  );
};
