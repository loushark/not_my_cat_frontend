import React from 'react';


const LoginForm = () => {
  return (

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
  </div>
  );
};

export default LoginForm;
