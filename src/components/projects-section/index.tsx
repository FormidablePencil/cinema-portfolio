import { useSelector } from "react-redux";
import "./index.scoped.sass";
import { AppState } from "../../store";
import { CrystalParallax } from "parallax-effect-crystals";

function ProjectsSection() {
  const rawCrystalData = useSelector((state: AppState) => state.rawCrystalData);

  console.log(rawCrystalData, "kk");
  if (!rawCrystalData) return null;
  else
    return (
      <div>
        <CrystalParallax
          withGui={false}
          pulledRawCrystalData={rawCrystalData}
        />
      </div>
    );
}

export default ProjectsSection;
