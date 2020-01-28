import React from 'react';


function Events() {
  return (
    <div>
      <section className="mission">

        <div className="row ">
          <div className="col-lg-2"></div>

          {/* <div className="col-lg-4 mission-word">
            MISSION
          </div> */}
          <div className="mission-info col-lg-8 justify-content-center">
            <div className="mission">
              <h2>Our mission is to create space for Queer individuals who identify as Techies through networking, panels, and other social events.
            </h2>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
        {/* </section>
      <section className="events-section"> */}
        {/* <div className="col-lg-2"></div> */}

        <div className="row event-row ">
          <a className="event-link" href="" target="_blank">
            <div className="events">
              Upcoming Event
          </div >
          </a>
          {/* <div className="col-lg-2"></div> */}
        </div>
      </section>
    </div>
  );
}

export default Events;