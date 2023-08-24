import React from "react";
import "./Footer.css";
// import N from "../N letter.png"
// import N2 from "../N2 letter.jpeg";
import {
  FaFacebookSquare,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaLocationArrow,
} from "react-icons/fa";
import { MdSmartphone } from "react-icons/md";

function Footer() {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb__footer-link">
          <div className="sb__footer-link_div">
            
            <div className="fotterSiren">
           
              <h1 className="allSiren">
                <span className="the">The</span> Siren
              </h1>
            </div>
            <div className="phone">
              <MdSmartphone className="phoneSize" />
              <p>+91 1234576500</p>
            </div>
            <div className="phone">
              <FaLocationArrow className="phoneSize" />
              <p>easupport@pre.com</p>
            </div>
          </div>
          <div className="sb__footer-link_div">
            <h2>Services</h2>
            <a href="/Blog">
              <p>Identity Verification</p>
            </a>
            <a href="/Blog">
              <p>Criminal Check</p>
            </a>
            <a href="/Blog">
              <p>Address Verification</p>
            </a>
            <a href="/Blog">
              <p>Employee Verification</p>
            </a>
            <a href="/Blog">
              <p>Education Verification</p>
            </a>
            <a href="/Blog">
              <p>Credit Check</p>
            </a>
          </div>
          <div className="sb__footer-link_div">
            <h2>Resources</h2>
            <a href="/Blog">
              <p>Blog</p>
            </a>
            <a href="/Blog">
              <p>Help Center</p>
            </a>
            <a href="/Blog">
              <p>Careers</p>
            </a>
            <a href="/Blog">
              <p>Contact Us</p>
            </a>
          </div>
          <div className="sb__footer-link_div">
            <h2>Project</h2>
            <a href="/Blog">
              <p>Bollywood</p>
            </a>
            <a href="/Blog">
              <p>Hollywood</p>
            </a>
            <a href="/Blog">
              <p>Technology</p>
            </a>
            <a href="/Blog">
              <p>Fitness</p>
            </a>
            <a href="/Blog">
              <p>Food</p>
            </a>
          </div>
          <div className="sb__footer-link_div">
            <h2>Social Media</h2>
            <div className="socialmedia">
              <FaFacebookSquare className="phoneSize" />
              <FaYoutube className="phoneSize" />
              <FaLinkedin className="phoneSize" />
              <FaInstagram className="phoneSize" />
             
            </div>
          </div>
        </div>
        <hr />

        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>@{new Date().getFullYear()} BlogPage.All right reversed.</p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/Blog">
              <div>
                <p>Term & condition</p>
              </div>
            </a>
            <a href="/Blog">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/Blog">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/Blog">
              <div>
                <p>Cookies Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
