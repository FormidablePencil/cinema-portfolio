import "./index.scoped.sass";
import { AppState } from "../../../../store";
import { useSelector } from "react-redux";

function VidsTab() {
  const { videoProjects } = useSelector(
    (state: AppState) => state.portfolioContent
  );

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="container">
      <iframe
        className="video"
        width="900"
        height="500"
        src="https://www.youtube.com/embed/lve6KTZTKDw"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      {videoProjects.map((props) => (
        <div className="item-container">
          <video className="video" width="900" height="500" controls>
            <source src={props.url} type="video/mp4" />
          </video>
          <InfoSection title={props.title} description={props.description} />
        </div>
      ))}
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
