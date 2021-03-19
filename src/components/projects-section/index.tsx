import { useState } from "react";
import "./index.scoped.sass";
import ParallaxTab from "./tabs/parallax-tab";
import TabNavbar from "./tabs/tab-navbar";
import ImagesTab from "./tabs/images-tab";
import VidsTab from "./tabs/vids-tab";

export enum tabSection {
  parallax,
  images,
  vids,
}

function ProjectsSection() {
  const [tabToggled, setTabToggled] = useState(tabSection.parallax);

  const navItemClicked = (selected) => setTabToggled(selected);

  return (
    <div className="container">
      <TabNavbar tabToggled={tabToggled} navItemClicked={navItemClicked} />
      {tabToggled === tabSection.parallax ? (
        <ParallaxTab />
      ) : tabToggled === tabSection.images ? (
        <ImagesTab />
      ) : (
        tabToggled === tabSection.vids && <VidsTab />
      )}
    </div>
  );
}

export default ProjectsSection;
