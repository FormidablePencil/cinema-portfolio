import {tabSection} from "../..";
import "./index.scoped.sass";

function TabNavbar({ navItemClicked }) {
  return (
    <div className="container">
      <ul>
        <li onClick={() => navItemClicked(tabSection.parallax)}>Parallax</li>
        <li onClick={() => navItemClicked(tabSection.images)}>Images</li>
        <li onClick={() => navItemClicked(tabSection.vids)}>Videos</li>
      </ul>
    </div>
  );
}

export default TabNavbar;
