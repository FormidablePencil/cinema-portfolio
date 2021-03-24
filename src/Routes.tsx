import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import ProjectsSection from "./components/projects-section";
import HomeSection from "./components/home-section";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import fetchContentAction from "./actions/fetchContentAction";
import posed, { PoseGroup } from "react-pose";

function Routes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContentAction());
  }, [dispatch]);

  const RoutesContainer = posed.div({
    enter: { opacity: 1, delay: 400 },
    exit: { opacity: 0 },
  });

  return (
    <BrowserRouter>
      <Route
        render={({ location }) => (
          <div className="App">
            <Navbar />
            <PoseGroup>
              <RoutesContainer key={location.key}>
                <Switch location={location}>
                  <Route path="/" exact component={HomeSection} />
                  <Route path="/projects" component={ProjectsSection} />
                  <Route path="/about" component={AboutSection} />
                  <Route path="/contact" component={ContactSection} />
                </Switch>
              </RoutesContainer>
            </PoseGroup>
          </div>
        )}
      />
    </BrowserRouter>
  );
}

export default Routes;
