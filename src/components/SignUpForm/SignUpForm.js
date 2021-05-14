import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: ""
  })
  console.log(userData)

  const onChange = (element) => {
    setUserData(() => ({[element.target.name]: element.target.value }))
  }

  const signup = (element) => {
    element.preventDefault()
    axios.post('http://localhost:8082/api/users', userData)
    .then(response => {
      if (response.status === 200) {
        console.log(response)
        console.log("Sign up complete")
        return response   }
      else {
        console.log("Not sending")
      }
  })
}
  return (

  <div>
    <h3>Sign up to add your cats!</h3>

    <form className="SignUp-form" onSubmit={element => signup(element)}>
      <input type="text"
      name="username"
      placeholder="Username"
      onChange={element => onChange(element)}/>
      <br />
      <br />
      <input type="email"
      name="email"
      placeholder="Email"
      onChange={element => onChange(element)} />
      <br />
      <br />
      <input type="password"
      name="password"
      placeholder="Password"
      onChange={element => onChange(element)} />
      <br />
      <br />
      <input type="submit" className="button" onClick={element => signup(element)}/>
    </form>
    </div>
  );
};

export default SignUpForm;
