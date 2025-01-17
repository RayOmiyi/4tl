import React, { useEffect, useState } from "react";
import { useFetchProjects } from "../fetchEvents";
import "./Events.css";
import RelatedEvents from "../components/Events/RelatedEvents";
import Ftl from "../components/General/Ftl";
import Banner from "../components/General/Banner";
const Events = () => {
  const { loading, events } = useFetchProjects();
  const [imageLoaded, setImageLoaded] = useState(false);

  const firstEvent = events[4];

  useEffect(() => {
    if (firstEvent) {
      const img = new Image();
      img.src = firstEvent.img;
      img.onload = () => setImageLoaded(true);
    }
  }, [firstEvent]);

  if (loading || !imageLoaded) {
    return <div>Loading...</div>;
  }

  if (!firstEvent) {
    return <div>No events available</div>;
  }

  return (
    <div className="bg-black">
      <div className="events-section">
        <div className="event-content">
          <div className="event-details">
            <h1 className="events-header">Events</h1>
            <h2 className="up-next">UP NEXT</h2>
            <div className="event-title">
              <div className="event-title-wrapper">
                <span>{firstEvent.title}</span>
                <span>{firstEvent.title}</span>
                <span>{firstEvent.title}</span>
                <span>{firstEvent.title}</span>
                <span>{firstEvent.title}</span>
                <span>{firstEvent.title}</span>
                <span>{firstEvent.title}</span>
                <span>{firstEvent.title}</span>
                <span>{firstEvent.title}</span>
                <span>{firstEvent.title}</span>
                {/* Add more spans as needed */}
              </div>
            </div>
            <div className="event-info-wrapper">
              <p className="event-time">
                02:00PM - 08:00PM | {firstEvent.date}
              </p>
              <p className="event-description">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <button className="event-button">GET TICKETS</button>
            </div>
          </div>

          <div className="event-image-wrapper">
            <img
              src={firstEvent.img}
              alt={firstEvent.title}
              className={`event-image ${imageLoaded ? "loaded" : ""}`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>
      </div>
      <RelatedEvents />
      <Ftl />
      <Banner />
    </div>
  );
};

export default Events;
