import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import MoreProjectsSection from "./components/more-projects-section";
import PresentationalSection from "./components/presentational-section";
import "./index.scoped.sass";

function Landing() {
  return (
    <div className="container">
      <PresentationalSection />
      <MoreProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default Landing;
