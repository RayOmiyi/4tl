import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchProjects } from "../fetchEvents";
import "./EventId.css";
import SimilarEvents from "../components/General/SimilarEvents";
import Ftl from '../components/General/Ftl';
import Banner from '../components/General/Banner';

const EventId = () => {
  const { eventId } = useParams(); // Retrieve the event ID from the URL
  const { loading, events } = useFetchProjects();
  const [imageLoaded, setImageLoaded] = useState(false);

  if (loading) {
    return <div>Loading...</div>;
  }

  const event = events.find((event) => event.id === eventId); // Find the event with the matching ID

  if (!event) {
    return <div>No event found</div>;
  }

  // Handle image load event
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const renderMedia = (src, alt) => {
    return src.includes(".mp4") ? (
      <video loop muted autoPlay className="event-image">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ) : (
      <img
        src={src}
        alt={alt}
        className={`event-image ${imageLoaded ? "loaded" : ""}`}
        onLoad={handleImageLoad}
      />
    );
  };

  return (
    <div>
      <div className="events-section">
        <div className="event-content">
          <div className="event-details">
            <div className="event-title">
              <div className="event-title-wrapper">
                <span>{event.title}</span>
                <span>{event.title}</span>
                <span>{event.title}</span>
                <span>{event.title}</span>
                <span>{event.title}</span>
                <span>{event.title}</span>
                <span>{event.title}</span>
                <span>{event.title}</span>
                <span>{event.title}</span>
                <span>{event.title}</span>
                <span>{event.title}</span>
                <span>{event.title}</span>
                {/* Repeat titles as needed */}
              </div>
            </div>
            <div className="event-info-wrapper">
              <p className="event-time">02:00PM - 08:00PM | {event.date}</p>
              <p className="event-description">{event.description}</p>
              <button className="event-button">GET TICKETS</button>
            </div>
          </div>

          <div className="event-image-wrapper">
            {renderMedia(event.img, event.title)}
          </div>
        </div>
      </div>
      <SimilarEvents
        header="SIMILAR EVENTS"
        data={events}
        renderItem={(event) => (
          <div key={event.id}>
            {event.img.includes('.mp4') ? (
              <video loop muted autoPlay>
                <source src={event.img} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <a href={event.url} target="_blank" rel="noopener noreferrer">
                <img src={event.img} alt={event.title} />
              </a>
            )}
            <div className='lower-limit'>
              <div className='event-details'>
                <h3 className="similar-h3">{event.title}</h3>
                <p>{event.date}</p>
              </div>
              <button className="TicketButton">TICKETS</button>
            </div>
          </div>
        )}
      />
      <Ftl />
      <Banner />
    </div>
  );
};

export default EventId;
