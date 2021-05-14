import React from 'react';
import logo from './bobcat.png';
import './App.css';
import LoginButton from './components/LoginButton/LoginButton.js'
import LogoutButton from './components/LogoutButton/LogoutButton.js'
import SignUpButton from './components/SignUpButton/SignUpButton.js'
import SignUpForm from './components/SignUpForm/SignUpForm.js'
import LoginForm from './components/LoginForm/LoginForm.js'
import CreateCatCardButton from './components/CreateCatCardButton/CreateCatCardButton.js'
import CreateCatCard from './components/CreateCatCard/CreateCatCard.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CatList from './components/catList/catList.js'

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  accessToken: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.data.user));
      localStorage.setItem("accessToken", JSON.stringify(action.data.accessToken));
      return {
        ...state,
        isAuthenticated: true,
        user: action.data.user,
        accessToken: action.data.accessToken
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        isAuthenticated: false,
        user: null,
        accessToken: null
      };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || null)
    const accessToken = JSON.parse(localStorage.getItem("accessToken") || null)

    if (user && accessToken) {
      dispatch({ type: "LOGIN", data: { user, accessToken }})
    }
  }, [state.isAuthenticated])

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}>
      <div className="App">
        <Router>
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Link to="/"><h1 className="title">Not My Cat</h1></Link>
          </header>
          <div className="nav">
            {!state.isAuthenticated ? <>
            <LoginButton />
            <SignUpButton />
            </> : <><LogoutButton />
            <CreateCatCardButton /></>}
          </div>
          <div className="nav">
            {state.isAuthenticated && <h3>what up {state.user}</h3> }
          </div>

          {!state.isAuthenticated ? <p className="latest-cats">Login to see all the latest cats</p>
          : <p className="latest-cats">Here are all the finest picks!</p>}
<CatList props={state}/>

          <div>
            <Route path= '/signup' component={SignUpForm} />
            <Route path= '/new-cat' component={CreateCatCard} />
            <Route path= '/login' component={LoginForm} />
          </div>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}
