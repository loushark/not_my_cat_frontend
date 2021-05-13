import React from 'react';
import { Link } from 'react-router-dom';

const LogoutButton = () => {
  return (
    <div>
    <Link to="/" className="Logout-button">Logout</Link>
    </div>
  );
};

export default LogoutButton;
