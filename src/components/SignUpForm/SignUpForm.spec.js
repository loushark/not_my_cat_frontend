import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';
import SignUpForm from './SignUpForm.js'

describe('Sign up form', () => {
  const signUp = SignUpForm()
  it('displays a user sign up form on the page', () => {
  expect(signUp).toMatchObject(
    <form className="SignUp-form" >
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="submit" />
    </form>)
})

})
