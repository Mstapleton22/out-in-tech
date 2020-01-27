import React from 'react';
import Home from './components/Home';
import Events from './components/Events.js'
import Team from './components/Team'
// import Team from 'Team';


import './App.css';
import './team.css';
import './event.css';


function App() {
  return (
    <div className="App">
      <Home />
      <Events />
      <Team />

    </div>
  );
}

export default App;
