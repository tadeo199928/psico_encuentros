import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import "./NavBar.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const getPageName = () => {
    switch (location.pathname) {
      case "/":
        return "Inicio";
      case "/Sobremi":
        return "Sobre Mi";
      case "/Publicaciones":
        return "Publicaciones";
      case "/Contacto":
        return "Contacto";
      default:
        return "Inicio";
    }
  };

  return (
    <nav className="top">
      <div className="navbar-container">
        <div className="mobile-header">
          <span className="page-name">{getPageName()}</span>
          <button
            className="navbar-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>
        </div>

        <ul className="menu-left desktop-only">
          <li className="navbar-item">
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/Sobremi">Sobre Mi</NavLink>
          </li>
        </ul>

        <div className="logo-container">
          <img src="/psico.png" alt="Logo" className="logo" />
        </div>

        <ul className="menu-right desktop-only">
          <li className="navbar-item">
            <NavLink to="/Publicaciones">Publicaciones</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/Contacto">Contacto</NavLink>
          </li>
        </ul>

        <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <li className="navbar-item">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Inicio
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/Sobremi" onClick={() => setMenuOpen(false)}>
              Sobre Mi
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/Publicaciones" onClick={() => setMenuOpen(false)}>
              Publicaciones
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/Contacto" onClick={() => setMenuOpen(false)}>
              Contacto
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
