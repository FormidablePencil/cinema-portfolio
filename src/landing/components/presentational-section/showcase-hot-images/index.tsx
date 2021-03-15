import "./index.scoped.sass";

const images = [
  {
    src:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2015%2F12%2F141791-mountain-clouds-dark-nature-landscape.jpg&f=1&nofb=1",
    alt: "sdd",
  },
  {
    src:
      "https://wallpapercave.com/wp/6SLzBEY.jpg",
    alt: "sdd",
  },
  {
    src:
      "https://hdqwalls.com/wallpapers/mountains-landscape-dark-nature-4k-i0.jpg",
    alt: "sdd",
  },
];

function ShowcaseHotImages() {
  return (
    <div className='container'>
      {images.map((imgProp) => (
        <img src={imgProp.src} alt={imgProp.alt} />
      ))}
    </div>
  );
}

export default ShowcaseHotImages;
