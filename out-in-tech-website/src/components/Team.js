import React, { useState } from 'react';
import Events from './Events'


function Team() {
  const [toggle, setToggle] = useState(false)
  function toggleMe() {
    setToggle(!toggle)
  }
  const [team, setTeam] = useState(
    {
      board:
        [
          {
            name: 'Lee Knight',
            photo: './lee.png',
            bio: "Michael is a Front End Developer for Rocket Software. He's lived in Denver for the past two years and loves hiking to new scenic points, photography and yoga. In his spare time, he geeks out playing Overwatch."
          },
          {
            name: 'Diane Sanchez',
            photo: './diane.png',
            bio: "Diane is persuing a career in Cybersecurity. Miami at heart, Diane found her way to Colorado 5 years ago. In her freetime, Diane practices the art of massage, react, and catching concerts every weekend."
          },
          {
            name: 'Michael Stapleton',
            photo: './michael.png',
            bio: "Michael is a Front End Developer for Rocket Software. He's lived in Denver for the past two years and loves hiking to new scenic points, photography and yoga. In his spare time, he geeks out playing Overwatch."
          },
          {
            name: 'Julie West',
            photo: './julie.png',
            bio: "Julie is a Designer at Galvanize. Originally from Maryland, Julie has lived in Denver for 4 years and loves aviation, hiking, and fonts. When she isn't designing, she is getting ready to start a family with her wife. ¯\_(ツ)_/¯ "
          }
        ]
    });





  return (
    <div className="TeamWrapper">
      {/* <div className="row">
        <div className=" col-lg-4"></div> */}
      <h1 className="team-title">Denver Chapter Board</h1>
      {/* <div className="col-lg-4"></div>
      </div> */}
      <div className="row">

        <div className="teamCard" onClick={() => toggleMe()}>
          {toggle ?
            team.board.map(item =>
              <div className="team-container">
                <div className="team-bio-content" key={item.id}>
                  <h1 className="team-name">{item.name}</h1>

                  <h4 className="team-bio-font text-left">{item.bio}</h4>
                </div>
              </div>
            )

            :
            team.board.map(item =>
              <div className="team-container">
                <div className="images" key={item.id}>
                  <h1 className="team-name">{item.name}</h1>
                  <img className="boardImage" src={`${item.photo}`}></img>
                </div>
              </div>
            )
          }
        </div>
      </div>

    </div>
  );

}

export default Team;