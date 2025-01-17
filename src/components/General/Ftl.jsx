import ftl from "../../assets/forlife.png";
import "./Ftl.css";

const Ftl = () => {
  return (
    <div className="ftl-container">
      <div className="ftl-image-wrapper">
        <img src={ftl} alt="4TL" className="ftl-image" />
      </div>
      <h1 className="ftl-h1">-4TL-</h1>
      <div className="ftl-text">
        <h2>Live</h2>
        <h2>
          <span className="point">.</span>
        </h2>
        <h2>Love</h2>
        <h2>
          <span className="point">.</span>
        </h2>
        <h2>Party</h2>
      </div>

      <button className="ftl-button">JOIN THE COMMUNITY</button>
    </div>
  );
};

export default Ftl;
