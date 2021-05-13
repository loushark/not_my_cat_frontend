import React from 'react';
import { Link } from 'react-router-dom';

const LoginButton = () => {
  return (
    <div>
    <Link to="/login" className="Login-button">Login</Link>
    </div>
  );
};

export default LoginButton;
