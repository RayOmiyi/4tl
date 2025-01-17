import './Aboutftl.css'
import ftl from '../../../assets/life.png'
const Aboutftl = () => {
  return (
    <div className="About-ftl-container">
          <div className="About-ftl-image-wrapper">
            <img src={ftl} alt="4TL" className="About-ftl-image" />
          </div>
          <h1 className='About-ftl-h1'>-4TL-</h1>
          <div className="About-ftl-text">
            <h2>Live</h2>
            <h2>
              <span className="About-point">.</span>
            </h2>
            <h2>Love</h2>
            <h2>
              <span className="About-point">.</span>
            </h2>
            <h2>Party</h2>
            <h2>
              <span className="About-point">.</span>
            </h2>
          </div>
    
          <button className="About-ftl-button">JOIN THE COMMUNITY</button>
          </div>
  );
};

export default Aboutftl;