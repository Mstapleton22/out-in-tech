import React from 'react';
import Home from './components/Home';
import Events from './components/Events.js'
import Team from './components/Team'
import Contact from './components/Contact'

// import Team from 'Team';


import './App.css';
import './team.css';
import './event.css';
import './contact.css';



function App() {
  return (
    <div className="App">
      <Home />
      <Events />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
