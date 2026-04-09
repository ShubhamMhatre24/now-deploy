import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./styles/Footer_style.css"

export default function Footer() {
  return (
    <div>

        <div id="feedback-container">
            <form>
                <h4 id="stey-connected-text">Stay Connected!</h4>
                <div style={{display:"flex"}}>
                    <textarea className="feedback-style" placeholder="Enter Your Feedback..."/>
                    <br />
                    <button id="fb-submit-btn">Submit</button>
                </div>
            </form>
        </div>
        <footer className="footer">
        <div className="footer-container">
            
            <div className="footer-column">
            <h4>Company</h4>
            <ul>
                <li><Link to="/#">About Us</Link></li>
                <li><Link to="/#">Our Services</Link></li>
                <li><Link to="/#">Privacy Policy</Link></li>
                <li><Link to="/#">Affiliate Program</Link></li>
            </ul>
            </div>

            <div className="footer-column">
            <h4>Get Help</h4>
            <ul>
                <li><Link to="/#">FAQ</Link></li>
                <li><Link to="/#">Shipping</Link></li>
                <li><Link to="/#">Safty Tips</Link></li>
                <li><Link to="/#">Customer Care</Link></li>
                
            </ul>
            </div>

            <div className="footer-column">
            <h4>Online Shop</h4>
            <ul>
                <li><Link to="/#">Watch</Link></li>
                <li><Link to="/#">Bag</Link></li>
                <li><Link to="/#">Shoes</Link></li>
                <li><Link to="/#">Dress</Link></li>
                <li><Link to="/#">More Options</Link></li>
                
            </ul>
            </div>

            <div className="footer-column">
            <h4>Follow Us</h4>
            <div className="social-links">
                <Link to="#"><FaFacebookF /></Link>
                <Link to="#"><FaTwitter /></Link>
                <Link to="#"><FaInstagram /></Link>
                <Link to="#"><FaLinkedinIn /></Link>
            </div>
            </div>

        </div>
        <pre style={{textAlign:"end"}}>~ Made by SSY ❤️        </pre>
            
        </footer>

    

    </div>
  );
}
