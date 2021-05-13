import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = (props) => {

  const [userData, setUserData] = useState({
    username: '',
    password: ''
  })
  
  const [invalid, setInvalid] = useState(false)
  
  const onChange = (element) => {
    setUserData((prevState) => ({...prevState, [element.target.name]: element.target.value }))
  }

  const login = (element) => {
    element.preventDefault()

    axios.post('http://127.0.0.1:8082/api/login', userData)
    .then(response => {
      if (response.status === 200) {
        localStorage.setItem("not-my-cat-token", response.data.accessToken)
        console.log(response)
        props.history.push('/')
      }
    })
    .catch(error => {
      setInvalid(true)
      console.log(error)
    })
  }

  return (

  <div>
    <h3>Login to add your cats!</h3>
    {invalid && <div>
      <strong>User details are incorrect!</strong>
    </div>}
    <form className="Login-form" onSubmit={element => login(element)}>
      <input type="text"
       name="username" 
       placeholder="Username"
       onChange={element => onChange(element)}/>
      <br />
      <br />
      <input type="password" 
      name="password"
      placeholder="Password" 
      onChange={element => onChange(element)}/>
      <br />
      <br />
      <input type="submit" />
    </form>
  </div>
  );
};

export default LoginForm;
