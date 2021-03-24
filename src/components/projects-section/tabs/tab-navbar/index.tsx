import "./index.scoped.sass";
import { useHistory, useLocation } from "react-router";

function TabNavbar({
  onPressItem,
  inMainNavbar,
}: {
  onPressItem?: () => any;
  inMainNavbar?;
}) {
  const { pathname } = useLocation();
  const history = useHistory();

  const navigateTo = (path) => {
    if (onPressItem) onPressItem();
    history.push(path);
  };

  const NavItem = ({ path, label }) => (
    <li
      className={pathname === path && "active"}
      onClickCapture={() => navigateTo(path)}
    >
      {label}
    </li>
  );

  return (
    <ul className={`${inMainNavbar ? "in-main-navbar" : "container"}`}>
      <div className="angle" />
      <NavItem path="/projects/parallax" label="Parallax" />
      <NavItem path="/projects/images" label="Images" />
      <NavItem path="/projects/videos" label="Videos" />
    </ul>
  );
}

export default TabNavbar;
