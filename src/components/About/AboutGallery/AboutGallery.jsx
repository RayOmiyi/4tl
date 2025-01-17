/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./AboutGallery.css";
import Shade from "../../../assets/second-frame-shade.png";
import Shine from "../../../assets/second-frame.png";

const AboutGallery = () => {
  const images = [
    { src: Shade, alt: "Person 1", isColor: true },
    { src: Shine, alt: "Person 2", isColor: false },
    { src: Shade, alt: "Person 3", isColor: true },
    { src: Shade, alt: "Person 4", isColor: false },
    { src: Shade, alt: "Person 5", isColor: false },
    { src: Shine, alt: "Person 6", isColor: false },
    { src: Shade, alt: "Person 7", isColor: false },
    // Add more images here
  ];

  return (
    <div className="about-gallery">
      <div className="text-section left">
        <h2>WHO WE ARE</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and <br /> typesetting
          industry. Lorem Ipsum has been the <br /> industry's standard dummy text
          ever since the 1500s.
        </p>
      </div>

      <div className="image-grid">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>

      <div className="text-section right">
        <h2>WHAT WE STAND FOR</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and <br /> typesetting
          industry. Lorem Ipsum has been the <br /> industry's standard dummy text
          ever since the 1500s.
        </p>
      </div>
      <div className="image-grid">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

export default AboutGallery;
