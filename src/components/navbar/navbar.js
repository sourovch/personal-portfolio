import { NavLink } from 'react-router-dom';
import '../../styles/navbar.css';

function Navbar({ collaps }) {
  const collapsNav = (e) => {
    collaps && collaps();
  };

  return (
    <nav className="navbar">
      <ul className="navlist" onClick={collapsNav}>
        <li className="nav-item">
          <NavLink to="/" className="navlink">
            <i className="fa-solid fa-house"></i>
          </NavLink>
          <NavLink to="/" className="text-nav">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about me" className="navlink">
            <i className="fa-regular fa-user"></i>
          </NavLink>
          <NavLink to="/about me" className="text-nav">
            About Me
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" className="navlink">
            <i className="fa-solid fa-user-graduate"></i>
          </NavLink>
          <NavLink to="/resume" className="text-nav">
            resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolio" className="navlink">
            <i className="fa-solid fa-briefcase"></i>
          </NavLink>
          <NavLink to="/portfolio" className="text-nav">
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="navlink">
            <i className="fa-regular fa-envelope"></i>
          </NavLink>
          <NavLink to="/contact" className="text-nav">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
