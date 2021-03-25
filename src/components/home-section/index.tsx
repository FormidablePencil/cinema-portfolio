import { useHistory } from "react-router";
import "./index.scoped.sass";
import ShowcaseHotImages from "./showcase-hot-images";

function HomeSection() {
  const history = useHistory();

  return (
    <div className="container">
      <div className="row">
        <div className="text-section">
          <h1>Design Animation Cinematography</h1>
          <p>
            It's funny how the colors of the real world only seem really real
            when you watch them on a screen.
          </p>
          <button
            onClick={() => history.push("/projects/parallax")}
            className="action-button"
          >
            {"View projects"}
          </button>
        </div>
        <ShowcaseHotImages />
        {/* <ImagePaginator /> */}
        {/* <PaginationIndicator/> */}
      </div>
    </div>
  );
}

export default HomeSection;
