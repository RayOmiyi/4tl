import React, { useEffect, useState } from 'react';
import HomeImage from '../components/Home/HomeImage';
import firstframe from '../assets/first-frame.png';
import secondframe from '../assets/second-frame.png';
import thirdframe from '../assets/third-frame.jpg';
import UpcomingEvents from '../components/General/UpcomingEvents.jsx';
import { useFetchProjects } from '../fetchEvents';
import Ftl from '../components/General/Ftl.jsx'
import Banner from '../components/General/Banner.jsx'
const Home = () => {
  const { loading, events } = useFetchProjects();

  return (
    <div>
      <HomeImage img={firstframe} />
      <HomeImage img={secondframe} button='SILENT DISCO 16.06.23' />
      <HomeImage img={thirdframe} button='SILENT DISCO 16.06.23' />

      <UpcomingEvents
        header="Upcoming Events"
        data={events}
        renderItem={(event) => (
          <div key={event.id}>
            

            {event.img.includes('.mp4') ? (
              // Render video if img contains a .mp4 extension (for video URLs)
              <video loop muted autoPlay>
                <source src={event.img} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              // Render image if img does not contain a .mp4 extension
              <a href={event.url} target="_blank" rel="noopener noreferrer">
                <img src={event.img} alt={event.title} />
              </a>
            )}
            <div className='lower-limit'>
            <div className='event-details'>
            <h3 >{event.title}</h3>
            <p>{event.date}</p>
            </div>
            <button className="TicketButton">TICKETS</button>
            </div>
          </div>
        )}
      /> 
      <Ftl/>
      <Banner/>
    </div>
  );
};

export default Home;
