import { NavLink } from "react-router-dom";

function Navbar() {
  const items = ["about", "portfolio", "contact"];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {items.map((name) => (
          <li className="navbar-item" key={name}>
            <NavLink
              to={`/${name}`}
              className={({ isActive }) =>
                `navbar-link ${isActive ? "active" : ""}`
              }
              data-nav-link
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
