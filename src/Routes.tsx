import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import AboutSection from "./landing/components/about-section";
import ContactSection from "./landing/components/contact-section";
import MoreProjectsSection from "./landing/components/more-projects-section";
import PresentationalSection from "./landing/components/presentational-section";

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
