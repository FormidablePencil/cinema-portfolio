import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import TechSection from "./components/tech-section";
import ProjectsSection from "./components/projects-section";
import HomeSection from "./components/home-section";
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
          <Route path="/" exact component={HomeSection} />
          <Route path="/projects" component={ProjectsSection} />
          <Route path="/tech" component={TechSection} />
          <Route path="/about" component={AboutSection} />
          <Route path="/contact" component={ContactSection} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;
