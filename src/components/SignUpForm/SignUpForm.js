import React from 'react';


const SignUpForm = () => {
  return (
    <form className="SignUp-form" >
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="submit" />
    </form>
  );
};

export default SignUpForm;
