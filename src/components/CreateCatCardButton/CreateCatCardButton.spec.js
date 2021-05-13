import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';
import CreateCatCardButton from './CreateCatCardButton.js'
import { Link } from 'react-router-dom';

describe('CreateCatCardButton', () => {
  const newcat = CreateCatCardButton()
  it('returns a create cat button displayed on the page', () => {
  expect(newcat).toMatchObject(<div><Link to="/new-cat" className="NewCat-button">Add a Cat</Link></div>)
})
})
