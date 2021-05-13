import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';
import SignUpForm from './SignUpForm.js'

describe('Sign up form', () => {
  const signUp = SignUpForm()
  it('displays a user sign up form on the page', () => {
  expect(signUp).toMatchObject(
    <div>
      <h3>Sign up to add your cats!</h3>

      <form className="SignUp-form">
        <input type="text" placeholder="Username" />
        <br />
        <br />
        <input type="email" placeholder="Email" />
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
