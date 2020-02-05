import React from 'react';


function Events() {
  return (
    <div>
      <section className="mission">
        <div className="row ">
          {/* <div className="col-lg-2"></div> */}
          <div className="events-header">Events</div>
        </div>
        {/* <div className="col-lg-2"></div> */}
        <div className="row event-row ">
          <a className="event-link" href="https://www.eventbrite.com/e/out-in-tech-denver-diversity-and-inclusion-in-tech-tickets-93019404543" target="_blank">
            <img className="event-image" src="februaryevent.png" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Events;

{/* <div className="mission-info col-lg-8 justify-content-center">
            <div className="mission">
              <h2>Our mission is to create space for Queer individuals who identify as Techies through networking, panels, and other social events.
            </h2>
            </div>
          </div>
          <div className="col-lg-2"></div>*/}