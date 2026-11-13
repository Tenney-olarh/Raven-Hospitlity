import { useState } from "react";
import { Link } from "react-router-dom";
import { FiBell, FiMenu, FiX } from "react-icons/fi";

function Navbar({ menu }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navs ${isOpen ? "navs--open" : ""}`}>
      {/* Logo */}
      <Link to="/" onClick={closeMenu}>
        <img src="/logo.svg" alt="Site Logo" className="navselogo" />
      </Link>

      <div className="nav__bar">
        {/* Navigation Links */}
        <ul className={`nav__menus ${isOpen ? "open" : ""}`}>
          {menu.map((item) => (
            <li key={item.id}>
              <Link to={item.path} onClick={closeMenu}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Notification */}
        <button className="nav__notification" aria-label="Notifications">
          <FiBell />
        </button>

        {/* Avatar */}
        <div className="nav__avatar-wrapper">
          <img
            src="/avatar-homepage.jpg"
            alt="Profile Image"
            className="nav__avatar"
          />
        </div>

        {/* Mobile menu toggle */}
        <button
          className="nav__toggle"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
