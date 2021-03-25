import {
  CrystalParallax,
  CrystalParallaxProvider,
} from "parallax-effect-crystals";
import { useSelector } from "react-redux";
import { AppState } from "../../store";
import "./index.scoped.sass";

function ParallaxTab() {
  const rawCrystalData = useSelector((state: AppState) => state.rawCrystalData);

  const crystalClickedOn = (crytalUUID) =>
    console.log(crytalUUID, "crytalUUID");

  if (!rawCrystalData) return null;
  else
    return (
      <CrystalParallaxProvider
        crystalClickedOn={crystalClickedOn}
        eventToFollow="scroll"
      >
        <CrystalParallax pulledRawCrystalData={rawCrystalData} />
      </CrystalParallaxProvider>
    );
}

export default ParallaxTab;
