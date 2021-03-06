import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <nav className="footer-navbar" aria-label="navigation for footer">
      <div className="footer-nav-center">
        <Link to="/privacypolicy">PRIVACY POLICY</Link>
      </div>
    </nav>
  );
}

export default Footer;
