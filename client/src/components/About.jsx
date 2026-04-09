import React from "react";
import "./styles/About.css";
import { FaHandshake, FaTags, FaShieldAlt, FaLeaf } from "react-icons/fa";
import { NavLink } from "react-router-dom";


export default function About() {
  return (
    <section className="about-page">
        
      <div className="about-container">
        {/* Hero / Intro */}
        <h1>About Us <span className="highlight">#SecondLife</span></h1>
        <p className="intro">
          Welcome to <span className="highlight">SecondLife</span> – your trusted
          marketplace for buying and selling second-hand products. Our mission
          is to make shopping affordable, safe, and eco-friendly while helping
          communities connect.
        </p>

        {/* How it Works */}
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <FaTags className="icon" />
            <h3>1. Post Your Item</h3>
            <p>List your unused items in minutes with pictures & details.</p>
          </div>
          <div className="step">
            <FaHandshake className="icon" />
            <h3>2. Connect with Buyers</h3>
            <p>Chat safely with interested buyers or sellers in real-time.</p>
          </div>
          <div className="step">
            <FaShieldAlt className="icon" />
            <h3>3. Safe Exchange</h3>
            <p>Meet in safe locations and complete secure transactions.</p>
          </div>
        </div>

        {/* Why Choose Us */}
        <h2>Why Choose Us?</h2>
        <ul className="benefits">
          <li>💰 Save money on quality pre-loved items</li>
          <li>🌍 Contribute to reducing waste & promoting sustainability</li>
          <li>🔒 Trusted community with verified profiles</li>
          <li>⚡ Fast & easy to use platform</li>
        </ul>

        {/* Community Impact */}
        <div className="impact">
          <FaLeaf className="icon big" />
          <p>
            Every item resold helps reduce waste and makes a positive impact on
            the environment. Together, we’re building a greener future. 🌱
          </p>
        </div>

        {/* Contact */}
        <h2>Need Help?</h2>
        <p className="contact">
          Have questions? Reach us at{" "}
          <a href="mailto:support@reusehub.com">support@SecondLife.com</a>
        </p>

        {/* Call to Action */}
        <NavLink to="/sell" className="cta-btn">
          Start Selling Today →
        </NavLink>
      </div>
    </section>
  );
}
