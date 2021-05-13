import React, { useState } from 'react';


const LoginForm = () => {

  const [userData, setUserData] = useState({
    username: "",
    password: ""
  })

  return (

  <div>
    <h3>Login to add your cats!</h3>

    <form className="Login-form">
      <input type="text" placeholder="Username" onChange={element => (element.target.value)}/>
      <br />
      <br />
      <input type="password" placeholder="Password" onChange={element => (element.target.value)}/>
      <br />
      <br />
      <input type="submit" />
    </form>
    <p>{username}{password}</p>
  </div>
  );
};

export default LoginForm;
