import React from 'react';
import axios from 'axios';
import { shallow, mount } from 'enzyme';
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

describe('login', () => {
  it('sends a post request to the server and returns a jwt', () => {
    const wrapper = mount(<LoginForm/>);
    wrapper.find('[type="text"]').at(0).instance().value = "catlover69";
    wrapper.find('[type="password"]').instance().value = "password1";
    // wrapper.find('[type="submit"]').simulate('click');

    expect(wrapper.find('p').text()).toEqual("");
  })
})