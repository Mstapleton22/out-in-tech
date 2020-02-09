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
            bio: "Lee is a Front End Developer, trombonist, and bull rider. Proudly spreading diversity, and inclusion throughout the front range. When not coding, performing, competing or speaking they enjoy a peaty scotch, a tobacco pipe and quality family time.",
            linkedin: "https://www.linkedin.com/in/lee-knight-44658aab/"
          },
          {
            name: 'Diane Sanchez',
            photo: './diane.png',
            bio: "Diane is persuing a career in Cybersecurity. Miami at heart, Diane found her way to Colorado 5 years ago. In her freetime, Diane practices the art of massage, react, and catching concerts every weekend.",
            linkedin: "https://www.linkedin.com/in/metalcouer/"
          },
          {
            name: 'Michael Stapleton',
            photo: './michael.png',
            bio: "Michael is a Front End Developer for Rocket Software. He's lived in Denver for the past two years and loves hiking to new scenic points, photography and yoga. In his spare time, he geeks out playing Overwatch.",
            linkedin: "https://www.linkedin.com/in/mgstapleton/"

          },
          {
            name: 'Julie West',
            photo: './julie.png',
            bio: "Julie is a Designer at Galvanize. Originally from Maryland, Julie has lived in Denver for 4 years and loves aviation, hiking, and fonts. When she isn't designing, she is getting ready to start a family with her wife. ¯\_(ツ)_/¯ ",
            linkedin: "https://www.linkedin.com/in/julie-west/"
          }
        ]
    });





  return (
    <section className="TeamWrapper">
      <div className="row team-title-row">
        <h1 className="team-title ">Chapter Board</h1>
      </div>
      <div className="row">
        {/* <div className="col-lg-4"> */}
        <div className="teamCard" onMouseEnter={() => toggleMe()} onMouseLeave={() => toggleMe()}>
          {toggle ?
            team.board.map(item =>
             <div className="container">
              <div className="team-container ">
                <div className="team-bio-content" key={item.id}>
                <div className="row">
                  <h1 className="team-name">{item.name}</h1>
                  </div>
                  <div className="row">
                  <h4 className="team-bio-font text-left">{item.bio}</h4>
                  <a href={item.linkedin} target="_blank" className="linkedin row"><i class="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
              </div>
            )
            :
            team.board.map(item =>
              <div className="container">
              <div className="team-container row">
                {/* <div className="col-lg-4"></div> */}
                <div className="images col-sm" key={item.id}>
                  <h1 className="team-name">{item.name}</h1>
                  <img className="boardImage" src={`${item.photo}`}></img>
                </div>
                {/* <div className="col-lg-4"></div> */}
              </div>
              </div>

            )
          }
        </div>
        {/* </div> */}
      </div>

    </section>
  );

}

export default Team;