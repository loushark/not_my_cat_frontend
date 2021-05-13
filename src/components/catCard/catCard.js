import React from 'react';
import logo from '../../bobcat.png';
import '../../App.css';

function Cat() {
  return (
    <div>
    <header className="Cat-header"/>
    <h1>Spotted By:</h1>
    <img src={logo} className="Cat-image"/>
    <div>
    </div>
    </div>
  )
}

export default Cat;
