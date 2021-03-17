import { CrystalParallax, CrystalParallaxProvider } from "parallax-effect-crystals";
import { useSelector } from "react-redux";
import { AppState } from "../../store";
import "./index.scoped.sass";

function ProjectsSection() {
  const rawCrystalData = useSelector((state: AppState) => state.rawCrystalData);

  const crystalClickedOn = (crytalUUID) =>
    console.log(crytalUUID, "crytalUUID");

  console.log(rawCrystalData, "kk");
  if (!rawCrystalData) return null;
  else
    return (
      <div className="container">
        <CrystalParallaxProvider
          crystalClickedOn={crystalClickedOn}
          eventToFollow="scroll"
        >
          <CrystalParallax pulledRawCrystalData={rawCrystalData} />
        </CrystalParallaxProvider>
      </div>
    );
}

export default ProjectsSection;
