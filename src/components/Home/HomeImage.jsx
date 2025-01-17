/* eslint-disable react/prop-types */
import './HomeImage.css'
const HomeImage = ({ img, button }) => {
  return (
    <div className="home-image-container">
      <div className="image-wrapper">
        <img src={img} alt="Home Image" className="home-image" loading='lazy' />
      </div>

      {/* Conditionally render the button if it exists */}
      {button && (
        <div className="button-container">
          {button}
        </div>
      )}
    </div>
  );
};

export default HomeImage;
