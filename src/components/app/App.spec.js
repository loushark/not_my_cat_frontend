import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';

describe('app', () => {
  const wrapper = shallow(<App />);

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(2);
  })

  it('should have a header with class App-header', () => {
    expect(wrapper.exists('.App-header')).toEqual(true)
  })
})