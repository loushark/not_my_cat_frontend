import React from 'react';
import logo from './bobcat.png';
import './App.css';
import LoginButton from './components/LoginButton.js/LoginButton.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Not My Cat</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div />
      <LoginButton />
      </header>
      <body>
        <div>
          <p className="latest-cats">
            Hot new cats in town...
          </p>
        </div>
      </body>
    </div>

  );
}

export default App;
