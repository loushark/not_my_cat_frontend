import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../../App';

describe('app', () => {
  const wrapper = shallow(<App />);

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(3);
  })

  it('should have a header with class App-header', () => {
    expect(wrapper.exists('.App-header')).toEqual(true)
  })

  it('has a title', () => {
    expect(wrapper.exists('h1')).toEqual(true)
  })

  it('has a logo', () => {
    expect(wrapper.exists('.App-logo')).toEqual(true)
  })

  it('has a p statment when a user is not logged in', () => {
    expect(wrapper.exists('.latest-cats')).toEqual(true)
  })
})

describe('buttons', () => {
  const wrapper = mount(<App />);

  it('has a login button', () => {
    expect(wrapper.exists('.Login-button')).toEqual(true)
  })

  it('has a sign up button', () => {
    expect(wrapper.exists('.Signup-button')).toEqual(true)
  })

  it('has a logout button', () => {
    expect(wrapper.exists('.Logout-button')).toEqual(true)
  })

  it('has a add a cat button', () => {
    expect(wrapper.exists('.NewCat-button')).toEqual(true)
  })
})

describe('forms', () => {
  it('has a sign up form', () => {
    const wrapper = mount(<App />);
    const signUpButton = wrapper.find('SignUpButton').at(0)
    signUpButton.simulate('click')

    expect(wrapper.exists('.SignUp-form')).toEqual(true)
  })
})
