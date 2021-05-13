import React from 'react';
import { Link } from 'react-router-dom';


const SignUpButton = () => {

  return (
    <div>
    <Link to="/signup" className="Signup-button">Sign Up</Link>
    </div>
  );
};

export default SignUpButton;
