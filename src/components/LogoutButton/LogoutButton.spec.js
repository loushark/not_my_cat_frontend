import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';
import LogoutButton from './LogoutButton.js'

describe('logoutButton', () => {
  const logout = LogoutButton()
  it('returns a logout button displayed on the page', () => {
  expect(logout).toMatchObject(<button className="logout-button">Login</button>)
})
})
