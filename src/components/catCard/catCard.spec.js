import React from 'react';
import { shallow } from 'enzyme';
import Cat from './catCard.js';

describe('catCard', () => {
  const wrapper = shallow(<Cat />);

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(2);
  })

  it('has a title', () => {
    expect(wrapper.exists('h1')).toEqual(true)
  })
})
