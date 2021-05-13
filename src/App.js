import React, { useEffect, useState } from 'react';
import logo from './bobcat.png';
import './App.css';
import LoginButton from './components/LoginButton/LoginButton.js'
import LogoutButton from './components/LogoutButton/LogoutButton.js'
import SignUpButton from './components/SignUpButton/SignUpButton.js'
import SignUpForm from './components/SignUpForm/SignUpForm.js'
import LoginForm from './components/LoginForm/LoginForm.js'
import CreateCatCardButton from './components/CreateCatCardButton/CreateCatCardButton.js'
import CreateCatCard from './components/CreateCatCard/CreateCatCard.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("not-my-cat-token")) {
      setLoggedIn(true)
    }
  })
  
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Not My Cat</h1>
          <div />
          { loggedIn && <LogoutButton />}
          {!loggedIn && <>
          <LoginButton />
          <SignUpButton />
          </> }
        </header>
        <CreateCatCardButton />
        { !loggedIn && <p className="latest-cats">Login to see all the latest cats</p> }
        <div>
          <Route path= '/signup' component={SignUpForm} />
          <Route path= '/new-cat' component={CreateCatCard} />
          <Route path= '/login' component={LoginForm} />
        </div>
      </Router>
    </div>
  );
}
