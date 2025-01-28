import React from "react";
import "./Footer.css";
import ftl from "../../assets/Frame 4.png";
import { Link } from "react-router-dom";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-links">
          <div className="footer-logo">
            <Link to="/">
              <img src={ftl} alt="For Life"  />
            </Link>
          </div>
          <Link to="/about">About</Link>
          <Link to="/event">Events</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-social">
          <a href="#" className="twitter-link">
            <img src={twitter} alt="twitter" className="twitter-icon" />
            <span className="twitter-text">X</span>
          </a>
          <a href="#">Tiktok</a>
          <a href="#">Instagram</a>
          <a href="#">Youtube</a>
        </div>
      </div>
      <div className="footer-bottom">
        <h2>&copy; 2024 4TL™</h2>
      </div>
    </footer>
  );
};

export default Footer;