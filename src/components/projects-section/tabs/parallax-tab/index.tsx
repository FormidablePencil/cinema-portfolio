import {
  CrystalParallax,
  CrystalParallaxProvider,
} from "parallax-effect-crystals";
import { useSelector } from "react-redux";
import { AppState } from "../../store";
import "./index.scoped.sass";

function ParallaxTab() {
  const rawCrystalData = useSelector((state: AppState) => state.rawCrystalData);

  if (!rawCrystalData) return null;
  else
    return (
      <CrystalParallaxProvider
        eventToFollow="scroll"
      >
        <CrystalParallax pulledRawCrystalData={rawCrystalData} />
      </CrystalParallaxProvider>
    );
}

export default ParallaxTab;
