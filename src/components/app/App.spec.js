import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';

describe('app', () => {
  it('should render a <div />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toEqual(1);
  })
})