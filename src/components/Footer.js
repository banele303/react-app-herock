import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Me</h2>
          <Link to="/">How it works</Link>
          <Link to="/">Testimonials</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
          <Link to="/">Contact</Link>
          <Link to="/">Support</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Skills</h2>
          <Link to="/">Front-End</Link>
          <Link to="/">Back-End</Link>
          <Link to="/">Other-Skills</Link>
          </div>
          <div class="footer-link-items">
            <h2>Socials</h2>
          <Link to="/">Instagram</Link>
          <Link to="/">Facebook</Link>
          <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
          <h to="/" className="social-logo">
              BlecoX
              <img alt='' src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/000000/external-coding-internet-technology-vitaliy-gorbachev-blue-vitaly-gorbachev.png"/>
          </h>
          </div>
          <small class="website-rights">BlecoX © 2021 designers</small>
          <div class="social-icons">
          <Link
              class="social-icon-link facebook"
              to="/"
              
            >
              <i class="fab fa-facebook-f" />
          </Link>
          <Link
              class="social-icon-link instagram"
              to="/"
           
            >
              <i class="fab fa-instagram" />
          </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
            
            >
              <i class="fab fa-youtube" />
          </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
             
            >
              <i class="fab fa-twitter" />
          </Link>
          <Link
              class="social-icon-link twitter"
              to="/"
            
            >
              <i class="fab fa-linkedin" />
          </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
