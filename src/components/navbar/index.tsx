import { Link, useHistory, useLocation } from "react-router-dom";
import "./index.scoped.sass";

function Navbar() {
  const { pathname } = useLocation();
  const history = useHistory();

  const isHome = pathname === "/" && "active";
  const isProject = pathname === "/projects" && "active";
  const isTech = pathname === "/tech" && "active";
  const isContact = pathname === "/contact" && "active";

  const navigateTo = (navTo: string) => history.push(navTo);

  return (
    <div className="container">
      <h1>Cinematographer</h1>
      <ul>
        <li onClick={() => navigateTo("/")} className={`nav-item ${isHome}`}>
          Home
        </li>
        <li
          onClick={() => navigateTo("/projects")}
          className={`nav-item ${isProject}`}
        >
          Projects
        </li>
        <li
          onClick={() => navigateTo("/tech")}
          className={`nav-item ${isTech}`}
        >
          Tech
        </li>
        <li
          onClick={() => navigateTo("/contact")}
          className={`nav-item ${isContact}`}
        >
          Contact
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
