import React from 'react';
import Events from './Events'
import Team from './Team'
// import computer from '../public/Computer-gif-01.gif'



function Home() {
  return (
    <section>
      <div className="parallax">
        <div className="home-header-container">
          <div className="home-header">Out in Tech</div>
        </div>
        <div className="home-header-container-denver">
          <div>D E N V E R</div>
        </div>
      </div>

      {/* <div className="events">
          <Events />
        </div> */}
      {/* <img className="computerGif col-lg-7" src={process.env.PUBLIC_URL + '/Computer-gif-01.gif'} alt="loading..."></img> */}
      {/* </div> */}


      {/* <Team /> */}
    </section >
  );
}

export default Home;
