/* eslint-disable react/prop-types */
import { useState } from 'react';
import './HomeImage.css';
import { Loader } from 'lucide-react'; // Import the Lucide loading icon

const HomeImage = ({ img, button }) => {
  const [isLoading, setIsLoading] = useState(true); // State to manage image loading

  const handleImageLoad = () => {
    setIsLoading(false); // Set loading state to false when the image has loaded
  };

  return (
    <div className="home-image-container">
      <div className="image-wrapper">
        {/* Loading Spinner Placeholder */}
        {isLoading && (
          <div className="loading-spinner">
            <Loader />
          </div>
        )}

        <img
          src={img}
          alt="Home Image"
          className={`home-image ${isLoading ? 'loading' : 'loaded'}`}
          loading="lazy"
          onLoad={handleImageLoad}
        />
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
