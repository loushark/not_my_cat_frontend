import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../App";


const LogoutButton = (props) => {

  const { dispatch } = React.useContext(AuthContext);
 
  return (
    <>
    <Link to="/" className="button" onClick={() => dispatch({type: "LOGOUT"})}>Logout</Link>
    </>
  );
};

export default LogoutButton;
