import React, { useEffect, useRef, useState, useCallback  } from "react";
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
import { Loader } from "lucide-react";

const Three = () => {
  const gridRef = useRef(null);
  const [loadedImages, setLoadedImages] = useState(new Set());

  const images = [
    { src: gallery1, size: "large", id: 1 },
    { src: gallery2, size: "small", id: 2 },
    { src: gallery3, size: "small", id: 3 },
    { src: gallery4, size: "medium", id: 4 },
    { src: gallery5, size: "medium", id: 5 },
    { src: gallery8, size: "medium", id: 6 },
    { src: gallery6, size: "small", id: 7 },
    { src: gallery7, size: "small", id: 8 },
    { src: second, size: "small", id: 9 },
    { src: gallery9, size: "small", id: 10 },
    { src: gallery10, size: "medium", id: 11 },
    { src: gallery11, size: "large", id: 12 },
    { src: gallery3, size: "small", id: 13 }, // Same image src, different id
    { src: gallery12, size: "small", id: 14 },
  ];

  useEffect(() => {
    const gridItems = gridRef.current.querySelectorAll(".grid-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const img = entry.target.querySelector("img");
          const spinner = entry.target.querySelector(".loading-spinner");

          if (entry.isIntersecting) {
            // Add loaded image to the set
            setLoadedImages((prev) => new Set(prev).add(img.src));

            // Trigger the animation when image is in view
            img.classList.add("loaded", "animated");
            spinner.style.visibility = "hidden"; // Hide spinner when image loads
          } else {
            img.classList.remove("animated"); // Reset animation when out of view
            spinner.style.visibility = "visible"; // Show spinner when image is not in view
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the image is visible
    );

    gridItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">
      <div className="grid" ref={gridRef}>
        {images.map((image) => (
          <div key={image.id} className={`grid-item ${image.size}`}>
            <div className="image-wrapper">
              <img
                src={image.src}
                alt={`Image ${image.id}`}
                className={`animated ${loadedImages.has(image.src) ? "loaded" : ""}`}
                loading="lazy"
                onLoad={(e) => setLoadedImages((prev) => new Set(prev).add(e.target.src))}
                onError={(e) => e.target.style.display = 'none'} // Hide broken images
              />
              {/* Only render spinner when the image is not yet loaded */}
              {!loadedImages.has(image.src) && (
                <div className="loading-spinner">
                  <Loader />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Three;
