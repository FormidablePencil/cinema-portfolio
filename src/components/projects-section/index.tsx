import "./index.scoped.sass";

import { Route } from "react-router";

import ImagesTab from "./tabs/images-tab";
import ParallaxTab from "./tabs/parallax-tab";
import TabNavbar from "./tabs/tab-navbar";
import VidsTab from "./tabs/vids-tab";

export enum tabSection {
  parallax,
  images,
  vids,
}

function ProjectsSection() {
  return (
    <div className="container">
      <TabNavbar />
      <Route path="/projects/parallax" exact component={ParallaxTab} />
      <Route path="/projects/images" exact component={ImagesTab} />
      <Route path="/projects/videos" exact component={VidsTab} />
    </div>
  );
}

export default ProjectsSection;
