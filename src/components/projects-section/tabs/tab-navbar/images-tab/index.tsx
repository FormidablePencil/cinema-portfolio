import { useSelector } from "react-redux";
import "./index.scoped.sass";
import { AppState } from "../../../../../store";

function ImagesTab() {
  const rawCrystalData = useSelector((state: AppState) => state.rawCrystalData);

  return (
    <div className="container">
      {rawCrystalData.crystals.map((props) => (
        <img key={props.key} src={props.crystalProps.imageProps.image} />
      ))}
    </div>
  );
}

export default ImagesTab;
