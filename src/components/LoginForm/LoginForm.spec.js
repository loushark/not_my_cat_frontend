import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';
import LoginForm from './LoginForm.js'

describe('Login form', () => {
  const loginForm = LoginForm()
  it('displays a user login form on the page', () => {
  expect(loginForm).toMatchObject(
    <div>
      <h3>Login to add your cats!</h3>

      <form className="Login-form">
        <input type="text" placeholder="Username" />
        <br />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>)
})

})
