import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h2>
        <img src="/logo.svg" alt="AutoVibe logo" />
        AUTO<span>VIBE</span>
      </h2>
      <p>Your Automotive World – Reviews, Guides & Technology.</p>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="footer-links">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms">Terms & Conditions</Link>
      </div>

      <p>© 2026 AutoVibe. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
