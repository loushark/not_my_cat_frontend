import React from 'react';
import logo from '../../bobcat.png';
import '../../App.css';

function Cat() {
  return (
    <div className="Cat-id">
      <header className="Cat-header">
        <h1>Spotted By:</h1>
      </header>
      <img src={logo} className="Cat-image" alt="cat"/>
      <h2>Name</h2>
      <div className="Cat-attributes">
        <table className="Cat-table">
          <tr>
            <th></th>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Cat;
