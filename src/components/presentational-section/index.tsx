import "./index.scoped.sass";
import Navbar from "../navbar";
import ShowcaseHotImages from "./showcase-hot-images";

function PresentationalSection() {
  return (
    <div className="container">
      <div className="text-section">
        <h1>Cinematographer Jordan Sheets</h1>
        <p>- Learn more</p>
      </div>
      <ShowcaseHotImages />
      {/* <ImagePaginator /> */}
      {/* <PaginationIndicator/> */}
    </div>
  );
}

export default PresentationalSection;
