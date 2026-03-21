import { Link } from "react-router-dom";

function Navbar({ menu }) {
  return (
    <nav className="nav">
      <a href="#">
        <img src="/logo.svg" alt="Site Logo" className="logo" />
      </a>

      <div className="nav__bar">
        <ul className="nav__menus">
          {menu.map((item) => (
            <li key={item.id}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <div className="nav__avatar-wrapper">
          <img
            src="/avatar-homepage.jpg"
            alt="Profile Image"
            className="nav__avatar"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
