import "./index.scoped.sass";
import { useHistory, useLocation } from "react-router";

function TabNavbar() {
  const { pathname } = useLocation();
  const history = useHistory();

  const navigateTo = (path) => history.push(path);

  const NavItem = ({ path, label }) => (
    <li
      className={pathname === path && "active"}
      onClick={() => navigateTo(path)}
    >
      {label}
    </li>
  );

  return (
    <div className="container">
      <ul>
        <NavItem path="/projects/parallax" label="Parallax" />
        <NavItem path="/projects/images" label="Images" />
        <NavItem path="/projects/videos" label="Videos" />
      </ul>
    </div>
  );
}

export default TabNavbar;
