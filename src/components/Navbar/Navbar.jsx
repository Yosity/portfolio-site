import { NavLink } from "react-router-dom";
import "./Nav.css";
export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/work" className="nav-link">
            Work
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
