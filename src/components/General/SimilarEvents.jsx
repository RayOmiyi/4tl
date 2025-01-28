/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import './UpcomingEvent.css';
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const UpcomingEvents = ({ header, data, renderItem }) => {
  const [itemsToShow, setItemsToShow] = useState(window.innerWidth <= 768 ? 1 : 3);
  const containerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth <= 768 ? 1 : 3);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollNext = () => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth / itemsToShow;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth / itemsToShow;
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="UpcomingSection">
      <div className="Header">
        {header && <h2 className="Head">{header}</h2>}
        <div className="HeaderControls">
          <div className="CarouselButtons">
            <button onClick={scrollPrev}>
              <MdOutlineKeyboardArrowLeft size={30} />
            </button>
            <button onClick={scrollNext}>
              <MdKeyboardArrowRight size={30} />
            </button>
          </div>
        </div>
      </div>

      <div className="UpcomingContainer" ref={containerRef}>
        {data.map((item, index) => (
          <div
            key={index}
            className="EventCard"
            style={{
              width: `calc((100% - ${10 * (itemsToShow - 1)}px) / ${itemsToShow})`, // Dynamic width
            }}
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
