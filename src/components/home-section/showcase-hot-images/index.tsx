import {
  CrystalParallax,
  CrystalParallaxProvider,
} from "parallax-effect-crystals";
import { useSelector } from "react-redux";
import { AppState } from "../../../store";
import "./index.scoped.sass";

function ShowcaseHotImages() {
  const rawCrystalDataForHome = useSelector(
    (state: AppState) => state.rawCrystalDataForHome
  );

  const crystalClickedOn = (crytalUUID) =>
    console.log(crytalUUID, "crytalUUID");

  if (!rawCrystalDataForHome) return null;
  else
    return (
      <div className="container">
        <CrystalParallaxProvider
          crystalClickedOn={crystalClickedOn}
          eventToFollow="mouse"
        >
          <CrystalParallax pulledRawCrystalData={rawCrystalDataForHome} />
        </CrystalParallaxProvider>
      </div>
    );
}

export default ShowcaseHotImages;
