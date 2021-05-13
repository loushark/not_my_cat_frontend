import React from 'react';
import logo from '../../bobcat.png';
import '../../App.css';

function Cat() {
  return (
    <div>
    <header className="Cat-header">
    <h1>Spotted By:</h1>
    </header>
    <img src={logo} className="Cat-image"/>
    <h2>Name</h2>
    <div>
    <table>
    </table>
    </div>
    </div>
  )
}

export default Cat;
