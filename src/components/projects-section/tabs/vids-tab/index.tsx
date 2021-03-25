import "./index.scoped.sass";
import { AppState } from "../../../../store";
import { useSelector } from "react-redux";

function VidsTab() {
  const { videoProjects } = useSelector(
    (state: AppState) => state.portfolioContent
  );

  return (
    <div className="container padding-to-avoid-navbar">
      {videoProjects.map((props, index) => (
        <div key={index} className="item-container">
          <iframe
            title={props.title}
            className="video"
            width="900"
            height="500"
            src="https://www.youtube.com/embed/lve6KTZTKDw"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <InfoSection title={props.title} description={props.description} />
        </div>
      ))}
      {/* <video className="video" width="900" height="500" controls> */}
      {/*   <source */}
      {/*     src="https://adobeprod-a.akamaihd.net/K6_ocwJGHrK/rend/K6_ocwJGHrK_576.mp4?hdnea=st%3D1616186173%7Eexp%3D1616445373%7Eacl%3D%2Fshared_assets%2Fimage%2F*%21%2Fz%2FK6_ocwJGHrK%2Frend%2F*%21%2Fi%2FK6_ocwJGHrK%2Frend%2F*%21%2FK6_ocwJGHrK%2Frend%2F*%21%2FK6_ocwJGHrK%2Fimage%2F*%7Ehmac%3D38acf34a4c406d04456a9e567567ca4f9b53563818f2b5d84d0456c1ae04a27d" */}
      {/*     type="video/mp4" */}
      {/*   /> */}
      {/* </video> */}
    </div>
  );
}

const InfoSection = ({ title, description }) => {
  return (
    <div className="info-section">
      <h2>{title}</h2>
      <p className="description">{description}</p>
    </div>
  );
};

export default VidsTab;
