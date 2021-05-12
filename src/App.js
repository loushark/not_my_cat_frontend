import React from 'react';
import logo from './bobcat.png';
import './App.css';
import LoginButton from './components/LoginButton/LoginButton.js'
import LogoutButton from './components/LogoutButton/LogoutButton.js'
import SignUpButton from './components/SignUpButton/SignUpButton.js'
import SignUpForm from './components/SignUpForm/SignUpForm.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Not My Cat</h1>
        <div />
      <LoginButton />
      <LogoutButton />
      <SignUpButton />
      </header>
      <Router>
        <div>
          <p className="latest-cats">
            Hot new cats in town...
          </p>
          //add event listener to sign up form component and onclick function on sign up button (Ryan's demo)
          <Route path= '/signup' component={SignUpForm} />
        </div>
        </Router>
    </div>
  );
}
