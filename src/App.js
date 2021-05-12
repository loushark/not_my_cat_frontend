import React from 'react';
import logo from './bobcat.png';
import './App.css';
import LoginButton from './components/LoginButton/LoginButton.js'
import SignUpButton from './components/SignUpButton/SignUpButton.js'
import SignUpForm from './components/SignUpForm/SignUpForm.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Not My Cat</h1>
        <div />
      <LoginButton />
      <SignUpButton />
      </header>
        <div>
          <p className="latest-cats">
            Hot new cats in town...
          </p>
          <SignUpForm />
        </div>
    </div>

  );
}

export default App;
