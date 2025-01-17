import { Link } from "react-router-dom";
import { useFetchProjects } from "../../fetchEvents";
import "./RelatedEvents.css";

const RelatedEvents = () => {
  const { loading, events } = useFetchProjects();

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      month: date.toLocaleString("default", { month: "short" }).toUpperCase(),
      day: date.getDate(),
    };
  };

  return (
    <div className="related-events">
      <div className="events-container">
        {events.map((event) => {
          const { month, day } = formatDate(event.date);
          return (
            <div className="event-wrapper" key={event.id}>
              <Link
                to={`/event/${event.id}`}
                className="event-card"
              >
                <div className="date-section">
                  <div className="month">{month}</div>
                  <div className="day">{day}</div>
                </div>

                <div className="title-section">
                  <h2>{event.title}</h2>
                </div>

                <div className="ticket-section">
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ticket-button"
                  >
                    TICKETS
                  </a>
                </div>
              </Link>

              {event.img.includes(".mp4") ? (
                <video loop muted autoPlay className="image-section">
                  <source src={event.img} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={event.img}
                  alt={event.title}
                  className="image-section"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedEvents;