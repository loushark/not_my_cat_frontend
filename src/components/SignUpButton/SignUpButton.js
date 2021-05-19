import React from 'react';
import { Link } from 'react-router-dom';

const SignUpButton = () => {
  return (
    <>
    <Link to="/signup" className="button-nav">Sign Up</Link>
    </>
  );
};

export default SignUpButton;
