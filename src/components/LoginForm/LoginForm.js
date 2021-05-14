import React, { useState } from 'react';
import { AuthContext } from "../../App";
import axios from 'axios';

const LoginForm = (props) => {

  const { dispatch } = React.useContext(AuthContext);
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
        return response      
      }
    })
    .then(res => {
      console.log(res.data)
      dispatch({
        type: "LOGIN",
        data: res.data
      })
      props.history.push('/')
      console.log(props)
    })
    .catch(error => {
      setInvalid(true)
      console.log(error)
    })
  }

  return (

  <div className="form">
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
      <input type="submit" className="button"/>
    </form>
  </div>
  );
};

export default LoginForm;
