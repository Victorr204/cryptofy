import React from "react";
import "./styles/footer.css"

const Footer = () => {
  return (
    <>
    <footer className="app-footer  dark:bg-slate-900 dark:text-white p-4 bg-slate-200">
      <div className="footer-content">
        <p>© 2025 Crypto Platform. All rights reserved.</p>
        <p>Reach us on:</p>
        <ul className="social-links">
          <li>
            <a href="https://web.facebook.com/victor.reuben.7334" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/reuben_fx_0/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="victorreuben707@gmail.com">Email Us</a>
          </li>
        </ul>
      </div>
    </footer>


    </>
  );
};

export default Footer;
