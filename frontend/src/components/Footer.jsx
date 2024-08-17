import React from 'react';
import '../../public/css/Footer.css';
import facebookLogo from '../../public/img/facebook-logo.jpg';
import instaLogo from '../../public/img/instagram-logo.jpg';
import twitterLogo from '../../public/img/twitter-logo.png';
import linkedinLogo from '../../public/img/linkedIn-logo.png';
import githublogo from '../../public/img/github-logo.png';

function Footer() {
    return (
      <footer id="footer">
        <div className="social-links">
          <a href="https://www.facebook.com/navjotkaur.gill.5454" target="_blank" rel="noopener noreferrer"><img src={facebookLogo} alt="Facebook" /></a>
          <a href="https://www.instagram.com/navjotkaurgill41/" target="_blank" rel="noopener noreferrer"><img src={instaLogo} alt="Instagram" /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><img src={twitterLogo} alt="Twitter" /></a>
          <a href="https://www.linkedin.com/in/navjotgillkaur/" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} alt="Linkedin" /></a>
          <a href="https://github.com/Navjotgill99" target="_blank" rel="noopener noreferrer"><img src={githublogo} alt="Github" /></a>

        </div>
        <div id="copyright">&copy; 2024 Navjot Kaur Gill. All rights reserved</div>
      </footer>
    );
  }
  
  export default Footer;