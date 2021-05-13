import React from 'react';


const SignUpForm = () => {
  return (

  <div>
    <h3>Sign up to add your cats!</h3>

    <form className="SignUp-form">
      <input type="text" placeholder="Username" />
      <br />
      <br />
      <input type="email" placeholder="Email" />
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

export default SignUpForm;
