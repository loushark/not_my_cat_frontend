import React from 'react';
import { Link } from 'react-router-dom';

const LogoutButton = () => {
  return (
    <div>
    <Link to="/login" className="Login-button">Logout</Link>
    </div>
  );
};

export default LogoutButton;
