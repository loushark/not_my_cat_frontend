import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';
import LoginButton from './LoginButton.js'
import { Link } from 'react-router-dom';

describe('loginButton', () => {
  const login = LoginButton()
  it('returns a login button displayed on the page', () => {
  expect(login).toMatchObject(<div><Link to="/login" className="Login-button">Login</Link></div>)
})
})
