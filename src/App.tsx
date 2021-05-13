import React from 'react';
import ChocolateBarsLineup from './components/ChocolateBarsLineup';
import './layout-classes.sass'

function App() {
  return (
    <div className="App">
      <div className="fullscreen center-content">
        <h1>foowood</h1>
        <ChocolateBarsLineup/>
      </div>
    </div>
  );
}

export default App;
