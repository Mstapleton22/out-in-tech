import React from 'react';
import Events from './Events'
import Team from './Team'
// import computer from '../public/Computer-gif-01.gif'



function Home() {
  return (
    <div>
      {/* <div className="row">
        <div className="rainbow col-lg-1">
          <div className="redLine"></div>
          <div className="orangeLine"></div>
          <div className="yellowLine"></div>
          <div className="greenLine"></div>
          <div className="blueLine"></div>
          <div className="indigoLine"></div>
          <div className="violetLine"></div>
        </div>
      </div> */}
      <div className="homeHeader">Out in Tech</div>
      <div className="home row">
        <div className="homeInfo col-lg-5">
          <div className="mission">
            <h1>Hey Denver!</h1>
            <h3>Our mission is to create space for Queer individuals who identify as a Techie through networking, panels, and other social events.
          </h3>
            <Events />

          </div>
        </div>
        <img className="computerGif col-lg-7" src={process.env.PUBLIC_URL + '/Computer-gif-01.gif'} alt="loading..."></img>
      </div>


      <Team />
    </div >
  );
}

export default Home;
