import { useSelector } from "react-redux";
import "./index.scoped.sass";
import { AppState } from "../../store";

function ProjectsSection() {
  const rawCrystalData = useSelector((state: AppState) => state.rawCrystalData);

  return <div />;
}

export default ProjectsSection;
