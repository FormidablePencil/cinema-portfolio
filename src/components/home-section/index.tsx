import "./index.scoped.sass";
import ShowcaseHotImages from "./showcase-hot-images";

function HomeSection() {
  return (
    <div className="container">
      <div className="row">
        <div className="text-section">
          <h1>Cinematographer Jordan Sheets</h1>
          <p>- Learn more</p>
        </div>
        <ShowcaseHotImages />
        {/* <ImagePaginator /> */}
        {/* <PaginationIndicator/> */}
      </div>
    </div>
  );
}

export default HomeSection;
