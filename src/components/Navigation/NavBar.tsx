import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./NavBar.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="top">
      <div className="navbar-container">
        {/* Desktop Navigation */}
        <ul className="menu-left desktop-only">
          <li className="navbar-item">
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/Contacto">Contacto</NavLink>
          </li>
        </ul>

        <div className="logo-container">
          <img src="/psico.png" alt="Logo" className="logo" />
        </div>

        <ul className="menu-right desktop-only">
          <li className="navbar-item">
            <NavLink to="/Sobremi">Sobre Mi</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/Publicaciones">Publicaciones</NavLink>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>

        {/* Mobile Navigation */}
        <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <li className="navbar-item">
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/Contacto">Contacto</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/Sobremi">Sobre Mi</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/Publicaciones">Publicaciones</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;