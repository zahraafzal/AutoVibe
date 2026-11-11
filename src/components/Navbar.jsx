import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();

    if (searchText.trim() !== "") {
      navigate("/blog?search=" + searchText.trim());
      setSearchText("");
      setShowSearch(false);
      setMenuOpen(false);
    }
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        <img src="/logo.svg" alt="AutoVibe logo" />
        <div>
          AUTO<span>VIBE</span>
          <small>YOUR AUTOMOTIVE WORLD</small>
        </div>
      </Link>

      <nav className={menuOpen ? "open" : ""}>
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>
        <NavLink to="/blog" onClick={closeMenu}>
          Blog
        </NavLink>
        <NavLink to="/categories" onClick={closeMenu}>
          Categories
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>
      </nav>

      <div className="nav-buttons">
        <button className="search-btn" onClick={() => setShowSearch(!showSearch)}>
          Search
        </button>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {showSearch && (
        <form className="search-box" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            autoFocus
          />
          <button type="submit">Go</button>
        </form>
      )}
    </header>
  );
}

export default Navbar;
