import React from 'react';
import { Link } from 'react-router-dom';

const LogoutButton = () => {
 
  const onClick = () => {
    localStorage.removeItem("not-my-cat-token")
  }

  return (
    <div>
    <Link to="/" className="Logout-button" onClick={onClick()}>Logout</Link>
    </div>
  );
};

export default LogoutButton;
