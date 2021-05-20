import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = (props) => {
  const [userData, setUserData] = useState({
    _id: '',
    email: '',
    password: ''
  })

  const [invalid, setInvalid] = useState(false)
  const [signUp, setSignUp] = useState(false)
  const [missing, setMissing] = useState(false)

  const onChange = (element) => {
    setUserData((prevState) => ({...prevState, [element.target.name]: element.target.value }))
  }

  const signup = (element) => {
    element.preventDefault()

    const { _id, email, password } = userData
    if( _id === '' || email === '' || password === '' ) {
      setMissing(true)
      return setTimeout(() => {setMissing(false)}, 3000)
    }
    
    axios.post('http://localhost:8082/api/users', userData)
    .then(response => {
      if (response.status !== 500) {
        setSignUp(true)
        setTimeout(() => {props.history.push("/")}, 2000)
      }
    })
    .catch(error => {
      setInvalid(true)
      setTimeout(() => {setInvalid(false)}, 3000)
      console.log(error)
    })
  }

  return (
    <form className="SignUp-form" onSubmit={element => signup(element)}>
      <h3>Sign up to add your cats!</h3>
      {missing && <><strong className='negative-alert'> All fields must be populated </strong><br></br></>}
      {invalid && <><strong className='negative-alert'> Email has already been used! </strong><br></br></>}
      {signUp && <><strong className='positive-alert'> Sign-Up successful! </strong><br></br></>}
      <input type="text"
        name="_id"
        placeholder="Username"
        onChange={element => onChange(element)}/>
      <br />
      <input type="email"
        name="email"
        placeholder="Email"
        onChange={element => onChange(element)} />
      <br />
      <input type="password"
        name="password"
        placeholder="Password"
        onChange={element => onChange(element)} />
      <br />
      <input type="submit" className="button"/>
    </form>
  );
};

export default SignUpForm;
