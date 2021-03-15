import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import MoreProjectsSection from "./components/more-projects-section";
import PresentationalSection from "./components/presentational-section";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import fetchContentAction from "./actions/fetchContentAction";

function Routes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContentAction());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={PresentationalSection} />
          <Route path="/projects" component={MoreProjectsSection} />
          <Route path="/tech" component={AboutSection} />
          <Route path="/contact" component={ContactSection} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;
