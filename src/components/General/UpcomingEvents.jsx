/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './UpcomingEvent.css';
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const UpcomingEvents = ({ header, data, renderItem }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(window.innerWidth <= 768 ? 1 : 3);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth <= 768 ? 1 : 3);
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="UpcomingSection">
      <div className="Header">
        {header && <h2 className="Head">{header}</h2>}
        <div className="HeaderControls">
          <div className="CarouselButtons">
            <button onClick={prevSlide}>
              <MdOutlineKeyboardArrowLeft size={30} />
            </button>
            <button onClick={nextSlide}>
              <MdKeyboardArrowRight size={30} />
            </button>
          </div>
          <button className="ViewAllButton">View All Events</button>
        </div>
      </div>

      <div className="UpcomingContainer">
        {data
          .slice(currentIndex, currentIndex + itemsToShow) // Dynamically set how many cards are shown based on screen size
          .concat(data.slice(0, Math.max(0, itemsToShow - (data.length - currentIndex)))) // Prevent out-of-bounds errors
          .map((item, index) => (
            <div key={index} className="EventCard">
              {renderItem(item)}
            </div>
          ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
