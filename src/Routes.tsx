import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import MoreProjectsSection from "./components/more-projects-section";
import PresentationalSection from "./components/presentational-section";

function Routes() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={PresentationalSection} />
          <Route path="/" component={MoreProjectsSection} />
          <Route path="/" component={AboutSection} />
          <Route path="/" component={ContactSection} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;
