import React, { useEffect, useRef } from "react";
import "./Three.css";
import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/gallery2.jpeg";
import gallery3 from "../../assets/gallery3.jpeg";
import gallery4 from "../../assets/gallery4.png";
import gallery5 from "../../assets/gallery5.jpeg";
import gallery6 from "../../assets/gallery6.jpeg";
import gallery7 from "../../assets/gallery7.jpeg";
import gallery8 from "../../assets/gallery8.jpeg";
import gallery9 from "../../assets/gallery9.jpeg";
import gallery10 from "../../assets/gallery10.jpeg";
import gallery11 from "../../assets/gallery11.jpeg";
import gallery12 from "../../assets/gallery12.png";
import second from "../../assets/second-frame.png";

const Three = () => {
  const gridRef = useRef(null);

  const images = [
    { src: gallery1, size: "large" },
    { src: gallery2, size: "small" },
    { src: gallery3, size: "small" },
    { src: gallery4, size: "medium" },
    { src: gallery5, size: "medium" },
    { src: gallery8, size: "medium" },
    { src: gallery6, size: "small" },
    { src: gallery7, size: "small" },
    { src: second, size: "small" },
    { src: gallery9, size: "small" },
    { src: gallery10, size: "medium" },
    { src: gallery11, size: "large" },
    { src: gallery3, size: "small" },
    { src: gallery12, size: "small" },
  ];

  useEffect(() => {
    const gridItems = gridRef.current.querySelectorAll(".grid-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const img = entry.target.querySelector("img");
          if (entry.isIntersecting) {
            img.classList.add("loaded", "animated");
          } else {
            img.classList.remove("animated"); // Reset animation when out of view
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the image is visible
    );

    gridItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">
      <div className="grid" ref={gridRef}>
        {images.map((image, index) => (
          <div key={index} className={`grid-item ${image.size}`}>
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className="animated" // Add class for animation styling
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Three;


// const images = [
//   { src: gallery1, size: "large" },
//   { src: gallery2, size: "small" },
//   { src: gallery3, size: "small" },
//   { src: gallery4, size: "medium" },
//   { src: gallery5, size: "medium" },
//   { src: gallery8, size: "medium" },
//   { src: gallery6, size: "small" },
//   { src: gallery7, size: "small" },
//   { src: second, size: "small" },
//   { src: gallery9, size: "small" },
//   { src: gallery10, size: "medium" },
//   { src: gallery11, size: "large" },
//   { src: gallery3, size: "small" },
//   { src: gallery12, size: "small" },
// ];
