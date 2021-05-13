import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../App";


const LogoutButton = (props) => {

  const { dispatch } = React.useContext(AuthContext);
 
  return (
    <div>
    <Link to="/" className="Logout-button" onClick={() => dispatch({type: "LOGOUT"})}>Logout</Link>
    </div>
  );
};

export default LogoutButton;
