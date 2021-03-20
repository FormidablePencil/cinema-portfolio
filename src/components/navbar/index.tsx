import { useHistory, useLocation } from "react-router-dom";
import "./index.scoped.sass";
import { useState } from "react";
import NavbarToggleBtn from "./navbar-toggle-btn";

function Navbar() {
  const { pathname } = useLocation();
  const history = useHistory();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const isHome = pathname === "/" && "active";
  const isContact = pathname === "/contact" && "active";
  const isProject = pathname !== "/" && pathname !== "/contact" && "active";

  const navigateTo = (navTo: string) => history.push(navTo);

  return (
    <div className="absolute-container">
      <div className="container">
        <NavbarToggleBtn
          navbarOpen={navbarOpen}
          setNavbarOpen={setNavbarOpen}
        />
        <h1>Cinematographer</h1>
        <ul>
          <li onClick={() => navigateTo("/")} className={`nav-item ${isHome}`}>
            Home
          </li>
          <li
            onClick={() => navigateTo("/projects/parallax")}
            className={`nav-item ${isProject}`}
          >
            Projects
          </li>
          <li
            onClick={() => navigateTo("/contact")}
            className={`nav-item ${isContact}`}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
