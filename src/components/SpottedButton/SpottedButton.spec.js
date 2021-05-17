import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';
import SignUpButton from './SignUpButton.js'
import { Link } from 'react-router-dom';

describe('SignUpButton', () => {
  const signUp = SignUpButton()
  it('returns a sign up button displayed on the page', () => {
  expect(signUp).toMatchObject(<>
  <button>Spotted!</button>
  </>)
})

})
