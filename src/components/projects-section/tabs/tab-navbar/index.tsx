import { tabSection } from "../..";
import "./index.scoped.sass";

function TabNavbar({ navItemClicked, tabToggled }) {
  const NavItem = ({ tabSectionItem, label }) => (
    <li
      className={tabToggled === tabSectionItem && "active"}
      onClick={() => navItemClicked(tabSectionItem)}
    >
      {label}
    </li>
  );

  return (
    <div className="container">
      <ul>
        <NavItem tabSectionItem={tabSection.parallax} label="parallax" />
        <NavItem tabSectionItem={tabSection.images} label="Images" />
        <NavItem tabSectionItem={tabSection.vids} label="Videos" />
      </ul>
    </div>
  );
}

export default TabNavbar;
