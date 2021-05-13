import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';
import LogoutButton from './LogoutButton.js'
import { Link } from 'react-router-dom';

describe('logoutButton', () => {
  const logout = LogoutButton()
  it('returns a logout button displayed on the page', () => {
  expect(logout).toMatchObject(<div>
  <Link to="/" className="Logout-button">Logout</Link>
  </div>)
})
})
