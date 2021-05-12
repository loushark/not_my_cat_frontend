import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';
import LoginButton from './LoginButton.js'

describe('loginButton', () => {
  const login = LoginButton()
  it('returns a login button displayed on the page', () => {
  expect(login).toMatchObject(<button className="login-button">Login</button>)
})
})
