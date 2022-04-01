import { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../../context";

import "./navbar.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  // const location = useLocation();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 800) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    if (screenWidth < 800) {
      setOpen(false);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <Link to="/">
            <h1>LACE</h1>
          </Link>
        </div>
        <div className="list-wrapper">
          <img
            src={`${process.env.PUBLIC_URL}/menu-bars.png?raw=true`}
            alt="Menu bars"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/cross-menu-icon.png?raw=true`}
            alt="Menu cross"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />

          <ul
            style={{ left: open ? "0" : "-100vw" }}
            className={darkMode ? "dark" : "light"}
          >
            <li>
              <NavLink to="/" onClick={handleClose} activeclassname="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={handleClose}
                activeclassname="active"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                onClick={handleClose}
                activeclassname="active"
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                onClick={handleClose}
                activeclassname="active"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={handleClose}
                activeclassname="active"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
