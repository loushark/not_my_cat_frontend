import React from 'react';
import logo from '../../bobcat.png';
import '../../App.css';

const Cat = ({ name, userId }) => {
  return (
    <div className="Cat-id">
      <header className="Cat-header">
        <h1>Spotted By:{userId}</h1>
      </header>
      <img src={logo} className="Cat-image" alt="cat"/>
      <h2>{name}</h2>
      <div className="Cat-attributes">
        <table className="Cat-table">
          <tr>
            <th>Cattitude</th>
            <td>12</td>
          </tr>
          <tr>
            <th>Floofiness</th>
            <td>6</td>
          </tr>
          <tr>
            <th>Chonk</th>
            <td>10</td>
          </tr>
        </table>
      </div>
    </div>
  )
}
export default Cat;
