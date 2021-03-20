import { useSelector } from "react-redux";
import "./index.scoped.sass";
import { AppState } from "../../../../store";
import { Tooltip } from "@material-ui/core";

function ImagesTab() {
  const rawCrystalData = useSelector((state: AppState) => state.rawCrystalData);

  return (
    <div className="container">
      {rawCrystalData.crystals.map((props) => (
        <Tooltip arrow title="Description: Dolor quibusdam fuga voluptatum quod perspiciatis temporibus voluptates quidem a ullam Nihil corrupti deleniti assumenda recusandae officia reiciendis? Dolores eligendi cumque esse dolorem optio cumque Laudantium id sint adipisci soluta">
          <img key={props.key} src={props.crystalProps.imageProps.image} />
        </Tooltip>
      ))}
    </div>
  );
}

export default ImagesTab;
