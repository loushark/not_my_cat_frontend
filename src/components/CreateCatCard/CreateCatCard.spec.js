import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';
import CreateCatCard from './CreateCatCard.js'

describe('CreateCatCard', () => {
  const newcat = CreateCatCard()
  it('displays a create cat card form on the page', () => {
  expect(newcat).toMatchObject(
    <div>
      <h3>Add a cat!</h3>

      <form className="newcat-form">
        <input type="text" placeholder="Name of Cat" />
        <br />
        <br />
        <input type="text" placeholder="Attribute 1" />
        <br />
        <br />
        <input type="text" placeholder="Attribute 2" />
        <br />
        <br />
        <input type="text" placeholder="Attribute 3" />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>)
})

})
